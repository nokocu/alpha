import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // log the form data
    console.log('Form submitted:', formData);
    alert('Message sent! (This is a demo - form data logged to console)');
    
    // reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div>
      <section>
        <h1>Contact Me</h1>
        <p>Open for work - Send me a message. </p>
        <p>Available almost 24/7, will respond quickly.</p>
      </section>

      <section>
        <div className="contact-container">
          <div className="contact-info">
            <h2>Get In Touch</h2>
            <div className="contact-item">
              <h3>Email</h3>
              <p>nokocu@gmail.com</p>
            </div>
            <div className="contact-item">
              <h3>LinkedIn</h3>
              <p>https://www.linkedin.com/in/michalow-michal/</p>
            </div>
            <div className="contact-item">
              <h3>GitHub</h3>
              <p>https://github.com/nokocu</p>
            </div>
            <div className="contact-item">
              <h3>Location</h3>
              <p>Rzeszów, Poland (open to relocate)</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;