import Image from "next/image";

export default function Home() {
  return (
    <div style={{ fontFamily: "var(--font-bodoni-moda)" }}>
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <Image
          src="/hero2.jpg"
          alt="Beautiful nail art at The Nail Bar"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="mb-4 text-5xl font-semibold tracking-wide md:text-6xl">
            The Nail Bar
          </h1>
          <p className="mb-8 max-w-md text-lg font-light tracking-wide text-white/90 md:text-xl">
            Your destination for beautiful nails in Calhoun, GA
          </p>
          <a
            href="#"
            className="rounded-full border-2 border-white px-8 py-3 text-sm font-medium tracking-wider text-white transition-all duration-300 hover:bg-white hover:text-zinc-900"
          >
            Book Appointment
          </a>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20" style={{ paddingLeft: "10%", paddingRight: "10%" }}>
        <h2 className="mb-2 text-center text-3xl font-semibold text-zinc-900">Our Services</h2>
        <p className="mb-12 text-center text-sm text-zinc-500">Treat yourself to the best nail care in Calhoun</p>

        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          <div className="group flex flex-col items-center gap-4">
            <div className="flex h-30 w-30 items-center justify-center rounded-full bg-white shadow-md transition-all duration-300 group-hover:shadow-none group-hover:brightness-110">
              <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#78716c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3c-1.5 0-2.8 1-3.2 2.5L7.5 11c-.3 1.5.5 3 2 3.3h5c1.5-.3 2.3-1.8 2-3.3l-1.3-5.5C14.8 4 13.5 3 12 3z"/>
                <path d="M9.5 14.3V20c0 .6.4 1 1 1h3c.6 0 1-.4 1-1v-5.7"/>
              </svg>
            </div>
            <span className="text-base font-semibold tracking-wide text-zinc-600 transition-colors duration-300 group-hover:text-zinc-900">Manicure</span>
          </div>

          <div className="group flex flex-col items-center gap-4">
            <div className="flex h-30 w-30 items-center justify-center rounded-full bg-white shadow-md transition-all duration-300 group-hover:shadow-none group-hover:brightness-110">
              <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#78716c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 12c0 5 3 9 6 9s6-4 6-9"/>
                <path d="M6 12c0-4 1-9 6-9s6 5 6 9"/>
                <path d="M8 12h8"/>
                <path d="M10 16c0 0 1 2 2 2s2-2 2-2"/>
              </svg>
            </div>
            <span className="text-base font-semibold tracking-wide text-zinc-600 transition-colors duration-300 group-hover:text-zinc-900">Pedicure</span>
          </div>

          <div className="group flex flex-col items-center gap-4">
            <div className="flex h-30 w-30 items-center justify-center rounded-full bg-white shadow-md transition-all duration-300 group-hover:shadow-none group-hover:brightness-110">
              <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#78716c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 19.5l5-5 3 3 4.5-4.5 3 3L22 11.5"/>
                <path d="M12 3l1.5 3.5L17 8l-3.5 1.5L12 13l-1.5-3.5L7 8l3.5-1.5L12 3z"/>
                <circle cx="19" cy="5" r="1.5"/>
              </svg>
            </div>
            <span className="text-base font-semibold tracking-wide text-zinc-600 transition-colors duration-300 group-hover:text-zinc-900">Nail Art</span>
          </div>

          <div className="group flex flex-col items-center gap-4">
            <div className="flex h-30 w-30 items-center justify-center rounded-full bg-white shadow-md transition-all duration-300 group-hover:shadow-none group-hover:brightness-110">
              <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#78716c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 3l-3 8h-4l-3-8"/>
                <path d="M8 11c0 4 2 8 4 10 2-2 4-6 4-10"/>
                <path d="M6 11h12"/>
                <path d="M9 7h6"/>
              </svg>
            </div>
            <span className="text-base font-semibold tracking-wide text-zinc-600 transition-colors duration-300 group-hover:text-zinc-900">Nail Extensions</span>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="/services"
            className="inline-block rounded-full border border-zinc-900 px-8 py-3 text-sm font-medium text-zinc-900 transition-all duration-300 hover:bg-zinc-900 hover:text-white"
            style={{ backgroundColor: "#f5ead6" }}
          >
            View All Services
          </a>
        </div>
      </section>
    </div>
  );
}
