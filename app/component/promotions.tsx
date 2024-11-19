export default function Promotions() {
    return (
      <section className="py-12 bg-white">
        <div className="ml-60  px-4 grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="bg-gray-50 p-8 rounded-lg flex">
            <div>
            <h3 className="text-xl font-semibold mb-2">Green lemon & Orange Juice</h3>
            <p className="text-gray-600 mb-4 text-xl">BEST ORANGE FLAVOUR</p>
            <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">Shop Now →</button>
            </div>
            <div>
            <img
              src="/image/orangejuice-removebg-preview.png" 
              alt="Juice" 
              width={500} 
              height={500} 
              className="mt-4"
            />
            </div>
          </div>
  
          <div className="bg-gray-50 p-8 rounded-lg flex gap-4">
          <div>
            <img
              src="/image/almodseed.jpg" 
              alt="Almonds" 
              width={600} 
              height={700} 
              className="mt-4"
            />
            </div>
            <div>
            <h3 className="text-xl font-semibold mb-2">Fresh Almond Seed</h3>
            <p className="text-green-500 mb-4 text-l">From $69.99</p>
            <p className="text-xl text-gray-600 ">Up to 15% off Fresh Almond Seed</p>
            </div>
          </div>
  
          
        </div>
        <div className="bg-gray-50 p-8 rounded-lg flex ml-[250px] space-x-24 ">
            <div>
            <h3 className="text-xl font-semibold mb-2">Fresh Mango Drinks</h3>
            <p className="mt-2 text-xl text-gray-600">50% off in Fresh Mango Drinks</p>
            <button className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 mt-12">
              Shop Now
            </button>
            </div>
            <div>
            <img
              src="/image/mango.jpg" 
              alt="Mango Drink" 
              width={180} 
              height={200} 
              className="ml-36"
            />
            </div>
          </div>
      </section>
    )
  }
  