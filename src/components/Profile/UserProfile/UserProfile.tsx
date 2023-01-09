import React, { useEffect } from "react";
import { UserProfileType } from "../../../api/api";
import { getUserFollowStatusTC, getUserProfileTC } from "../../../redux/profile-reducer";
import { useAppDispatch} from "../../../redux/redux-store";
import UserProfileInfo from "./UserProfileInfo";

type UserProfilePropsType = {
  userId: number
  userProfile: UserProfileType
  userFollowStatus: boolean
}

export default function UserProfile(props:UserProfilePropsType) {
    
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(getUserProfileTC(Number(props.userId)));
  }, [dispatch, props.userId]);

  useEffect(()=>{
    dispatch(getUserFollowStatusTC(Number(props.userId)))
  },[dispatch, props.userId])

  

  return (
    <div>
      <UserProfileInfo userProfile={props.userProfile} userFollowStatus={props.userFollowStatus}/>
    </div>
  );
}
