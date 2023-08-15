import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import LoadingPage from "./components/LoadingPage/LoadingPage";
import UserInfoBox from "./components/UserInfoBox/UserInfoBox";
import { UserDataType } from "./types";

function App() {
  const [userData, setUserData] = useState<UserDataType | null>(null);

  const fetchUserData = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Make a GET request to the Random User API
      const response = await axios.get("https://randomuser.me/api");
      // Update the 'userData' state with the fetched user data
      setUserData(response.data.results[0]);
    } catch (error) {
      // Handle errors if the API request fails
      console.error("An error occurred while fetching data:", error);
    }
  };

  useEffect(() => {
    // Initial fetch when the component mounts
    fetchUserData();
  }, []);

  return (
    <div className="App">
      {userData ? (
        <>
          <UserInfoBox
            firstName={userData.name.first}
            lastName={userData.name.last}
            email={userData.email}
            date={userData.dob.date}
            city={userData.location.city}
            country={userData.location.country}
            cell={userData.cell}
            password={userData.login.password}
            picture={userData.picture.large}
          />
          <button className="newButton"
            onClick={() => {
              setUserData(null);
              fetchUserData();
            }}
          >
            New
          </button>
        </>
      ) : (
        <LoadingPage />
      )}
    </div>
  );
}

export default App;
