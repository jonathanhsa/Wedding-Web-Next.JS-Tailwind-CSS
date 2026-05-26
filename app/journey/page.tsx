import Link from "next/link";
import WeddingMusic from "../components/WeddingMusic";

const moreMoments = [
  {
    year: "2021",
    title: "Small Beginnings",
    detail:
      "A short hello turned into many conversations, shared playlists, and the comfort of being understood.",
    highlight: "First spark",
    image:
      "https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=900&q=80",
  },
  {
    year: "2022",
    title: "Growing Closer",
    detail:
      "Families met, routines blended, and ordinary weekends became the quiet proof that love was growing steadily.",
    highlight: "A shared rhythm",
    image:
      "https://images.unsplash.com/photo-1529634597503-139d3726fed5?auto=format&fit=crop&w=900&q=80",
  },
  {
    year: "2024",
    title: "Choosing Forever",
    detail:
      "Through distance, plans, and prayers, they learned that commitment is built in the small decisions made every day.",
    highlight: "Promise in progress",
    image:
      "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=900&q=80",
  },
  {
    year: "2026",
    title: "The Wedding Day",
    detail:
      "A new chapter begins with gratitude, surrounded by the people who have witnessed and blessed their story.",
    highlight: "The beginning",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80",
  },
];

export default function JourneyPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f5ee] text-[#191917]">
      <WeddingMusic />

      <header className="relative z-20 border-b border-[#ded6c8] bg-[#f8f5ee]/92 px-5 py-4 backdrop-blur-md sm:px-10 lg:px-20">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-5">
          <Link
            href="/"
            className="font-serif text-2xl italic tracking-[-0.02em] text-[#745106] sm:text-3xl"
          >
            Alya & Raka
          </Link>
          <Link
            href="/#story"
            className="bg-[#191917] px-6 py-4 text-[10px] font-bold uppercase tracking-[0.22em] text-white transition duration-500 hover:bg-[#745106] sm:px-10 sm:text-xs"
          >
            Back To Story
          </Link>
        </nav>
      </header>

      <section className="relative px-4 py-16 sm:px-8 sm:py-20 lg:px-16">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(159,115,0,0.12),transparent_28%),radial-gradient(circle_at_82%_34%,rgba(255,255,255,0.82),transparent_24%)]" />

        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.42em] text-[#9f7300]">
            Extended Story
          </p>
          <h1 className="mt-5 font-serif text-6xl leading-none tracking-[-0.04em] text-[#111] sm:text-7xl lg:text-8xl">
            See More
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#191917]/60 sm:text-lg">
            A wider view of the small moments, quiet choices, and meaningful
            details that shaped this journey.
          </p>
          <div className="mx-auto mt-8 h-px w-16 bg-[#745106]" />
        </div>

        <div className="relative mx-auto mt-20 hidden max-w-7xl lg:block">
          <div className="absolute left-0 right-0 top-1/2 z-0 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-[#745106] to-transparent" />

          <div className="grid min-h-[620px] grid-cols-4 gap-8">
            {moreMoments.map((moment, index) => {
              const isTop = index % 2 === 0;

              return (
                <article
                  key={moment.title}
                  className={`relative flex ${isTop ? "items-start pb-48" : "items-end pt-48"}`}
                >
                  <div className="absolute left-1/2 top-1/2 z-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#9f7300] shadow-[0_0_0_8px_rgba(159,115,0,0.09)]" />
                  <div
                    className={`absolute left-1/2 z-0 h-20 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#d8cdbb] to-transparent ${
                      isTop ? "bottom-1/2 mb-3" : "top-1/2 mt-3"
                    }`}
                  />

                  <div className="group relative z-10 w-full overflow-hidden border border-[#ded6c8] bg-white/95 p-3 shadow-[0_24px_70px_rgba(54,44,25,0.10)] backdrop-blur transition duration-700 hover:-translate-y-2">
                    <div
                      className="h-44 bg-cover bg-center transition duration-1000 group-hover:scale-105"
                      style={{
                        backgroundImage: `linear-gradient(rgba(248,245,238,0.12),rgba(248,245,238,0.18)), url('${moment.image}')`,
                      }}
                    />
                    <div className="p-6 text-center">
                      <span className="inline-block border border-[#c8b996] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.24em] text-[#745106]">
                        {moment.highlight}
                      </span>
                      <b className="mt-5 block text-xs tracking-[0.36em] text-[#9f7300]">
                        {moment.year}
                      </b>
                      <h2 className="mt-3 font-serif text-3xl font-normal leading-tight text-[#191917]">
                        {moment.title}
                      </h2>
                      <p className="mt-4 text-sm leading-7 text-[#191917]/62">
                        {moment.detail}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl gap-7 lg:hidden">
          {moreMoments.map((moment) => (
            <article
              key={moment.title}
              className="overflow-hidden border border-[#ded6c8] bg-white/82 p-3 shadow-[0_18px_55px_rgba(54,44,25,0.10)]"
            >
              <div
                className="h-56 bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(rgba(248,245,238,0.12),rgba(248,245,238,0.18)), url('${moment.image}')`,
                }}
              />
              <div className="p-6">
                <span className="inline-block border border-[#c8b996] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.24em] text-[#745106]">
                  {moment.highlight}
                </span>
                <b className="mt-5 block text-xs tracking-[0.36em] text-[#9f7300]">
                  {moment.year}
                </b>
                <h2 className="mt-3 font-serif text-3xl font-normal leading-tight text-[#191917]">
                  {moment.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-[#191917]/62">
                  {moment.detail}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-20 max-w-3xl border-y border-[#d8cdbb] px-4 py-10 text-center">
          <span className="font-serif text-2xl text-[#745106]">&#9825;</span>
          <p className="mt-4 font-serif text-2xl leading-relaxed text-[#745106]">
            Every season brought them closer to the same answer: love is not a
            single grand moment, but a thousand gentle decisions.
          </p>
        </div>

        <footer className="mt-14 text-center text-sm leading-7 text-[#191917]/55">
          <p>
            Dibuat oleh Jonathan Hamonangan Saragih ·{" "}
            <a
              href="mailto:saragihjonathan80@gmail.com"
              className="transition hover:text-[#745106]"
            >
              saragihjonathan80@gmail.com
            </a>{" "}
            ·{" "}
            <a
              href="https://instagram.com/jonathans.sa"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-[#745106]"
            >
              @jonathans.sa
            </a>
          </p>
        </footer>
      </section>
    </main>
  );
}
