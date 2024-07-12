import React from "react";
import UsersList from "../components/UsersList";

const User = () => {
  const USERS = [
    {
      id: "u1",
      name: "arun",
      image:
        "https://files.worldwildlife.org/wwfcmsprod/images/Tiger_resting_Bandhavgarh_National_Park_India/hero_small/6aofsvaglm_Medium_WW226365.jpg",
      places: 1,
    },
  ];

  return <UsersList items={USERS}></UsersList>;
};
export default User;
