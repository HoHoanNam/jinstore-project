import images from '~/assets/images';
const { categoryList } = images;

const categories = [
  {
    name: 'Fruits & Vegetables',
    image: categoryList.fruitVeg,
  },
  {
    name: 'Baby & Pregnancy',
    image: categoryList.babyPreg,
  },
  {
    name: 'Beverages',
    image: categoryList.beverages,
  },
  {
    name: 'Meats & Seafood',
    image: categoryList.meatSeafood,
  },
  {
    name: 'Biscuits & Snacks',
    image: categoryList.biscSnack,
  },
  {
    name: 'Breads & Bakery',
    image: categoryList.breadBakery,
  },
  {
    name: 'Breaksfast & Dairy',
    image: categoryList.breakfastDairy,
  },
  {
    name: 'Frozen Foods',
    image: categoryList.frozenFood,
  },
  {
    name: 'Grocery & Staples',
    image: categoryList.grocStaples,
  },
];

export default categories;
