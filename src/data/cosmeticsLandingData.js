import React from 'react'
import BannerImage from "../assets/content-pixie-j1WYUNgLbOk-unsplash.jpg"
import Skincare from "../assets/valeriia-miller-_42NKYROG7g-unsplash.jpg"
import Makeup from "../assets/makeup.jpg"
import Haircare from "../assets/haircare.jpg"
import Fragrances from "../assets/fragrances.jpg"
import Essentials from "../assets/glow.jpg"
import Arrivals from "../assets/arrivals.jpg"
import Tips from "../assets/skin.jpg"
import Shade from "../assets/foundation.jpg"
import Wellness from "../assets/wellness.jpg"
import Serum from "../assets/serum.jpg"
import Oil from "../assets/oil.jpg"

const cosmeticsLandingData = {
  heroBanner: {
    title: "Glow Naturally",
    subtitle: "Discover premium skincare and beauty essentials",
    ctaText: "Shop Now",
    ctaLink: "/shop",
    imageUrl: BannerImage,
  },

  featuredCategories: [
    { id: "cat1", name: "Skincare", imageUrl: Skincare },
    { id: "cat2", name: "Makeup", imageUrl: Makeup },
    { id: "cat3", name: "Fragrances", imageUrl: Fragrances },
    { id: "cat4", name: "Haircare", imageUrl: Haircare }
  ],

  productList: [
    { id: "pl1", name: "Vitamin C Serum", brand: "SkinRevive", category: "Skincare", price: 22.99, rating: 4.6, imageUrl: Oil},
    { id: "pl2", name: "Volumizing Mascara", brand: "LashQueen", category: "Makeup", price: 16.5, rating: 4.3, imageUrl: Serum },
    { id: "pl3", name: "Coconut Hair Oil", brand: "NatureGlow", category: "Haircare", price: 12.0, rating: 4.9, imageUrl: Wellness },
    { id: "pl4", name: "Floral Eau de Parfum", brand: "Scentique", category: "Fragrances", price: 45.0, rating: 4.5, imageUrl: Skincare },
    { id: "pl5", name: "Aloe Vera Moisturizer", brand: "GlowCare", category: "Skincare", price: 19.99, rating: 4.7, imageUrl: Makeup },
    { id: "pl6", name: "Longwear Foundation", brand: "LuxeBeauty", category: "Makeup", price: 25.5, rating: 4.4, imageUrl: Fragrances },
    { id: "pl7", name: "Argan Hair Serum", brand: "NatureGlow", category: "Haircare", price: 14.5, rating: 4.8, imageUrl: Oil },
    { id: "pl8", name: "Citrus Body Mist", brand: "PureBloom", category: "Fragrances", price: 18.0, rating: 4.2, imageUrl: Serum},
    { id: "pl9", name: "Charcoal Face Mask", brand: "SkinRevive", category: "Skincare", price: 11.99, rating: 4.6, imageUrl: Wellness },
    { id: "pl10", name: "Liquid Eyeliner Pen", brand: "LashQueen", category: "Makeup", price: 13.0, rating: 4.3, imageUrl: Skincare },
    { id: "pl11", name: "Keratin Shampoo", brand: "NatureGlow", category: "Haircare", price: 17.5, rating: 4.7, imageUrl: Makeup },
    { id: "pl12", name: "Woody Oud Perfume", brand: "Scentique", category: "Fragrances", price: 52.0, rating: 4.9, imageUrl: Fragrances },
    { id: "pl14", name: "Velvet Lip Gloss", brand: "LuxeBeauty", category: "Makeup", price: 15.0, rating: 4.5, imageUrl: Oil },
    { id: "pl15", name: "Tea Tree Scalp Oil", brand: "NatureGlow", category: "Haircare", price: 13.5, rating: 4.6, imageUrl: Serum },
    { id: "pl16", name: "Vanilla Orchid Perfume", brand: "Scentique", category: "Fragrances", price: 48.0, rating: 4.4, imageUrl: Skincare },
    { id: "pl17", name: "SPF 50 Sunscreen", brand: "SkinRevive", category: "Skincare", price: 20.0, rating: 4.7, imageUrl: Wellness },
    { id: "pl18", name: "Brow Definer Pencil", brand: "LashQueen", category: "Makeup", price: 12.0, rating: 4.3, imageUrl: Oil },
    { id: "pl19", name: "Silk Hair Mask", brand: "NatureGlow", category: "Haircare", price: 21.0, rating: 4.9, imageUrl: Fragrances },
    { id: "pl20", name: "Peony Blossom Eau de Toilette", brand: "Scentique", category: "Fragrances", price: 39.0, rating: 4.6, imageUrl: Skincare }
  ],

  promos: [
    { id: "promo1", title: "Summer Glow Sale", description: "Up to 40% off skincare essentials", ctaText: "Explore Deals", ctaLink: "/sale", imageUrl: Essentials },
    { id: "promo2", title: "New Arrivals", description: "Fresh makeup drops just for you", ctaText: "Shop New", ctaLink: "/new", imageUrl: Arrivals }
  ],

  testimonials: [
    { id: "t1", name: "Sophia K.", review: "The hydrating face cream is a game changer! My skin feels soft and glowing all day.", rating: 5 },
    { id: "t2", name: "Liam D.", review: "I love the matte lipstick—long-lasting and doesn’t dry my lips. Definitely worth it!", rating: 4 }
  ],

  blogHighlights: [
    { id: "b1", title: "Top 5 Skincare Tips for Glowing Skin", link: "/blog/skincare-tips", imageUrl: Tips },
    { id: "b2", title: "How to Choose the Right Foundation Shade", link: "/blog/foundation-guide", imageUrl: Shade }
  ],

  newsletter: {
    title: "Stay in the Glow",
    description: "Subscribe to get exclusive offers, beauty tips, and new arrivals.",
    ctaText: "Subscribe",
    placeholder: "Enter your email"
  }
};


export default cosmeticsLandingData
