import TestimonialCard from './testimonialCard'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'arion P.',
      role: '',
      message:
        '« Agence très professionnelle, à l’écoute de ses employés, de nos préférences de lieux de travail et de nos horaires.»',
      imageUrl:
        'https://media.istockphoto.com/id/1328706922/photo/portrait-of-female-doctor-or-nurse-in-medical-scrubs.jpg?s=612x612&w=0&k=20&c=XZPuCuFEV_AUO9CPP8LIyDfeupxe6sH_VQ3cqZL5ElY=',
    },
    {
      id: 2,
      name: 'Leslie-Ann B.',
      role: '',
      message:
        "« Les gestionnaires sont super. On est vraiment mis de l'avant et appuyer. Super agence je recommande 👌 »",
      imageUrl:
        'https://media.istockphoto.com/id/1328395932/photo/portrait-of-female-doctor.jpg?s=612x612&w=0&k=20&c=1lZZR3ZjPXS_QnE0lzXNholh5gogEnpanoZz1qQfhXY=',
    },
    {
      id: 3,
      name: 'Charline F.',
      role: '',
      message:
        "Faisant partie du ssein santé depuis avril 2019, je peux dire qu’entant que nouvelle infirmière auxiliaire, j'ai littéralement pris mon envol! ",
      imageUrl:
        'https://media.istockphoto.com/id/174928155/photo/young-man-receiving-chemotherapy-at-home.jpg?s=612x612&w=0&k=20&c=t24S1llmrmSDJqOaW3PzLl7yyhuVIpvTz55rk3xVDCM=',
    },
    {
      id: 4,
      name: 'Walid G.',
      role: '',
      message:
        "« Professionnels,  respectueux et salaire très avantageux. Vous n'aller pas regretter de faire parti de leur équipe dynamique et dévoué »",
      imageUrl:
        'https://thekey.brightspotcdn.com/dims4/default/902c322/2147483647/strip/true/crop/533x533+27+0/resize/600x600!/format/webp/quality/90/?url=https%3A%2F%2Fhca-production-web.s3.amazonaws.com%2Fbrightspot%2Fc1%2F88%2Ffe29cad14e7286653295d90724a0%2Fistock-623064104.jpg',
    },
  ]

  // Configure the settings for the carousel
  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    centerPadding: '50px',
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <section className="bg-gray-100 py-10 ">
      <div className="container mx-auto  ">
        <h2 className="text-center text-2xl font-bold mb-4">
          TCe que disent nos professionnels du domaine de la santé au Québec.
        </h2>
        <Slider {...carouselSettings} className="testimonial-slider">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="px-2 flex">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default TestimonialsSection
