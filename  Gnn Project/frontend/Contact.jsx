import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact">
      <section className="contact-hero">
        <h1>Get in Touch</h1>
        <p>
          Have questions about the GNN model, want to collaborate, or just want
          to say hello? Drop us a message.
        </p>
      </section>

      <section className="contact-content">
        <div className="contact-info">
          <div className="contact-item">
            <span className="contact-icon">✉</span>
            <div>
              <h3>Email</h3>
              <p>gnn-project@example.com</p>
            </div>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📍</span>
            <div>
              <h3>Location</h3>
              <p>Remote / Open Source</p>
            </div>
          </div>
          <div className="contact-item">
            <span className="contact-icon">💻</span>
            <div>
              <h3>GitHub</h3>
              <p>github.com/gnn-project</p>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper">
          {submitted ? (
            <div className="success-message">
              <span className="success-icon">✓</span>
              <h3>Message Sent!</h3>
              <p>Thank you for reaching out. We'll get back to you soon.</p>
              <button
                className="btn btn-secondary"
                onClick={() => {
                  setSubmitted(false);
                  setForm({ name: '', email: '', message: '' });
                }}
              >
                Send Another
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What would you like to know?"
                  rows="5"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary btn-full">
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}

export default Contact;
