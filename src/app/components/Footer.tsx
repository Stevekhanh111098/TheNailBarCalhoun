import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white py-12" style={{ paddingLeft: "10%", paddingRight: "10%", fontFamily: "var(--font-bodoni-moda)" }}>
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
        <div className="flex flex-col items-start gap-4">
          <Image src="/icon.png" alt="The Nail Bar" width={100} height={100} />
          <div className="flex items-center gap-3">
            <a href="https://www.instagram.com/thenailbarincalhoun/" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-zinc-600 transition-colors hover:bg-pink-100 hover:text-pink-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href="https://www.facebook.com/TheNailBarCalhoun" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-zinc-600 transition-colors hover:bg-blue-100 hover:text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold text-zinc-900">Contact</h3>
          <div className="flex items-start gap-2 text-sm leading-6 text-zinc-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-zinc-500">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <a href="https://maps.google.com/?q=171+W+Belmont+Dr+%233,+Calhoun,+GA+30701" target="_blank" rel="noopener noreferrer" className="text-zinc-800 hover:underline">
              171 W Belmont Dr # 3<br />
              Calhoun, GA 30701
            </a>
          </div>
          <div className="mt-2 flex items-center gap-2 text-sm text-zinc-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-zinc-500">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <a href="tel:7066597693" className="text-zinc-800 hover:underline">(706) 659-7693</a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold text-zinc-900">Hours</h3>
          <table className="text-sm text-zinc-600">
            <tbody>
              <tr><td className="pr-6 py-0.5">Monday</td><td>9:30 AM – 7 PM</td></tr>
              <tr><td className="pr-6 py-0.5">Tuesday</td><td>9:30 AM – 7 PM</td></tr>
              <tr><td className="pr-6 py-0.5">Wednesday</td><td>9:30 AM – 7 PM</td></tr>
              <tr><td className="pr-6 py-0.5">Thursday</td><td>9:30 AM – 7 PM</td></tr>
              <tr><td className="pr-6 py-0.5">Friday</td><td>9:30 AM – 7 PM</td></tr>
              <tr><td className="pr-6 py-0.5">Saturday</td><td>9:30 AM – 6:30 PM</td></tr>
              <tr><td className="pr-6 py-0.5">Sunday</td><td>Closed</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8 border-t border-zinc-200 pt-6 text-center text-xs text-zinc-500">
        © 2026 The Nail Bar in Calhoun. All rights reserved.
      </div>
    </footer>
  );
}
