import { TextDetailsProps } from "../../types";
import "./TextDetails.css"

const TextDetails = ({
  address,
  cell,
  date,
  email,
  fullName,
  password,
  value,
}: TextDetailsProps) => {
  return (
    <>
      <p className="userTitle">{value}</p>
      {value === "Hi, My name is" && <p className="userValue">{fullName}</p>}
      {value === "My email address is" && <p className="userValue">{email}</p>}
      {value === "My birthday is" && <p className="userValue">{date}</p>}
      {value === "My address is" && <p className="userValue">{address}</p>}
      {value === "My phone number is" && <p className="userValue">{cell}</p>}
      {value === "My password is" && <p className="userValue">{password}</p>}
    </>
  );
};

export default TextDetails;
