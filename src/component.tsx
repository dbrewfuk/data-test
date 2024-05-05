import React, { useState, useEffect } from "react";
import fetchData from "./api.js"; // Import the fetchData function

const MyComponent = () => {
  const [data, setData] = useState([]);

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
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;
