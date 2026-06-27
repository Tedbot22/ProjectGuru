import { toast } from "react-toastify"
import { useRef, useState } from "react"
import emailjs from '@emailjs/browser'

function Contact() {
  const form = useRef();
  const [sent, setSent] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const firstname = document.getElementById("firstname");
  const lastname = document.getElementById("lastname");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  const handleToast = (response) => {
    response == 'success' ?
      toast.success("Message Sent.")
      : toast.error("Message Failed");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setSent(true);
      {/*setTimeout(()=> (setSent(false), 
                      firstname.value = "",
                      lastname.value = "",
                      email.value = "",
                      message.value = ""),
                       3000);*/}
      handleToast("success");
      form.current.reset();
    } catch (error) {
      handleToast('failed');
    }
    setIsLoading(false)
  };


  return (
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

        <form ref={form} className="contact-form reveal delay-2" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>First Name</label>
              <input type="text" name="firstname" id="firstname" placeholder="John" required />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" id="lastname" name="lastname" placeholder="Doe" required />
            </div>
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" id="email" name="email" placeholder="john@gmail.com" required />
          </div>
          <div className="form-group">
            <label>Tell us about your project</label>
            <textarea id="message" name="message" placeholder="Describe your project, or what you need..." required></textarea>
          </div>
          <button type="submit" disabled={isLoading} className="form-submit">{isLoading ? "Sending..." : "Send Message"}</button>
        </form>
      </div>
    </>
  )
}

export default Contact

{/**
  
   style={sent ? {background: "#059669", border: "1px solid #ffffff", color: "#ffffff"} : {}}
   
   */}