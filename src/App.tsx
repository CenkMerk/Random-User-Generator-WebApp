import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [userData, setUserData] = useState();

  // Function to fetch user data from the Random User API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Make a GET request to the Random User API
        const response = await axios.get("https://randomuser.me/api");
        // Update the 'userData' state with the fetched user data
        setUserData(response.data.results[0]);
      } catch (error) {
        // Handle errors if the API request fails
        console.error("An error occurred while fetching data:", error);
      }
    };

    fetchUsers(); // Call the fetchUserData function when the component mounts
  }, []);

  return <div>App</div>;
}

export default App;
