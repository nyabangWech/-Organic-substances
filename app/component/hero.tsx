export default function Hero() {
    return (
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 flex items-center">
          <div className="w-1/2 pr-8">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8">🌱</div>
              <span className="ml-2 text-gray-600">100% genuine Products</span>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              Tasty & Healthy<br />
              Organic Food
            </h1>
            <button className="bg-green-500 text-white px-8 py-3 rounded-md hover:bg-green-600 transition">
              EXPLORE PRODUCTS
            </button>
          </div>
          <div className="">
            <img
              src="/image/vegetable1.jpg"
              alt="Fresh Vegetables"
              width={500}
              height={400}
              className="object-contain mb-24"
            />
          </div>
        </div>
    
      </section>
    )
  }
  