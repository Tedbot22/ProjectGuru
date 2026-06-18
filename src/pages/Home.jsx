import Header from '../component/Header'
import Footer from '../component/Footer'
import Testimonial from '../pages/Testimonial'
import About from '../pages/About'
import Services from '../pages/Services'
import HeroSection from '../pages/HeroSection'
import Contact from '../pages/Contact'
import Hire from './Hire'

function Home(){
    return(
        <div>
            <Header />
            <HeroSection />
            <About />
            <Services />
            <Testimonial />
            <Contact />
            <Hire />
            <Footer />
        </div>
    )
}
export default Home