import "./about.css";
import Nav from "../navbar/nav.jsx";
import Footer from "../footer/footer.jsx";

export default function About() {
  return (
    <>
      <Nav />
      <main className="about-page">
        <section className="about-banner">
          <span className="about-badge">About Grocery</span>
          <h1>Fresh groceries delivered with care and local love.</h1>
          <p>
            We bring the best produce, pantry essentials, and daily favorites to your
            door with speed, transparency, and a friendly neighborhood touch.
          </p>
          <div className="about-metrics">
            <div className="metric-card">
              <strong>10k+</strong>
              <span>happy customers</span>
            </div>
            <div className="metric-card">
              <strong>100+</strong>
              <span>fresh products</span>
            </div>
            <div className="metric-card">
              <strong>24/7</strong>
              <span>support ready</span>
            </div>
          </div>
        </section>

        <section className="about-grid">
          <article className="about-card about-card--featured">
            <h2>Our mission</h2>
            <p>
              To make healthy, fresh groceries easy for every home. We source quality
              products, simplify ordering, and deliver on time so you can enjoy more.
            </p>
          </article>
          <article className="about-card">
            <h2>Why we’re different</h2>
            <ul>
              <li>Fast delivery across the city</li>
              <li>Handpicked quality produce</li>
              <li>Simple checkout, secure payment</li>
            </ul>
          </article>
          <article className="about-card about-card--story">
            <h2>Our story</h2>
            <p>
              Born from a love of fresh food, we built Grocery to connect neighbors with
              trusted ingredients, honest service, and a grocery experience that feels modern.
            </p>
          </article>
        </section>

        <section className="about-highlights">
          <h2>What makes us special</h2>
          <div className="highlight-grid">
            <div className="highlight-item">
              <h3>Farm fresh</h3>
              <p>Local produce and fruits sourced for peak flavor and quality.</p>
            </div>
            <div className="highlight-item">
              <h3>Easy ordering</h3>
              <p>Quick browsing, fast checkout, and order tracking in one flow.</p>
            </div>
            <div className="highlight-item">
              <h3>Trusted support</h3>
              <p>Friendly help whenever you need it—right from our support team.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
