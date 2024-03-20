import React, { useState } from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { useCart } from "../hooks/useCart";

function Header() {
  const { cart } = useCart(); // Use the useCart hook to access cart state

  const [user, setUser] = useState({});
  const token = localStorage.getItem("token");
  const [showCart, setShowCart] = useState(false);

  const handleCartClick = () => {
    setShowCart(!showCart); // Show the cart
  };

  const uniqueCartItems = Array.from(new Set(cart.map((item) => item.id))).map(
    (id) => {
      return {
        ...cart.find((item) => item.id === id),
        quantity: cart.filter((item) => item.id === id).length,
      };
    }
  );

  const calculateTotalPrice = (item) => {
    return item.price * item.quantity;
  };

  return (
    <>
      <Navbar fluid rounded>
        <Navbar.Brand href="/">
          <img
            src="/logo.jpg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            SNS Food Court
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">{user.rollno}</span>
              <span className="block truncate text-sm font-medium">
                {user.email}
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md ml-4"
            onClick={handleCartClick}
          >
            Cart ({cart.length})
          </button>
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/" active={location.pathname === "/"}>
            Home
          </Navbar.Link>
          <Navbar.Link href="/juices" active={location.pathname === "/juices"}>
            Juices
          </Navbar.Link>
          <Navbar.Link href="/snacks" active={location.pathname === "/snacks"}>
            Snacks
          </Navbar.Link>
          <Navbar.Link href="/lunch" active={location.pathname === "/lunch"}>
            Lunch
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      {showCart && (
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md p-4">
          <h3 className="text-lg font-semibold mb-2">Cart Details</h3>
          <ul>
            {uniqueCartItems.map((item) => (
              <li key={item.id} className="flex items-center mb-2">
                <img
                  src={item.photoUrl}
                  alt={item.name}
                  className="h-10 w-10 object-cover rounded-full mr-2"
                />
                <div>
                  <p>{item.name}</p>
                  <p className="text-gray-500">Quantity: {item.quantity}</p>
                  <p className="text-gray-500">
                    Total: Rs. {calculateTotalPrice(item)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md mt-4">
            Checkout
          </button>
        </div>
      )}
    </>
  );
}

export default Header;
