import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/redux-store";
import { setCurrentPageAC, setUsersTC } from "../../redux/users-reducer";
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
  const navigateToUserProfile = () => {
    debugger
    return <Navigate to="/profile"/>
  }
  return (
    <Users
      users={users.users}
      setCurrentPage={setCurrentPage}
      totalPagesCount={users.totalPagesCount}
      currentPage={users.page}
      count={users.count}
      navigateToUserProfile={navigateToUserProfile}
    />
  );
};

export default UsersContainer;
