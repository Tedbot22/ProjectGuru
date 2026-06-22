function Contact(){
  return(
    <>
      <div className="contact" id="contact">
           <div className="contact-title">
            <p className="cont-p reveal delay-1">Contact us</p>
            <h1 className="reveal delay-2">Reach out to us</h1>
            <p className="contact-des reveal delay-3">Have an idea or a challenge? We'd love to hear from you. Fill in the form and we'll get back to you within 24 hours.</p>
            <div className="contact-detail reveal delay-4">
              <div className="contact-row">
                <div className="contact-ico">⚲</div>
                <div>
                  <h4>Location</h4>
                  <p>Delta, Nigeria</p>
                </div>
              </div>
              <div className="contact-row">
                <div className="contact-ico">✉</div>
                <div>
                  <h4>Email</h4>
                  <p>elokehumphery@gmail.com</p>
                </div>
              </div>
              <div className="contact-row">
                <div className="contact-ico">☎</div>
                <div>
                  <h4>Phone</h4>
                  <p>+234 907 901 0699</p>
                </div>
            </div>
          </div>
           </div>


          <div className="contact-form reveal delay-2">
          <div className="form-row">
            <div className="form-group">
              <label>First Name</label>
              <input type="text" placeholder="John" />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" placeholder="Doe" />
            </div>
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="john@gmail.com" />
          </div>
          <div className="form-group">
            <label>Tell us about your project</label>
            <textarea placeholder="Describe your project, or what you need..."></textarea>
          </div>
          <button className="form-submit">Send Message</button>
        </div>
      </div>
    </>
  )
}

export default Contact