"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase-client";

const supabase = createClient();

export default function CompleteProfilePage() {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let mounted = true;
    async function load() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push("/");
        return;
      }
      const { data: profile } = await supabase.from("profiles").select("phone, date_of_birth").eq("id", user.id).single();
      if (!mounted) return;
      if (profile) {
        setPhone(profile.phone ?? "");
        setDob(profile.date_of_birth ?? "");
      }
    }
    load();
    return () => { mounted = false; };
  }, [router]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      setLoading(false);
      router.push("/");
      return;
    }
    try {
      const { error } = await supabase
        .from("profiles")
        .update({ phone: phone || null, date_of_birth: dob || null })
        .eq("id", user.id);
      setLoading(false);
      if (error) {
        console.error("Update error:", error);
        alert("Failed to save profile: " + error.message);
        return;
      }
      router.refresh();
      router.push("/account");
    } catch (err) {
      setLoading(false);
      console.error("Unexpected error saving profile:", err);
      alert("Unexpected error saving profile. Check console for details.");
    }
  }

  return (
    <div className="mx-auto max-w-md p-6">
      <h1 className="mb-4 text-2xl font-semibold">Complete Your Profile</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-zinc-700">Phone</label>
          <input value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-zinc-900" />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-700">Date of Birth</label>
          <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} className="w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-zinc-900" />
        </div>
        <button disabled={loading} className="w-full rounded-full border border-zinc-900 px-6 py-2.5 text-sm font-medium text-zinc-900" style={{ backgroundColor: "#f5ead6" }}>
          {loading ? "Saving..." : "Save"}
        </button>
      </form>
    </div>
  );
}
