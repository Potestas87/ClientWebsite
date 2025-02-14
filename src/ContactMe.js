function ContactMe() {
    return (
      <div className="background">
        <h2>Contact Me</h2>
        <a href="tel:12082709544" style={{ fontSize: "18px", color: "blue", textDecoration: "underline" }}>Phone Number: 208-270-9544</a><br/ >
        <a href="mailto:outoftimeproductions@gmail.com" style={{ fontSize: "18px", color: "blue", textDecoration: "underline" }}>Email: Outoftimeproductions@gmail.com</a><br/ >
        <a href="/Troys resume final.pdf" download>
          <button>Download My Resume Here</button>
        </a>
      </div>
    );
  }
  
  export default ContactMe;