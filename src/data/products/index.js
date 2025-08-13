import images from '~/assets/images';
const { products } = images;
const { newArrivals, remaining } = products;

const productList = {
  newArrivalList: [
    {
      // Image URL
      imageUrl: newArrivals.supremePizza,
      // Name
      name: 'Great Value Rising Crust Frozen Pizza, Supreme',
      // Labels
      isColdSale: true,
      // Rating
      rating: 4.0,
      numOfReviews: 37,
      // Price
      originalPrice: 9.99,
      discountPercentage: 10,
      price: Math.round(9.99 * (1 - 10 / 100) * 100) / 100,
      // Status
      status: 'In Stock',
    },
    {
      // Image URL
      imageUrl: newArrivals.slicedStrawberries,
      // Name
      name: 'Simple Kitchen FD Sliced Strawberries – 1.08lb',
      // Labels
      isOrganic: true,
      // Rating
      rating: 4.0,
      numOfReviews: 78,
      // Price
      originalPrice: 18.6,
      discountPercentage: 18,
      price: Math.round(18.6 * (1 - 18 / 100) * 100) / 100,
      // Status
      status: 'In Stock',
    },
    {
      // Image URL
      imageUrl: newArrivals.pepperoniPizza,
      // Name
      name: 'Red Baron Frozen Hand Tossed Ultimate Pepperoni Pizza',
      // Labels
      isColdSale: true,
      // Rating
      rating: 5.0,
      numOfReviews: 391,
      // Price
      originalPrice: 22.4,
      discountPercentage: 20,
      price: Math.round(22.4 * (1 - 20 / 100) * 100) / 100,
      // Status
      status: 'In Stock',
    },
    {
      // Image URL
      imageUrl: newArrivals.hamSwiss,
      // Name
      name: 'Oscar Mayer Ham & Swiss Melt Scrambler – 3oz',
      // Labels
      isColdSale: true,
      // Rating
      rating: 5.0,
      numOfReviews: 132,
      // Price
      originalPrice: 12.9,
      discountPercentage: 12,
      price: Math.round(12.9 * (1 - 12 / 100) * 100) / 100,
      // Status
      status: 'In Stock',
    },
    {
      // Image URL
      imageUrl: newArrivals.orangeJuice,
      // Name
      name: 'Simply Orange Pulp Free Juice – 52 fl oz',
      // Labels
      isOrganic: true,
      // Rating
      rating: 4.5,
      numOfReviews: 31,
      // Price
      originalPrice: 6.99,
      discountPercentage: 15,
      price: Math.round(6.99 * (1 - 15 / 100) * 100) / 100,
      // Status
      status: 'In Stock',
    },
    {
      // Image URL
      imageUrl: newArrivals.cheesePizza,
      // Name
      name: 'Great Value Rising Crust Pizza, Cheese, 27.4 oz',
      // Labels
      isColdSale: true,
      // Rating
      rating: 4.0,
      numOfReviews: 63,
      // Price
      originalPrice: 14.99,
      discountPercentage: 13,
      price: Math.round(14.99 * (1 - 13 / 100) * 100) / 100,
      // Status
      status: 'In Stock',
    },
  ],

  remainingList: [
    {
      // Image URL
      imageUrl: remaining.angelSoft,
      // Name
      name: 'Angel Soft Toilet Paper, 9 Mega Rolls',
      // Labels
      isCleanEssentials: true,
      // Rating
      rating: 5.0,
      numOfReviews: 422,
      // Price
      originalPrice: 14.2,
      discountPercentage: 10,
      price: Math.round(14.2 * (1 - 10 / 100) * 100) / 100,
      // Status
      status: 'In Stock',
    },
    {
      // Image URL
      imageUrl: remaining.appleJuice,
      // Name
      name: '100 Percent Apple Juice – 64 fl oz Bottle',
      // Labels
      isSweetTreats: true,
      // Rating
      rating: 4.0,
      numOfReviews: 47,
      // Price
      originalPrice: 4.99,
      discountPercentage: 20,
      price: Math.round(4.99 * (1 - 20 / 100) * 100) / 100,
      // Status
      status: 'In Stock',
    },
    {
      // Image URL
      imageUrl: remaining.rootBeer,
      // Name
      name: 'A&W Caffeine-Free, Low Sodium Root Beer Soda Pop, 2 Liter Bottles',
      // Labels
      isColdSale: true,
      // Rating
      rating: 4.5,
      numOfReviews: 89,
      // Price
      originalPrice: 11.4,
      discountPercentage: 30,
      price: Math.round(11.4 * (1 - 30 / 100) * 100) / 100,
      // Status
      status: 'In Stock',
    },
    {
      // Image URL
      imageUrl: remaining.cantaloupeMelon,
      // Name
      name: 'Cantaloupe Melon Fresh Organic Cut',
      // Labels
      isOrganic: true,
      // Rating
      rating: 5.0,
      numOfReviews: 222,
      // Price
      originalPrice: 5.99,
      discountPercentage: 20,
      price: Math.round(5.99 * (1 - 20 / 100) * 100) / 100,
      // Status
      status: 'In Stock',
    },
    {
      // Image URL
      imageUrl: remaining.tboneSteak,
      // Name
      name: 'USDA Choice Angus Beef T-Bone Steak – 0.70-1.50 lbs',
      // Labels
      isFreshProtein: true,
      // Rating
      rating: 4.5,
      numOfReviews: 174,
      // Price
      originalPrice: 14.89,
      discountPercentage: 10,
      price: Math.round(14.89 * (1 - 10 / 100) * 100) / 100,
      // Status
      status: 'In Stock',
    },
    {
      // Image URL
      imageUrl: remaining.vitaminwaterSqueezed,
      // Name
      name: 'Vitaminwater zero sugar squeezed electrolyte enhanced water,…',
      // Labels
      isColdSale: true,
      // Rating
      rating: 4.5,
      numOfReviews: 138,
      // Price
      originalPrice: 8.99,
      discountPercentage: 26,
      price: Math.round(8.99 * (1 - 26 / 100) * 100) / 100,
      // Status
      status: 'In Stock',
    },
  ],
};

export default productList;
