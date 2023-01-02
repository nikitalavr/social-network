import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUserProfileTC } from "../../../redux/profile-reducer";
import { useAppDispatch, useAppSelector } from "../../../redux/redux-store";
import UserProfileInfo from "./UserProfileInfo";



export default function UserProfile() {
  const  userId = useParams()
  const userProfile = useAppSelector(state => state.profilePage.userData)
  
  
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getUserProfileTC(Number(userId.userid)))
  }, []);

  return (
    <div>
      <UserProfileInfo userProfile={userProfile} />
      
    </div>
  );
}