import Hero from "../assets/hero.png" 
function HeroSection(){

    return(
        <div className="hero" id="home">
            <div className="hero-inner">

                    <div className="intro-text">
                        <h1 className="hero-title reveal delay-1">
                            <span className="a reveal delay-1"> Write Better.</span><br />
                            <span className="b reveal delay-2">Research Better.</span><br />
                            <span className="c reveal delay-3">Achieve More.</span>
                        </h1>
                        <p className="hero-des reveal delay-2">A trusted academic writing brand dedicated to quiality research driven content</p> 

                        <div className="btn reveal delay-3">
                            <a href="#hire" className="btn cta-getStarted">Get started →</a>  
                            <a href="#services" className="btn cta-services">Explore services</a>
                        </div>
                    </div>


                    {/*HERO RIGHT SIDE*/}
                    <div className="intro-image">
                        <img src={Hero}alt="hero" className="reveal delay-1" />
                    </div>

            </div>       
        </div>
    )
}
export default HeroSection