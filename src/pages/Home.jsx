import Testimonial from '../pages/Testimonial'
import About from '../pages/About'
import Services from '../pages/Services'
import HeroSection from '../pages/HeroSection'
import Contact from '../pages/Contact'
import Hire from './Hire'
import Portfolio from './Portfolio'

function Home(){
    return(
        <div>
            <HeroSection />
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