const VideoSection = () => {
    return (
      <section className="py-12 relative">
        <div className="container mx-auto">
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              src="image/videovegeatable.jpg"
              alt="Video Cover"
              className="w-full h-96 object-cover"
            />
            <a
              href="#"
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50"
            >
              <div className="bg-white rounded-full p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-12 h-12 text-green-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default VideoSection;
  