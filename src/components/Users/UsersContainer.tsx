import { connect } from "react-redux";
import { Dispatch } from "redux";
import { ReduxStateType } from "../../redux/redux-store";
import {
  followAC,
  setUsersAC,
  unfollowAC,
  UserDataType,
  UsersStateType,
} from "../../redux/users-reducer";
import Users from "./Users";

type MapStateToPropsType = {
    users: Array<UserDataType>
}
type MapDispatchToPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UserDataType>) => void
}

const mapStateToProps = (state: ReduxStateType):MapStateToPropsType => {
  return {
    users: state.users.users,
  };
};
const mapDispatchToProps = (dispatch: Dispatch):MapDispatchToPropsType => {
  return {
    follow: (userID: number) => dispatch(followAC(userID)),
    unfollow: (userID: number) => dispatch(unfollowAC(userID)),
    setUsers: (users: Array<UserDataType>) => dispatch(setUsersAC(users)),
  };
};

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
