const FeedbackSection = () => {
    const feedbacks = [
      {
        image: "/image/beauty1.jpg", // Replace with actual image path
        name: "George Bailay",
        role: "Founder",
        feedback:
          "Quisque ut tristique velit. In sit amet vulputate nulla, eget faucibus ex.",
      },
      {
        image: "/image/beauty2.jpg", // Replace with actual image path
        name: "Rosalina D. William",
        role: "Founder",
        feedback:
          "Donec sit amet est iaculis, imperdiet est quis, gravida quam. In congue laoreet sollicitudin.",
      },
    ];
  
    return (
      <section className="py-12 bg-gray-100">
        <h2 className="text-center text-4xl font-bold mb-8">Clients Feedback</h2>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          {feedbacks.map((feedback, index) => (
            <div
              key={index}
              className="bg-white border rounded-lg p-6 shadow-lg text-center"
            >
              <img
                src={feedback.image}
                alt={feedback.name}
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <p className="text-gray-600 italic">{feedback.feedback}</p>
              <h4 className="font-bold text-lg mt-4">{feedback.name}</h4>
              <span className="text-green-600">{feedback.role}</span>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default FeedbackSection;
  