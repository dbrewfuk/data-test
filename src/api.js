import axios from "axios";

const fetchData = async () => {
  try {
    const response = await axios.get(
      "https://search-test-git-main-dbrewfuks-projects.vercel.app/api/getTests",
    );
    const data = response.data;
    console.log("Data from Next.js API:", data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export default fetchData;
