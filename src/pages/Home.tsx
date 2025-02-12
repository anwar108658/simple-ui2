import HeroSection from '../components/HeroSection'
import About from './About';
import Contact from './Contact';
import Service from "./Service";
const Home = () => {
  return (
    <div>
      <HeroSection/>
      <Service/>
      <Contact/>
      <About/>
    </div>
  )
}

export default Home