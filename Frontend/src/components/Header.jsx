"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { useState } from "react";

function Header() {
    const [user,setUser]= useState([])
  const token = localStorage.getItem("token");

  fetch("http://localhost:3000/api/user", {
    method: "GET",
    headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
  })
    .then((response) => response.json())
    .then((data) => {
      setUser(data);
      // Handle user data
    })
    .catch((error) => {
      console.error("Error fetching user data:", error);
    });

  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <img
          src="/vite.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
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
  );
}

export default Header;
