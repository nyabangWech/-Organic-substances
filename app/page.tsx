

import Header from './component/header';
import Hero from './component/hero';
import Promotions from './component/promotions';
import ProductShowcase from './component/product';
import HotDealsSection from './component/honey';
import FeaturedProducts from './component/featuredproduct';
import BlogPage from './component/blog';
import HomePage from './component/footer';
export default function Home() {
  return (
    <div>
     <Header/>
     <Hero/>
     <Promotions/>
     <ProductShowcase/>
     <HotDealsSection/>
     <FeaturedProducts/>
     <BlogPage/>
     <HomePage/>
    </div>
  );
}
