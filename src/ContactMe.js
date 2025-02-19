function ContactMe() {
    return (
      <div className="background">
        <h2>Contact Me</h2>
        <div className="container">
          <div className="left-side-vertical">
            <a href="tel:12082709544" style={{ fontSize: "30px", color: "blue", textDecoration: "underline" }} className="inline-padding">Phone Number: 208-270-9544</a><br/ >
            <a href="mailto:outoftimeproductions@gmail.com" style={{ fontSize: "30px", color: "blue", textDecoration: "underline" }} className="inline-padding">Email: Outoftimeproductions@gmail.com</a><br/ >
            <a href="/Troys resume final.pdf" download className="inline-padding">
              <button>Download My Resume Here</button>
            </a>
          </div>
          <div className="right-side-vertical">
            <img src="/stukent.jpg" alt="Description" className="responsive-image-top"/>
          </div>
        </div>
      </div>
    );
  }
  
  export default ContactMe;