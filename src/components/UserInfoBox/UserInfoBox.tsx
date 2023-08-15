import "./UserInfoBox.css";
import { UserInfoBoxProps } from "../../types";
import UserAvatar from "../UserAvatar/UserAvatar";
import UserDetails from "../UserDetails/UserDetails";

const UserInfoBox = ({
  cell,
  city,
  country,
  date,
  email,
  firstName,
  lastName,
  password,
  picture,
}: UserInfoBoxProps) => {
  return (
    <div className="UserInfoBoxContainer">
      <UserAvatar picture={picture} />
      <hr />
      <UserDetails
        cell={cell}
        city={city}
        country={country}
        date={date}
        email={email}
        firstName={firstName}
        lastName={lastName}
        password={password}
      />
    </div>
  );
};

export default UserInfoBox;
