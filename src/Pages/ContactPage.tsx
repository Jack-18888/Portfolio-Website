import "../static/ContactPage.css";

const ContactPage: React.FC = () => {
  return (
    <div className="contactpage">
      <h2>Contact Me</h2>
      <form className="contact-form">
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactPage;
