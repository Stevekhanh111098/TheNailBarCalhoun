import { NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");
  const origin = new URL(request.url).origin;

  if (code) {
    const cookieStore = await cookies();
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return cookieStore.getAll();
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          },
        },
      }
    );

    await supabase.auth.exchangeCodeForSession(code);
    // After exchanging the code the user is authenticated via cookies.
    // Create a profile row for the user if one doesn't already exist.
    try {
      const { data: userData } = await supabase.auth.getUser();
      const user = userData.user;
      if (user) {
        await supabase.from("profiles").insert(
          {
            id: user.id,
            email: user.email,
          },
          { upsert: false }
        );
      }
    } catch (e) {
      // silently ignore; profile can be created later from client or admin
      console.error("profile creation after auth callback failed", e);
    }
  }

  return NextResponse.redirect(origin);
}
