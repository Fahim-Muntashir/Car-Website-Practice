"use client";

import React, { useState } from "react";

// headless ui
import { Menu } from "@headlessui/react";

// icons
import { FaMapMarkerAlt } from "react-icons/fa";

// location data
const locations = [
  "Main Street 123, United States",
  "Business Avenue 456,Canada",
  "Park Road 789,United Kingdom",
];

const LocationSelection = () => {
  const [location, setLocation] = useState("Select Location");

  return (
    <Menu as="div" className="w-full h-full flex xl:fkex-row">
      <div className="relative flex-1">
        {/*  btn */}
        <Menu.Button>Menu Btn</Menu.Button>
        {/* Items */}
        <Menu.Items>Menu Items</Menu.Items>
      </div>
    </Menu>
  );
};

export default LocationSelection;
