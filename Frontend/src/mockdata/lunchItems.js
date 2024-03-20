import { v4 as uuidv4 } from 'uuid';


const lunchItems = [
    {
      id: uuidv4(),
      name: "Sandwich",
      description: "A food typically consisting of vegetables, sliced cheese or meat, placed on or between slices of bread.",
      price: 5.99,
      photoUrl: "/Sandwich.jpg",
    },
    {
      id: uuidv4(),
      name: "Salad",
      description: "A dish consisting of mixed greens, vegetables, and often meat or seafood, typically dressed with vinaigrette or a similar dressing.",
      price: 6.99,
      photoUrl: "/Salad.jpg",
    },
    {
      id: uuidv4(),
      name: "Pizza",
      description: "A savory dish of Italian origin consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients.",
      price: 8.99,
      photoUrl: "/Pizza.jpg",
    },
    {
      id: uuidv4(),
      name: "Burger",
      description: "A sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun.",
      price: 7.99,
      photoUrl: "/Burger.jpg",
    },
    {
      id: uuidv4(),
      name: "Pasta",
      description: "A type of food typically made from an unleavened dough of wheat flour mixed with water or eggs, and formed into sheets or other shapes, then cooked by boiling or baking.",
      price: 9.99,
      photoUrl: "/Pasta.jpg",
    },
    {
      id: uuidv4(),
      name: "Soup",
      description: "A primarily liquid food, generally served warm or hot, that is made by combining ingredients of meat or vegetables with stock, or water.",
      price: 4.99,
      photoUrl: "/Soup.jpg",
    },
    {
      id: uuidv4(),
      name: "Tacos",
      description: "A traditional Mexican dish consisting of a small hand-sized corn or wheat tortilla topped with a filling.",
      price: 6.49,
      photoUrl: "/Tacos.jpg",
    },
    {
      id: uuidv4(),
      name: "Sushi",
      description: "A Japanese dish consisting of small balls or rolls of vinegar-flavored cold cooked rice served with a garnish of raw fish, vegetables, or egg.",
      price: 11.99,
      photoUrl: "/Sushi.jpg",
    },
    {
      id: uuidv4(),
      name: "Curry",
      description: "A variety of dishes originating in the Indian subcontinent that use a complex combination of spices or herbs, usually including ground turmeric, cumin, coriander, ginger, and fresh or dried chilies.",
      price: 10.99,
      photoUrl: "/Curry.jpg",
    },
    {
      id: uuidv4(),
      name: "Stir-Fry",
      description: "A Chinese cooking technique in which ingredients are fried in a small amount of very hot oil while being stirred in a wok.",
      price: 8.49,
      photoUrl: "/Stir fry.jpg",
    }]  

    export default lunchItems;