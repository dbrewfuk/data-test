// src/App.tsx
// No changes needed if you're not using `useState` in this file.

// src/component.tsx
// @ts-ignore
import fetchData from "./api.js"; // Import the fetchData function
import data from "./data.json";
// You can remove unused imports of `React`, `useState`, and `useEffect`.
// They are included here for completeness.
// @ts-ignore
import React, { useState, useEffect } from "react";

const Component = () => {
  // Define data as an array of any type

  return (
    <div>
      <ul>
        {data.map((item: any) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Component;
