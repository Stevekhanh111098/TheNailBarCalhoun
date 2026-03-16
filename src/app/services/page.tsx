export default function Services() {
  return (
    <div className="py-16" style={{ paddingLeft: "10%", paddingRight: "10%", fontFamily: "var(--font-bodoni-moda)" }}>
      <h1 className="mb-4 text-center text-4xl font-semibold text-zinc-900">Our Services</h1>
      <p className="mb-16 text-center text-sm text-zinc-500">Treat yourself to the best nail care in Calhoun</p>

      {/* Spa Pedicure Menu */}
      <section className="mb-16">
        <h2 className="mb-2 text-center text-2xl font-semibold text-zinc-900" style={{ backgroundColor: "#dbeafe", display: "inline-block", width: "100%", padding: "8px 0" }}>
          Spa Pedicure Menu
        </h2>
        <p className="mb-8 mt-4 text-center text-sm text-zinc-500">Callus Remove with cheese grater available as add-on</p>

        <div className="space-y-6">
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-zinc-900">Classic Pedicure</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600">
              Whirlpool foot softening soak, nail trimming, shaping, and cuticle cleanup, followed by sugar scrub, a foot massage, and finished with your choice of regular polish.
            </p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-zinc-900">Classic Pedicure with Gel</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600">
              Whirlpool foot softening soak, nail trimming, shaping, and cuticle cleanup. Followed by sugar scrub, a foot massage, and finished with your choice of gel polish.
            </p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-zinc-900">Deluxe Pedicure</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600">
              Classic pedicure with your choice of scent 4 in 1 package for soaking salt, sugar scrub, mask, and lotion massage with hot towel. This treatment will relax your lower leg &amp; foot as well as brighten, soften, relieve dry &amp; dull skin. Finish with your choice of regular polish.
            </p>
            <p className="mt-2 text-xs italic text-zinc-500">Also available with Gel</p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-zinc-900">Jelly Pedicure</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600">
              The jelly transforms warm water into a soft fluffy jelly made from an assortment of natural plant oils and light fragrances. Our jelly bath will soften and moisturize your skin and reduce odor. Classic pedicure and massage with hot towel and your choice of regular polish.
            </p>
            <p className="mt-2 text-xs italic text-zinc-500">Also available with Gel</p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-zinc-900">Deluxe Hot Stone Pedicure</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600">
              Includes deluxe pedicure 4 in 1 package with longer lower leg &amp; feet massage with hot towel, body oil, and hot stone. The hot stone with body oil massage will provide deep relaxation, reduce stress, increase circulation, and detoxify. Finish with your choice of regular polish.
            </p>
            <p className="mt-2 text-xs italic text-zinc-500">Also available with Gel</p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-zinc-900">Jelly Hot Stone Pedicure</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600">
              Indulge in a one-of-a-kind jelly spa experience to give your feet the care they deserve. This treatment is perfect for soothing dry feet and tired muscles. As the powdered jelly pedicure dissolves in water, it transforms into a fluffy, translucent gel. This treatment also includes a hot towel infused with essential oils and a hot stone massage to help soothe your skin and enhance circulation. Finish with your choice of regular polish.
            </p>
            <p className="mt-2 text-xs italic text-zinc-500">Also available with Gel</p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-zinc-900">Volcano Spa Pedicure</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600">
              Experience a refreshing and detoxifying pedicure like never before with Detox Volcano Crystal and Activators, which create a fun, bubbling explosion. Elevate your pampering session with an exfoliating sugar scrub, collagen cream mask, and collagen massage lotion made entirely of organic base ingredients. Enjoy the hot towel and hot stone massage with floral body oil, which helps moisturize and soften your skin. Finish with your choice of regular polish.
            </p>
            <p className="mt-2 text-xs italic text-zinc-500">Also available with Gel</p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-zinc-900">Luxury Hot Stone Pedicure</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600">
              Pamper yourself with our Detox Volcano Spa, made with organic ingredients and a jelly package from various natural plant oils to help relax your body and mind. Experience the bliss of an essential oil hot towel and feet massage, followed by a soothing hot stone massage to increase circulation and promote restful sleep. Finish with your choice of regular polish.
            </p>
            <p className="mt-2 text-xs italic text-zinc-500">Also available with Gel</p>
          </div>
        </div>
      </section>

      {/* Choose Your Scent */}
      <section className="mb-16">
        <h2 className="mb-8 text-center text-2xl font-semibold text-zinc-900">Choose Your Scent!</h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-lg font-semibold text-zinc-900">Deluxe or Jelly Pedicure</h3>
            <p className="text-sm leading-relaxed text-zinc-600">
              Lavender, Milk &amp; Honey, Jasmine, Orange, Mango, Green Tea, Pomegranate, Rose, Cucumber, Lemon, Peppermint, No.5
            </p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-lg font-semibold text-zinc-900">Volcano Pedicure</h3>
            <p className="text-sm leading-relaxed text-zinc-600">
              Honey Pearl, Green Tea &amp; Aloe Vera, Lavender, Orange, No.5, Romance, Tropical Citrus
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
