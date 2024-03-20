import { v4 as uuidv4 } from 'uuid';
const snacks = [
    {
      id: uuidv4(),
      name: "Popcorn",
      description: "A light and fluffy snack made from corn kernels.",
      price: 1.5,
      photoUrl: "/Popcorn.jpg",
    },
    {
      id: uuidv4(),
      name: "Tea",
      description: "A warm drink made by infusing dried tea leaves in hot water.",
      price: 1.99,
      photoUrl: "/Tea.jpg",
    },
    {
      id: uuidv4(),
      name: "Chips",
      description: "Thin slices of potato that are deep-fried or baked until crispy.",
      price: 1.25,
      photoUrl: "Chips.jpg",
    },
    {
      id: uuidv4(),
      name: "Pretzels",
      description: "A type of baked bread product made from dough most commonly shaped into a twisted knot.",
      price: 1.75,
      photoUrl: "Pretzels.jpg",
    },
    {
      id: uuidv4(),
      name: "Cookies",
      description: "A sweet baked food that is typically small, flat, and round and is made from flour and sugar.",
      price: 2.0,
      photoUrl: "Cookies.jpg",
    },
    {
      id: uuidv4(),
      name: "Ice Cream",
      description: "A sweet frozen food made from dairy products, such as milk and cream, and often combined with fruits or other ingredients and flavors.",
      price: 2.5,
      photoUrl: "Ice creams.jpg",
    },
    {
      id: uuidv4(),
      name: "Candy",
      description: "A sweet food made with sugar or syrup combined with fruit, chocolate, or nuts.",
      price: 1.0,
      photoUrl: "Candy.jpg",
    },
    {
      id: uuidv4(),
      name: "Nuts",
      description: "A fruit consisting of a hard or tough shell around an edible kernel.",
      price: 1.75,
      photoUrl: "Nuts.jpg",
    },
    {
      id: uuidv4(),
      name: "Granola Bars",
      description: "A bar made with rolled oats, nuts, honey, and sometimes puffed rice or other ingredients.",
      price: 1.5,
      photoUrl: "Granola Bars.jpg",
    },
    {
      id: uuidv4(),
      name: "Trail Mix",
      description: "A type of snack mix, specifically a combination of dried fruit, nuts, and sometimes chocolate.",
      price: 2.0,
      photoUrl: "Trail mix.jpg"
    }]

    export default snacks;