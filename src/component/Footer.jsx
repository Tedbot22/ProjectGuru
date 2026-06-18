function Footer(){
     const services = ["Project Report",
                      "Seminars Report",
                      "IT and Internship Report",
                      "Defence ppt slides",
                      "Plagarism check",
                      "Grammar check"]

     const info = [{title:"home", label:"Home"},
                    {title:"about", label:"About Us"},
                    {title:"services", label:"Services"},
                    {title:"testimonial", label:"Testimonials"},
                    {title:"contact", label:"Contact Us"}]

     const contact = [{title: "Phone: +234 90"}, 
                        {title: "Email: eloke@gmail.com"}, 
                        {title: "Work days: Mon - Sat: 8am - 7pm"}, 
                        {title: "Location: Delta State, Nigeria"}]

     const contactLogo = []

  return(
    <>
      <footer className="footer">
        <div className="footer-main">
           <div className="footer-title">
            <img src="" alt="" />
            <h1>Project<span>Guru</span></h1>
            <p></p>
            <span>

            </span>
          </div>     

           <div className="footer-services">
              <div>
                <h2>Our services</h2>{services.map((service, index)=> <p key={index}>{service}</p>)}
              </div>
          </div>  

           <div className="footer-info">
              <div>
                <h2>Company</h2>{info.map((info, index)=> <p key={index}>{info.label}</p>)}
              </div>
          </div>     

           <div className="footer-contact">
              <div>
               <h2>Contact</h2> {contact.map((details, index)=> <p key={index}>{details.title}</p> )}
              </div>
          </div>  
        </div> 
           <div className="footer-end">
            <p>© 2025 ProjectGuru. All rights reserved</p>
            <p>{" "}</p>
            <p>{" "}</p>
          </div>     
        </footer>
    </>
  )
}

export default Footer