import React from "react";
import cosmeticsLandingData from '../data/cosmeticsLandingData';
import HeroBanner from "../components/HeroBanner";
import CategoryCard from "../components/CategoryCard";
import PromoCard from "../components/PromoCard";
import ProductCard from "../components/ProductCard";
import TestimonialCard from "../components/TestimonialCard";
import BlogCard from "../components/BlogCard";
import Newsletter from "../components/Newsletter";

const Home = () => {
  const {
    heroBanner,
    featuredCategories,
    promos,
    productList,
    testimonials,
    blogHighlights,
    newsletter
  } = cosmeticsLandingData;

  return (
    <div className="space-y-12 p-6">
      
      {/* Hero Banner */}
      <HeroBanner {...heroBanner} />

      {/* Featured Categories */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-black">Shop by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {featuredCategories.map((category) => (
            <CategoryCard key={category.id} {...category} />
          ))}
        </div>
      </section>

      {/* Promos */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-black">Special Promotions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {promos.map((promo) => (
            <PromoCard key={promo.id} {...promo} />
          ))}
        </div>
      </section>

      {/* Product List */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-black">Popular Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {productList.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-black">What Our Customers Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </section>

      {/* Blog Highlights */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-black">From the Blog</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {blogHighlights.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section>
        <Newsletter {...newsletter} />
      </section>
    </div>
  );
};

export default Home;
