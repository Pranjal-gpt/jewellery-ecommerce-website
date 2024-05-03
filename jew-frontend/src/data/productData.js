const productDetails = {
  id: 1,
  name: "Diamond Pendant Necklace",
  description: "Stunning diamond pendant necklace crafted with 18K white gold.",
  price: 999.99,
  gemstone: "Diamond",
  images: [
    "https://silvermistjewelry.in/cdn/shop/products/ocean-drop-pendant-304373.jpg?v=1706959492&width=1000",
    "https://silvermistjewelry.in/cdn/shop/products/ocean-drop-pendant-933421.png?v=1711470911&width=1000",
    "https://silvermistjewelry.in/cdn/shop/products/ocean-drop-pendant-790888.jpg?v=1711470911&width=1000"
  ],
  availability: true,
  reviews: [
    { id: 1, user: "John Doe", rating: 5, comment: "Absolutely beautiful necklace! Love it!" },
    { id: 2, user: "Jane Smith", rating: 4, comment: "Great quality and fast shipping." }
  ],
  // Additional properties
  brand: "Tanishq",
  collection: "Bestsellers",
  gender: "Women",
  jewelleryType: "Diamond Jewellery",
  occasion: "Office Wear",
  materialColour: "Silver",
  metal: "White Gold",
  pendantHeight: "2 cm",
  pendantWidth: "1 cm",
  noOfDiamonds: 8,
  diamondClarity: "I1",
  diamondColor: "JKL",
  diamondSetting: "Pave",
  diamondShape: "Round",
  karatage: 18,
  community:"NaN"
};

const SimilarProducts = [
  {
    id: 1,
    img: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw8a99845c/images/hi-res/50D3PTYJYAA29_1.jpg",
    title: "Necklace",
    price: 5000,
    link: "#",
  },
  {
    id: 2,
    img: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw8a99845c/images/hi-res/50D3PTYJYAA29_1.jpg",
    title: "Necklace",
    price: 5000,
    link: "#",
  },
  {
    id: 3,
    img: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw8a99845c/images/hi-res/50D3PTYJYAA29_1.jpg",
    title: "Necklace",
    price: 5000,
    link: "#",
  },
  {
    id: 4,
    img: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw8a99845c/images/hi-res/50D3PTYJYAA29_1.jpg",
    title: "Necklace",
    price: 5000,
    link: "#",
  },
];

const productpage = { 
  productDetails: productDetails,
  SimilarProducts: SimilarProducts,
  
  }


export default productpage