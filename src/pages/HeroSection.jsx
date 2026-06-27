import Herobg from "../assets/herobg.jpg"
function HeroSection() {


    return (
        <div className="hero-bg" style={{ backgroundImage: `url(${Herobg})` }}>
            <div className="hero" id="home" >
                <div className="hero-inner">

                    <div className="intro-text">
                        <h1 className="hero-title reveal delay-1">
                            <span className="a reveal delay-1"> Write Better.</span><br />
                            <span className="b reveal delay-2">Research Better.</span><br />
                            <span className="c reveal delay-3">Achieve <em>More.</em></span>
                        </h1>
                        <p className="hero-des reveal delay-2">A trusted academic writing brand dedicated to quiality research driven content.</p>
                        <p className="hero-stats reveal delay-3"><span>★ ★ ★ ★ ★</span> &nbsp; 5.0 · Trusted by 100+ clients</p>

                        <div className="btn reveal delay-4">
                            <a href="#hire" className="btn cta-getStarted">Get started →</a>
                            <a href="#services" className="btn cta-services">Explore services</a>
                        </div>
                    </div>


                    {/*HERO RIGHT SIDE*/}
                    <div className="intro-image">
                    </div>

                </div>
            </div>
        </div>
    )
}
export default HeroSection