import React, { useEffect } from "react";
import { UserProfileType } from "../../../api/api";
import { getUserProfileTC } from "../../../redux/profile-reducer";
import { useAppDispatch} from "../../../redux/redux-store";
import UserProfileInfo from "./UserProfileInfo";

type UserProfilePropsType = {
  userId: number
  userProfile: UserProfileType
}

export default function UserProfile(props:UserProfilePropsType) {
    
  const dispatch = useAppDispatch();
  useEffect(() => {
    debugger
    dispatch(getUserProfileTC(Number(props.userId)));
  }, [dispatch, props.userId]);

  return (
    <div>
      <UserProfileInfo userProfile={props.userProfile} />
    </div>
  );
}
