import { UserDetailsProps } from "../../types";
import "./UserDetails.css";
import { iconAndText } from "../../constant";
import { useState } from "react";
import TextDetails from "../TextDetails/TextDetails";

const UserDetails = ({
  cell,
  city,
  country,
  date,
  email,
  firstName,
  lastName,
  password,
}: UserDetailsProps) => {
  const [value, setValue] = useState<string>("Hi, My name is");

  const fullName = `${firstName} ${lastName}`;
  const fullAddress = `${city}, ${country}`;
  const dateObject = new Date(date);
  const formattedDate = dateObject.toLocaleDateString("en-US");

  return (
    <div className="userDetailsContainer">
      <TextDetails
        fullName={fullName}
        email={email}
        date={formattedDate}
        address={fullAddress}
        cell={cell}
        password={password}
        value={value}
      />
      <div className="iconsContainer">
        {iconAndText.map((item, index) => (
          <div
            className="iconContainer"
            onMouseEnter={() => setValue(item.text)}
            key={index}
          >
            {item.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDetails;
