export interface UserDataType {
  name: { first: string; last: string; title: string };
  cell: string;
  dob: { date: string };
  email: string;
  location: { city: string; country: string };
  login: { password: string };
  picture: { medium: string };
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
