export interface UserDataType {
  name: { first: string; last: string; title: string };
  cell: string;
  dob: { date: string };
  email: string;
  location: { city: string; country: string };
  login: { password: string };
  picture: { large: string };
}

export interface UserInfoBoxProps {
  firstName: string;
  lastName: string;
  email: string;
  date: string;
  city: string;
  country: string;
  cell: string;
  password: string;
  picture: string;
}

export interface UserAvatarProps {
  picture: string;
}

export interface UserDetailsProps {
  firstName: string;
  lastName: string;
  email: string;
  date: string;
  city: string;
  country: string;
  cell: string;
  password: string;
}

export interface TextDetailsProps {
  fullName: string;
  email: string;
  date: string;
  address: string;
  cell: string;
  password: string;
  value: string;
}
