import Nav from "../navbar/nav.jsx";
import Footer from "../footer/footer.jsx";
import {toast,Toaster} from "react-hot-toast"
import "./contact.css";

export default function Contact() {
    function handle(e){
        e.preventDefault()
      toast('Message sent successfully!',
  {
    icon: '❤️',
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
  }
);
    }
  return (
    <>
      <Nav />
      <main className="contact-page">
        <div className="contact-page__inner">
          <section className="contact-page__hero">
            <span className="contact-page__eyebrow">Contact us</span>
            <h1>Need help with an order or delivery? We’re happy to assist.</h1>
            <p>
              Share your questions, feedback, or grocery requests. Our team will
              respond quickly to keep your pantry stocked.
            </p>
          </section>

          <div className="contact-page__body">
            <section className="contact-form-block">
              <h2>Send a message</h2>
              <form className="contact-form" onSubmit={handle}>
                <div className="contact-field">
                  <label htmlFor="name">Name</label>
                  <input id="name" type="text" placeholder="Your name" required />
                </div>
                <div className="contact-field">
                  <label htmlFor="email">Email address</label>
                  <input id="email" type="email" placeholder="you@example.com" required />
                </div>
                <div className="contact-field">
                  <label htmlFor="subject">Subject</label>
                  <input id="subject" type="text" placeholder="Order question, feedback, partnership" />
                </div>
                <div className="contact-field">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" placeholder="Tell us how we can help" required />
                </div>
                <div className="contact-form-actions">
                  <button type="submit">Send message</button>
                  <p className="support-text">
                    Prefer chat? We typically reply within 1 business hour.
                  </p>
                </div>
              </form>
                    <Toaster
  position="top-center"
  reverseOrder={false}
/>
            </section>

            <aside className="contact-side">
              <div className="contact-contact-card">
                <strong>Customer support</strong>
                <span>support@grocerystore.com</span>
              </div>
              <div className="contact-contact-card">
                <strong>Call us</strong>
                <span>+1 (555) 123-456-4567</span>
              </div>
              <div className="contact-contact-card">
                <strong>Visit us</strong>
                <span>123 Orchard Lane, Market City</span>
              </div>
            </aside>
          </div>
        </div>

      </main>

      <Footer />
    </>
  );
}
