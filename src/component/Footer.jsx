function Footer(){
     const links ={ 
      Services:      [["Project Report", ""],
                      ["Seminars Report",],
                      ["IT and Internship Report",],
                      ["Defence ppt slides",]],

     Company:           [["Home","#home"],
                      ["About Us","#about"],
                      ["Services","#services"],
                      ["Testimonials","#testimonial"],
                      ["Portfolio","#portfolio"]],

     Contact:        [["+234 904 823 2233"], 
                      ["elokehumphery@gmail.com"], 
                      ["Mon - Sat: 8am - 7pm"], 
                      ["Delta State, Nigeria"]]
     };
     const social = [{logo:"✆", value:"https://wa.me/+2349048232233"},
                      {logo:"ꚠ", value:"https://wa.me/+2349048232233"},
                      {logo:"☎", value:"tel:+2349048232233"}];
  return(
    <>
        <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <a href="#hero" className="nav-logo">Project<span>Guru</span></a>
          <p>An agency dedicated to delivering quality jobs. Based in Delta, working nationwide.</p>
        </div>
        {Object.entries(links).map(([heading, items]) => (
          <div className="footer-col" key={heading}>
            <h4>{heading}</h4>
            <ul style= {{padding: "0"}}>
              {items.map(([label]) => (
                <li key={label}><a>{label}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Project Guru. All rights reserved.</span>
        <div className="social-links">
          {social.map((s,i) => (
            <a href={s.value} target="_blank" className="social-link" key={i}>{s.logo}</a>
          ))}
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer