import images from '~/assets/images';
const { products } = images;
const { newArrivals } = products;

const productList = {
  newArrivalList: [
    {
      // Image URL
      imageUrl: newArrivals.supremePizza,
      // Name
      name: 'Great Value Rising Crust Frozen Pizza, Supreme',
      // Labels
      isOrganic: false,
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
      isColdSale: false,
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
      isOrganic: false,
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
      isOrganic: false,
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
      isColdSale: false,
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
      isOrganic: false,
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
};

export default productList;
