import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUserProfileTC } from "../../../redux/profile-reducer";
import { useAppDispatch, useAppSelector } from "../../../redux/redux-store";
import UserProfile from "./UserProfile";

export default function UserProfileContainer() {
  const userId = useParams();
  const userProfile = useAppSelector((state) => state.profilePage.userData);
  
  return <UserProfile userId={Number(userId)} userProfile={userProfile} />;
}
