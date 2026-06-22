import { useCarousel } from '../useCarousel';
import doc1 from '../assets/Documents/Doc1.pdf'
import doc2 from '../assets/Documents/Doc2.pdf'
import doc3 from '../assets/Documents/Doc3.pdf'
import doc4 from '../assets/Documents/Doc4.pdf'
import doc5 from '../assets/Documents/Doc5.pdf'
import doc6 from '../assets/Documents/Doc6.pdf'
import doc7 from '../assets/Documents/Doc7.pdf'
import doc8 from '../assets/Documents/Doc8.pdf'

import thumb1 from '../assets/Documents/thumbs/Doc1.png'
import thumb2 from '../assets/Documents/thumbs/Doc2.png'
import thumb3 from '../assets/Documents/thumbs/Doc3.png'
import thumb4 from '../assets/Documents/thumbs/Doc4.png'
import thumb5 from '../assets/Documents/thumbs/Doc5.png'
import thumb6 from '../assets/Documents/thumbs/Doc6.png'
import thumb7 from '../assets/Documents/thumbs/Doc7.png'
import thumb8 from '../assets/Documents/thumbs/Doc8.png'


function Portfolio(){

    const projects = [{title: "Project Report", description: "Glory | DELSU", bg: thumb1, fileLink: doc1}, 
                     {title: "Project Report", description: "Chioma | UNICAL", bg: thumb2, fileLink: doc2},
                     {title: "Project Report", description: "Christiana | UNIPORT", bg: thumb3, fileLink: doc3},
                     {title: "Seminar Report", description: "Miracle | DELSU.", bg: thumb4, fileLink: doc4},
                     {title: "Seminar Report", description: "Ebenezer | UNICAL", bg: thumb5, fileLink: doc5},
                     {title: "IT Report", description: "Odirah | UNILAG", bg: thumb6, fileLink: doc6},
                     {title: "IT Report", description: "Austine | DELSU", bg: thumb7, fileLink: doc7},
                     {title: "IT Report", description: "Jodhua | SDU", bg: thumb8, fileLink: doc8},
    ]

    const { viewportRef, index, cardWidth, offset, prev, next, goTo, maxIndex } =
    useCarousel(projects.length);
    const slides = maxIndex + 1;
    return(
        <>
    <section id="portfolio">
      <div className="section-wrap">
        <div className="portfolio-header">
            <h1 className="section-title reveal delay-1">Portfolio</h1>
            <p className="section-sub reveal delay-2">A selection of recent jobs delivered to our clients.</p>
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
                  <div className="portfolio-thumb" style={{ backgroundImage: `url(${p.bg})` }}>

                  </div>
                  <div className="portfolio-info">
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