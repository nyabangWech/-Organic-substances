export default function Promotions() {
    return (
      <section className="py-12 bg-white">
        <div className="ml-60  px-4 grid grid-cols-1  gap-16">
          <div className="bg-gray-50 p-8 rounded-lg flex">
            <div>
            <h3 className="text-xl font-semibold mb-2">Green lemon & Orange Juice</h3>
            <p className="text-gray-600 mb-4 text-l">BEST ORANGE FLAVOUR</p>
            <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">Shop Now →</button>
            </div>
            <div>
            <img
              src="/image/orangejuice-removebg-preview.png" 
              alt="Juice" 
              width={200} 
              height={200} 
              className="mt-4"
            />
            </div>

            <div>
              <h3>Upto 50% off Fresh</h3>
              <h3>Almond seed</h3>
              <p>From  69.99</p>
        
            <div>
              <img 
              src="/image/almodseed.jpg"
              alt="Almod"
              width={300}
              height={300}
              />
              </div>
              <div>
              <h3>50% off Fresh</h3>
              <h3>Mango DRINKS</h3>
              <p>From  69.99</p>
        
            <div className=" flex">
              <img 
              src="/image/mangofruit.jpg"
              alt="Almod"
              width={300}
              height={300}
              />
              </div>
              </div>
              </div>
              </div>
              </div>
              

      </section>
    )
  }
  