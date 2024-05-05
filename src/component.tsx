// src/App.tsx
// No changes needed if you're not using `useState` in this file.

// src/component.tsx
// @ts-ignore
import fetchData from "./api.js"; // Import the fetchData function

// You can remove unused imports of `React`, `useState`, and `useEffect`.
// They are included here for completeness.
// @ts-ignore
import React, { useState, useEffect } from "react";

const Component = () => {
  const [data, setData] = useState<any[]>([]); // Define data as an array of any type

  useEffect(() => {
    const getData = async () => {
      try {
        const responseData = await fetchData(); // Call the fetchData function
        setData(responseData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, []);

  return (
    <div>
      <h1>Data from Next.js API</h1>
      <ul>
        {data.map((item: any) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Component;
