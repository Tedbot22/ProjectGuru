import Image from '../assets/hero2.png'
import { useCarousel } from '../useCarousel';
import doc1 from '../assets/Documents/3D7DBF59.pdf'
import doc2 from '../assets/Documents/23AB8A68.pdf'
import doc3 from '../assets/Documents/67FF8032.pdf'
import doc4 from '../assets/Documents/A358B3CF.pdf'
import doc5 from '../assets/Documents/CF4D3CBD.pdf'
import doc6 from '../assets/Documents/DDADE9DC.pdf'
import doc7 from '../assets/Documents/E0426AD3.pdf'
import doc8 from '../assets/Documents/FG4RSUJLK.pdf'
function Portfolio(){

    const projects = [{title: "Project 1", description: "Description for Project 1", fileLink: doc1}, 
                     {title: "Project 2", description: "Description for Project 2", fileLink: doc2},
                     {title: "Project 3", description: "Description for Project 3", fileLink: doc3},
                     {title: "Project 3", description: "Description for Project 3", fileLink: doc4},
                     {title: "Project 3", description: "Description for Project 3", fileLink: doc5},
                     {title: "Project 3", description: "Description for Project 3", fileLink: doc6},
                     {title: "Project 3", description: "Description for Project 3", fileLink: doc7},
                     {title: "Project 3", description: "Description for Project 3", fileLink: doc8},
    ]

    const { viewportRef, index, cardWidth, offset, prev, next, goTo, maxIndex } =
    useCarousel(projects.length);
    const slides = maxIndex + 1;
    return(
        <>
        {/*<div className='portfolio' id='portfolio'>
            <div className='port-title'>
                <h1>Portfolio</h1>
                <p>Out Works</p>
            </div>
            <div className='port-main'>
                {projects.map((project, index)=> 
                <ul key={index}>
                    <div className="port-card">

                        <div className='port-thumb' style={{backgroundImage: Image}}>
                            {/*<img src={Image} alt="portfolio" />
                            <span>W</span>
                        </div>

                        <div className='port-text'>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <button><span><a href={project.fileLink}></a></span></button>
                        </div>
                    </div> 
                </ul>)}
                 </div>
               
                
                <div className='carousel-control'>
                    <button className='carousel-btn' id='prevBtn' aria-label='Previous'>&#8592;</button>
                    <div className='carousel-dots' id='carouselDots'></div>
                    <button className='carousel-btn' id='nextBtn' aria-label='Next'>&#8594;</button>
                </div>
            </div> */}

    <section id="portfolio">
      <div className="section-wrap">
        <div className="portfolio-header">
          <div>
            <p className="section-label">Our Work</p>
            <h2 className="section-title">Projects we're proud of</h2>
          </div>
          <p className="section-sub" style={{ maxWidth: '300px' }}>
            A selection of recent work across industries and product types.
          </p>
        </div>

        <div className="carousel-outer reveal">
          <div className="carousel-viewport" ref={viewportRef}>
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${offset}px)` }}
            >
              {projects.map((p, index) => (
                <div
                  className="portfolio-card"
                  key={index}
                  style={{ flex: `0 0 ${cardWidth}px` }}
                >
                  <div className="portfolio-thumb" style={{ background: p.bg }}>
                    <span style={{backgroundIamge: Image}}></span>
                    <div src={p.fileLink} style={{width:"100%", height:"100%"}} type="applocation/pdf" />
                  </div>
                  <div className="portfolio-info">
                    <span className="portfolio-tag">{p.tag}</span>
                    <h3>{p.title}</h3>
                    <div style={{display: "flex", alignItems: "baseline", paddingRight: "20px"}}>
                        <p style={{flex: "1"}}>{p.description}</p>
                        <a className='download-btn' href={p.fileLink} target='_blank' rel='noopener noreferer'>Download ⬇</a>
                    </div>
                    
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="carousel-controls">
            <button className="carousel-btn" onClick={prev} disabled={index === 0} aria-label="Previous">
              ←
            </button>
            <div className="carousel-dots">
              {Array.from({ length: slides }).map((_, i) => (
                <button
                  key={i}
                  className={`carousel-dot ${i === index ? 'active' : ''}`}
                  onClick={() => goTo(i)}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
            <button className="carousel-btn" onClick={next} disabled={index >= maxIndex} aria-label="Next">
              →
            </button>
          </div>
        </div>
      </div>
    </section>

       </>
    )
}
export default Portfolio