"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase-client";

export default function AuthProfileChecker() {
  const supabase = createClient();
  const [missing, setMissing] = useState<null | { phone?: boolean; date_of_birth?: boolean }>(null);

  useEffect(() => {
    let mounted = true;
    async function check() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user || !mounted) return;
      const { data: profile, error } = await supabase
        .from("profiles")
        .select("phone, date_of_birth")
        .eq("id", user.id)
        .single();

      if (error) return;
      const phoneMissing = !profile || !profile.phone;
      const dobMissing = !profile || !profile.date_of_birth;
      if (phoneMissing || dobMissing) setMissing({ phone: phoneMissing, date_of_birth: dobMissing });
    }
    check();
    return () => { mounted = false; };
  }, [supabase]);

  if (!missing) return null;

  return (
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 text-sm text-zinc-800">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="font-medium">Complete your profile</p>
          <p className="mt-1">We noticed some details are missing from your profile (phone or date of birth). Please add them so we can better serve you.</p>
          <p className="mt-2">
            <Link href="/complete-profile" className="font-medium underline text-zinc-900">Add missing details</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
