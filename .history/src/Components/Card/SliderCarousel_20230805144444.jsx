// Import the required components and CSS files
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import SlidingCard from './SlidingCard'
import '../../assets/Style/slider-carousel.css'

const SliderCarousel = () => {
  const data = [
    {
      id: 1,
      title: 'Physiothérapeute',
      salary: "À partir de 65$ de l'heure",
      location:
        "Choisissez l'emplacement et le type d'établissement de votre choix! Postes disponibles partout à travers le Québec",
      schedule: 'Temps plein⚫ Jour & soir',
      workingCondition: 'Postes à long terme ⚫ 35h semaines',
      link:"job-physiotherapist"
    },
    {
      id: 2,
      title: 'Infirmière auxiliaire',
      salary: "À partir de 34$ de l'heure",
      location:
        "Choisissez l'emplacement et le type d'établissement de votre choix! Postes disponibles partout à travers le Québec.",
      schedule:
        "Flexibles; possibilité de moduler l'horaire selon ses disponibilités.",
      workingCondition:
        'Remplacement ponctuel, court, moyen et long terme à travers le Québec',

    },
    {
      id: 3,
      title: 'Travailleur social',
      salary: "À partir de 60$ de l'heure",
      location:
        "Choisissez l'emplacement et le type d'établissement de votre choix! Postes disponibles partout à travers le Québec.",
      schedule: 'Temps plein⚫ Jour & soir',
      workingCondition: 'Postes à long terme. 35h semaines',
    },
    {
      id: 4,
      title: 'Infirmière',
      salary: "À partir de 53$ de l'heure",
      location:
        "Choisissez l'emplacement et le type d'établissement de votre choix! Postes disponibles partout à travers le Québec.",
      schedule:
        "Flexibles; possibilité de moduler l'horaire selon ses disponibilités.",
      workingCondition:
        'Remplacement ponctuel, court, moyen et long terme à travers le Québec',
    },
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Display 3 cards in one row
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // On smaller screens, display 2 cards in one row
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // On even smaller screens, display 1 card in one row
        },
      },
    ],
  }

  return (
    <div className="slider-carousel">
      <h2>Nos placements en santé et services sociaux</h2>
      <Slider {...settings} className="slider">
        {data.map((item, index) => (
          <SlidingCard key={index} {...item} />
        ))}
      </Slider>
    </div>
  )
}

export default SliderCarousel
