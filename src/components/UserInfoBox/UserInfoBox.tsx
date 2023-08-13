import "./UserInfoBox.css";
import { UserInfoBoxProps } from "../../types";

const UserInfoBox = ({
  cell,
  city,
  country,
  date,
  email,
  firstName,
  lastName,
  password,
}: UserInfoBoxProps) => {
  console.log(cell, city, country, date, email, firstName, lastName, password);
  return <div className="UserInfoBoxContainer">UserInfoBox</div>;
};

export default UserInfoBox;
