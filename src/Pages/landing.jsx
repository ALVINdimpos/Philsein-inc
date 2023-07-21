import HEADER from "../Layouts/Header/index"
import HERO from "../Layouts/Main/Hero/index"
import SliderCarousel from '../Components/Card/SliderCarousel'
const landing = () => {
  return (
    <div>
        <HEADER/>
        <HERO/>
        <SliderCarousel/>

    </div>
  )
}

export default landing