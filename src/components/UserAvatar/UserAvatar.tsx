import { UserAvatarProps } from "../../types";
import "./UserAvatar.css";

const UserAvatar = ({ picture }: UserAvatarProps) => {
  return (
    <div className="avatarContainer">
      <img src={`${picture}`} alt="avatar" className="avatarImg" />
    </div>
  );
};

export default UserAvatar;
