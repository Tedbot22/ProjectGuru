import Testimonial from '../pages/Testimonial'
import About from '../pages/About'
import Services from '../pages/Services'
import HeroSection from '../pages/HeroSection'
import Contact from '../pages/Contact'
import Hire from './Hire'
import Portfolio from './Portfolio'
import Stats from '../pages/Stats'

function Home(){
    return(
        <div>
            <HeroSection />
            <Stats />
            <About />
            <Services />
            <Testimonial />
            <Portfolio />
            <Contact />
            <Hire />   
        </div>
    )
}
export default Home