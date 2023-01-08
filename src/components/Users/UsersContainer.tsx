import React, { useEffect } from "react";
// import { Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/redux-store";
import { followTC, setCurrentPageAC, setUsersTC, unfollowTC } from "../../redux/users-reducer";
import Users from "./Users";

const UsersContainer = () => {
  const users = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setUsersTC({ count: users.count, page: users.page }));
  }, [dispatch, users.count, users.page]);

  const setCurrentPage = (page: number) => {
    dispatch(setCurrentPageAC(page));
  };

  //Obsolet
  // const navigateToUserProfile = () => {
  //   return <Navigate to="/profile"/>
  // }

  const setFollowStatus = (userId: number) => {
    dispatch(followTC(userId))
  }

  const setUnfollowStatus = (userId: number) => {
    dispatch(unfollowTC(userId))
  }

  return (
    <Users
      users={users.users}
      setCurrentPage={setCurrentPage}
      totalPagesCount={users.totalPagesCount}
      currentPage={users.page}
      count={users.count}
      setFollowStatus={setFollowStatus}
      setUnfollowStatus={setUnfollowStatus}
    />
  );
};

export default UsersContainer;
