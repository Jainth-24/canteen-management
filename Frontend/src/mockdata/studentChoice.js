import { v4 as uuidv4 } from 'uuid';
const studentsChoice = [
    {
      id: uuidv4(),
      name: "Coffee",
      description: "A hot beverage made from roasted coffee beans.",
      price: 2.99,
      photoUrl:
        "/Coffee.jpg", // Replace with actual URL
    },
    {
      id: uuidv4(),
      name: "Tea",
      description: "A warm drink made by infusing dried tea leaves in hot water.",
      price: 1.99,
      photoUrl:
        "/Tea.jpg", // Replace with actual URL
    },
  ];

  export default studentsChoice;