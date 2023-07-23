import HEADER from '../Layouts/Header/index'
import HERO from '../Layouts/Main/Hero/index'
import SliderCarousel from '../Components/Card/SliderCarousel'
import TestimonialsSection from '../Components/Card/testimonialCarousel'
import Mission from '../Layouts/Main/mission/mission'
import Advantage from '../Layouts/Main/advantages/index'
import Footer from '../Layouts/Footer/index'
import CareerSection from '../Layouts/Main/CareerSection/index'
const landing = () => {
  return (
    <div>
      <HEADER />
      <HERO />
      <SliderCarousel />
      <Mission />
      <Advantage />
      <TestimonialsSection />
      <CareerSection />
      <Footer />
    </div>
  )
}

export default landing
