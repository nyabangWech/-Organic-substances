import React from "react";

const BlogSection = () => {
  const blogs = [
    {
      image: "/image/company.jpg", 
      author: "broccoli",
      category: "Blogs V1",
      title: "Common Engine Oil Problems and Solutions",
      date: "August 11, 2022",
      link: "#",
    },
    {
      image: "/image/growingplant.jpg", 
      author: "broccoli",
      category: "Blogs V1",
      title: "How and when to replace brake rotors",
      date: "August 11, 2022",
      link: "#",
    },
    {
      image: "/image/plant watering.jpg", 
      author: "broccoli",
      category: "Blogs V1",
      title: "Electric Car Maintenance, Servicing & Repairs",
      date: "August 11, 2022",
      link: "#",
    },
  ];

  return (
    <section className="py-12">
      <h2 className="text-center text-4xl font-bold mb-8">Latest Blog</h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-lg overflow-hidden"
          >
            <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover" />
            <div className="p-6">
              <div className="text-sm text-gray-600 flex space-x-2">
                <span>by: {blog.author}</span>
                <span>|</span>
                <span>{blog.category}</span>
              </div>
              <h3 className="font-bold text-lg mt-4">{blog.title}</h3>
              <div className="flex justify-between items-center mt-4 text-green-600">
                <span>{blog.date}</span>
                <a href={blog.link} className="font-semibold">
                  READ MORE
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
