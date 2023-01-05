import React from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../../redux/redux-store";
import UserProfile from "./UserProfile";

export default function UserProfileContainer() {
  const userId = useParams();
  const userProfile = useAppSelector((state) => state.profilePage.userData);
  console.log(userId.userId)
  return <UserProfile userId={Number(userId.userId)} userProfile={userProfile} />;
}
