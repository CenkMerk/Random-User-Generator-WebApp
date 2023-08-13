import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import LoadingPage from "./components/LoadingPage/LoadingPage";
import UserInfoBox from "./components/UserInfoBox/UserInfoBox";
import { UserDataType } from "./types";

function App() {
  const [userData, setUserData] = useState<UserDataType>();

  // Function to fetch user data from the Random User API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Wait for 2 seconds before making the GET request for LoadingPage
        await new Promise((resolve) => setTimeout(resolve, 2000));
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

  return (
    <div className="App">
      {userData ? (
        <UserInfoBox
          firstName={userData.name.first}
          lastName={userData.name.last}
          email={userData.email}
          date={userData.dob.date}
          city={userData.location.city}
          country={userData.location.country}
          cell={userData.cell}
          password={userData.login.password}
          picture={userData.picture.medium}
        />
      ) : (
        <LoadingPage />
      )}
    </div>
  );
}

export default App;
