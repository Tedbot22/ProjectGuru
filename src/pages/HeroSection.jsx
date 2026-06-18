import Hero from "../assets/hero.png" 
function HeroSection(){

    return(
        <div className="hero" id="home">
            <div>
                <div className="intro-text">
                <h1 style={{flex: "1"}} className="reveal delay-1">
                    <span className="a reveal delay-1"> Write Better.</span><br />
                    <span className="b reveal delay-2">Research Better.</span><br />
                    <span className="c reveal delay-3">Achieve More.</span>
                </h1>
                <img src={Hero}alt="hero" style={{width: "150px", height:"150px", flexShrink: "0"}} className="reveal delay-1" />
            </div>
            <p className="hero-des reveal delay-2" style={{display: "inline-block"}}>A trusted academic writing brand dedicated to quiality research driven <br />content that meets educational and professional stanfdard</p> 
            </div> 
            <div className="btn reveal delay-3">
                <a href="#hire" className="btn cta-getStarted">Get started</a>  
                <a href="#services" className="btn cta-services">Explore services</a>
            </div>
            
        </div>
    )
}
export default HeroSection