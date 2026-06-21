import { useEffect, useState } from "react"
function Services(){
  const ourServices = [{id:"1", icon:"📑", service: "Project Report", description: "This decription placeholder"},
                        {id:"2", icon:"📝", service: "Seminars Report", description: "This decription placeholder"},
                        {id:"3", icon:"📊", service: "IT and Internship Report", description: "This decription placeholder"},
                        {id:"4", icon:"🗒️", service: "Defence ppt slides", description: "This decription placeholder"},
                        {id:"5", icon:"📄", service: "Plagarism check", description: "This decription placeholder"},
                        {id:"6", icon:"🔖", service: "Grammar check", description: "This decription placeholder"},
  ]

    const [showAll, setshowAll] = useState(false)
    const [isMobile, setIsMobile] = useState(window.innerWidth <=768 )
      
    function showHandler (e){
      setshowAll(!showAll)
    }
    useEffect (() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <=768 )
      }
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    },[]);

    const visibleServices = !isMobile || showAll ? ourServices : ourServices.slice(0,2)

    useEffect ( () => {
      const cards = document.querySelectorAll('.service-card.reveal')
      cards.forEach(card => {
        if(card.getBoundingClientRect().top < window.innerHeight){
          card.classList.add('active')
        }
      })

    }, [showAll])
  return(
    <>
    <div className="services" id="services">
        <div className="service-title">
          <h1 className="reveal delay-1">Our services</h1>
          <p className="reveal delay-2">Every service is uniquely tailored to our clients needs</p>
        </div>

        <div className= "service-main" >
            {visibleServices.map((service) =>   
            <div className="service-card" key={service.id}>
              <span className="service-icon">{service.icon}</span>
              <h2 className="service-name">{service.service}</h2>
              <p className="service-description">{service.description}</p>
            </div>
          )} 
        </div>
        <div className="show-div">
          <span className="show-btn" onClick={showHandler}>{showAll ? "Show Less": "Show More"}</span>
        </div>
    </div>
      
    </>
  )
}

export default Services