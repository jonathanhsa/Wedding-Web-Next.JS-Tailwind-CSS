import Link from "next/link";
import WeddingMusic from "./components/WeddingMusic";

const storyItems = [
  {
    season: "Autumn 2021",
    title: "The First Meeting",
    text: "It began with a quiet conversation and a shared laugh that made the afternoon feel softer than usual.",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80",
  },
  {
    season: "Winter 2023",
    title: "The First Date",
    text: "A warm dinner, a long walk through city lights, and the gentle certainty that something beautiful had begun.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80",
  },
  {
    season: "Spring 2026",
    title: "The Proposal",
    text: "Against a golden horizon, a simple question became a promise to keep choosing each other every day.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  },
];

const events = [
  {
    label: "Ceremony",
    title: "Akad Nikah",
    subtitle: "The Exchange of Vows",
    time: "09.00 AM - 11.00 AM",
    venue: "The Glass House",
    address: "123 Botanical Gardens Drive, Bandung",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "Celebration",
    title: "Resepsi",
    subtitle: "Dinner & Dancing",
    time: "12.30 PM - 04.00 PM",
    venue: "The Glass House",
    address: "123 Botanical Gardens Drive, Bandung",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f5ee] text-[#191917]">
      <WeddingMusic />

      <header className="fixed inset-x-0 top-0 z-40 border-b border-[#ded6c8] bg-[#f8f5ee]/92 px-5 py-4 backdrop-blur-md sm:px-10 lg:px-20">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-5">
          <a
            href="#home"
            className="font-serif text-2xl italic tracking-[-0.02em] text-[#745106] sm:text-3xl"
          >
            Alya & Raka
          </a>

          <div className="hidden items-center gap-12 text-xs font-bold uppercase tracking-[0.34em] md:flex">
            <a className="nav-link active-link" href="#story">
              Our Story
            </a>
            <a className="nav-link" href="#details">
              Event Details
            </a>
            <a className="nav-link" href="#rsvp">
              RSVP
            </a>
          </div>

          <a
            href="#details"
            className="hidden bg-[#191917] px-11 py-5 text-xs font-bold uppercase tracking-[0.28em] text-white transition duration-500 hover:bg-[#745106] lg:block"
          >
            Join Our Celebration
          </a>

          <a
            href="#details"
            className="bg-[#191917] px-4 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-white transition duration-500 hover:bg-[#745106] md:hidden"
          >
            Details
          </a>
        </nav>
      </header>

      <section
        id="home"
        className="relative overflow-hidden px-4 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-36 lg:px-20"
      >
        <div className="ambient-glow" />
        <div className="mx-auto max-w-7xl">
          <div className="hero-frame reveal-up">
            <div
              className="hero-photo"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(248,245,238,0.36),rgba(248,245,238,0.42)), url('https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1800&q=85')",
              }}
            >
              <div className="hero-content">
                <div className="date-row">
                  <span />
                  <p>21.09.2026</p>
                  <span />
                </div>

                <h1>Alya & Raka</h1>
                <p className="hero-copy">
                  Joyfully invite you to share in the beginning of their new
                  life together.
                </p>

                <div className="location-box">
                  <p>The Location</p>
                  <h2>Villa Balbiano</h2>
                  <span>Bandung, Indonesia</span>
                </div>
              </div>
            </div>
          </div>

          <a href="#story" className="scroll-cue">
            <span>Scroll To Explore</span>
            <i />
          </a>
        </div>
      </section>

      <section id="story" className="section-shell border-t border-transparent">
        <div className="section-heading reveal-up">
          <h2>Our Journey</h2>
          <p>
            From a chance encounter to a lifetime of shared moments. This is
            the story of how our paths intertwined.
          </p>
          <span />
        </div>

        <div className="timeline">
          {storyItems.map((item, index) => (
            <article
              key={item.title}
              className={`timeline-item reveal-up ${
                index % 2 === 0 ? "timeline-left" : "timeline-right"
              }`}
            >
              <div className="timeline-copy">
                <p>{item.season}</p>
                <h3>{item.title}</h3>
                <span>{item.text}</span>
              </div>
              <div className="timeline-dot" />
              <div className="timeline-image-wrap">
                <div
                  className="timeline-image"
                  style={{
                    backgroundImage: `url('${item.image}')`,
                  }}
                />
              </div>
            </article>
          ))}
        </div>

        <div className="story-ending reveal-up">
          <span>&#9825;</span>
          <p>And the journey continues...</p>
          <Link href="/journey" className="story-more-link">
            See More
          </Link>
        </div>
      </section>

      <section id="details" className="section-shell border-t border-[#d8cdbb]">
        <div className="section-heading reveal-up">
          <h2>The Details</h2>
          <div className="heart-divider">
            <span />
            <b>&#9825;</b>
            <span />
          </div>
          <p>
            We invite you to join us in celebrating our union. The day&apos;s
            events will take place at a single, beautiful location to allow for
            a seamless transition from our vows to the festivities.
          </p>
        </div>

        <div className="event-grid">
          {events.map((event) => (
            <article key={event.title} className="event-card reveal-up">
              <div
                className="event-image"
                style={{
                  backgroundImage: `linear-gradient(rgba(248,245,238,0.16),rgba(248,245,238,0.24)), url('${event.image}')`,
                }}
              />
              <div className="event-panel">
                <p className="event-pill">{event.label}</p>
                <h3>{event.title}</h3>
                <h4>{event.subtitle}</h4>

                <div className="event-meta">
                  <span>&#9719;</span>
                  <div>
                    <p>Time</p>
                    <strong>{event.time}</strong>
                  </div>
                </div>

                <div className="event-meta">
                  <span>&#8982;</span>
                  <div>
                    <p>Venue</p>
                    <strong>{event.venue}</strong>
                    <em>{event.address}</em>
                  </div>
                </div>

                <a href="#rsvp" className="map-link">
                  View Map <span>&rarr;</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="rsvp" className="rsvp-section">
        <div className="section-heading reveal-up">
          <h2>RSVP</h2>
          <p>
            Please confirm your attendance and leave a wish for our wedding day.
          </p>
        </div>

        <form className="rsvp-form reveal-up">
          <input placeholder="Your name" />
          <select defaultValue="attending">
            <option value="attending">I will attend</option>
            <option value="absent">I cannot attend</option>
          </select>
          <textarea placeholder="Write your wishes" />
          <button type="button">Send Confirmation</button>
        </form>
      </section>

      <footer className="footer">
        <h2>Alya & Raka</h2>
        <div>
          <a href="#home">Instagram</a>
          <a href="#story">Pinterest</a>
          <a href="#rsvp">Contact</a>
        </div>
        <p>With love, Alya & Raka &copy; 2026</p>
        <p className="footer-credit">
          Dibuat oleh Jonathan Hamonangan Saragih ·{" "}
          <a href="mailto:saragihjonathan80@gmail.com">
            saragihjonathan80@gmail.com
          </a>{" "}
          ·{" "}
          <a
            href="https://instagram.com/jonathans.sa"
            target="_blank"
            rel="noreferrer"
          >
            @jonathans.sa
          </a>
        </p>
      </footer>
    </main>
  );
}
