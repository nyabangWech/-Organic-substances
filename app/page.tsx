

import Header from './component/header';
import Hero from './component/hero';
// import Promotions from './component/promotions';
import ProductShowcase from './component/product';
import HotDealsSection from './component/honey';
import FeaturedProducts from './component/featuredproduct';
import BlogCard from './component/blog';
import HomePage from './component/footer';
import VideoSection from './component/video';
import FeedbackSection from './component/clientfeedback';

export default function Home() {
  return (
    <div>
     <Header/>
     <Hero/>
     {/* <Promotions/> */}
     <ProductShowcase/>
     <HotDealsSection/>
     <FeaturedProducts/>
     <BlogCard/>
     <VideoSection/>
     <FeedbackSection/>
     <HomePage/>
     
     
    </div>
  );
}
