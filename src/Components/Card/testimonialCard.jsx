const TestimonialCard = ({ testimonial }) => {
  const { name, role, message } = testimonial;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4 gap-10 text-xl">
      <p className="text-gray-800 mb-4">{message}</p>
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img
            src={testimonial.imageUrl}
            alt={testimonial.name}
            className="w-16 h-16 rounded-full mx-auto"
          />
        </div>
        <div className="ml-4">
          <p className="text-gray-800 font-semibold">{name}</p>
          <p className="text-gray-600">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;


