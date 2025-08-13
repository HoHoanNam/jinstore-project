// General
import heroSection from './general/hero-section.png';
import jinstoreLogo from './general/jinstore-logo.png';

// Category list
import fruitVeg from './categories/fruit-veg.png';
import babyPreg from './categories/baby-preg.png';
import beverages from './categories/beverages.png';
import meatSeafood from './categories/meat-seafood.png';
import biscSnack from './categories/bisc-snack.png';
import breadBakery from './categories/bread-bakery.png';
import breakfastDairy from './categories/breakfast-dairy.png';
import frozenFood from './categories/frozen-food.png';
import grocStaples from './categories/groc-staples.png';

// Payment
import visa from './payment/visa.png';
import paypal from './payment/paypal.png';
import skrill from './payment/skrill.png';
import klarna from './payment/klarna.png';
import mastercard from './payment/mastercard.png';

// Rating
import rating3dot0 from './rating/rating-3dot0.png';
import rating3dot5 from './rating/rating-3dot5.png';
import rating4dot0 from './rating/rating-4dot0.png';
import rating4dot5 from './rating/rating-4dot5.png';
import rating5dot0 from './rating/rating-5dot0.png';

// Products ---> New arrivals
import hamSwiss from './products/ham-swiss.png';
import cheesePizza from './products/cheese-pizza.png';
import orangeJuice from './products/orange-juice.png';
import supremePizza from './products/supreme-pizza.png';
import pepperoniPizza from './products/pepperoni-pizza.png';
import slicedStrawberries from './products/sliced-strawberries.png';

// Products ---> Remaining
import rootBeer from './products/root-beer.png';
import angelSoft from './products/angel-soft.png';
import appleJuice from './products/apple-juice.png';
import tboneSteak from './products/t-bone-steak.png';
import cantaloupeMelon from './products/cantaloupe-melon.png';
import vitaminwaterSqueezed from './products/vitaminwater-squeezed.png';

// Banners
import lemonBanner from './banners/lemon-banner.png';
import fruitBanner from './banners/fruit-banner.png';
import orangeBanner from './banners/orange-banner.png';
import popcornBanner from './banners/popcorn-banner.png';
import chocolateBanner from './banners/chocolate-banner.png';

// Blogs
import aiCostSaving from './blogs/ai-cost-saving.png';
import deliveryEvolution from './blogs/delivery-evolution.png';
import retailInstability from './blogs/retail-instability.png';
import restaurantStyleRetail from './blogs/restaurant-style-retail.png';

// Logic chọn ảnh rating dựa trên giá trị rating
export const getRatingImage = (rating) => {
  const ratingMap = {
    3.0: images.rating.rating3dot0,
    3.5: images.rating.rating3dot5,
    4.0: images.rating.rating4dot0,
    4.5: images.rating.rating4dot5,
    5.0: images.rating.rating5dot0,
  };

  /* 
    Làm tròn rating về số thập phân gần nhất 
    (làm tròn về 0.0 hoặc 0.5) để khớp với key trong ratingMap 
  */
  const roundedRating = Math.round(rating * 2) / 2;

  return ratingMap[roundedRating] || images.rating.rating3dot0;
};

const images = {
  // General
  general: {
    heroSection,
    jinstoreLogo,
  },

  // Category list
  categoryList: {
    fruitVeg,
    babyPreg,
    beverages,
    meatSeafood,
    biscSnack,
    breadBakery,
    breakfastDairy,
    frozenFood,
    grocStaples,
  },

  // Payment
  payment: {
    visa,
    paypal,
    skrill,
    klarna,
    mastercard,
  },

  // Rating
  rating: {
    rating3dot0,
    rating3dot5,
    rating4dot0,
    rating4dot5,
    rating5dot0,
  },

  // Banners
  banners: {
    lemonBanner,
    fruitBanner,
    orangeBanner,
    popcornBanner,
    chocolateBanner,
  },

  // Blogs
  blogs: {
    aiCostSaving,
    deliveryEvolution,
    retailInstability,
    restaurantStyleRetail,
  },

  // Products
  products: {
    // New arrivals
    newArrivals: {
      hamSwiss,
      cheesePizza,
      orangeJuice,
      supremePizza,
      pepperoniPizza,
      slicedStrawberries,
    },

    // Remaining
    remaining: {
      rootBeer,
      angelSoft,
      appleJuice,
      tboneSteak,
      cantaloupeMelon,
      vitaminwaterSqueezed,
    },
  },
};

export default images;
