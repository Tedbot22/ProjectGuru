function Services(){
  const ourServices = [{id:"1", icon:"📋", service: "Project Report", description: "This decription placeholder this tghisiisohdfkh uigsihvflih iuhd f"},
                        {id:"2", icon:"📝", service: "Seminars Report", description: "This decription placeholder"},
                        {id:"3", icon:"📊", service: "IT and Internship Report", description: "This decription placeholder"},
                        {id:"4", icon:"📑", service: "Defence ppt slides", description: "This decription placeholder"},
                        {id:"5", icon:"📄", service: "Plagarism check", description: "This decription placeholder"},
                        {id:"6", icon:"📄", service: "Grammar check", description: "This decription placeholder"},
  ]
  return(
    <>
    <div className="services" id="services">
        <div className="service-title">
          <h1>Our services</h1>
          <p>The type os jobs we do</p>
        </div>

        <div className="service-main reveal delay-1">
            {ourServices.map((service) =>   
            <div className="service-card" key={service.id}>
              <span className="service-icon">{service.icon}</span>
              <h2 className="service-name">{service.service}</h2>
              <p className="service-description">{service.description}</p>
            </div>
          )} 
        </div>
    </div>
      
    </>
  )
}

export default Services