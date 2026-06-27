import Testimonial from '../pages/Testimonial'
import About from '../pages/About'
import Services from '../pages/Services'
import HeroSection from '../pages/HeroSection'
import Contact from '../pages/Contact'
import Hire from './Hire'
import Portfolio from './Portfolio'
import Header from '../component/Header'
import Footer from '../component/Footer'


function Home(){
    return(
        <div>
            <Header />
            <HeroSection />
            <About />
            <Services />
            <Testimonial />
            <Portfolio />
            <Contact />
            <Hire />
            <Footer />
        </div>
    )
}
export default Home