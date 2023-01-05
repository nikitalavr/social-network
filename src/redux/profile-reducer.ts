import { SetAppStatusACType } from "./app-reducer";
import { profileAPI, UserProfileType } from "./../api/api";
import { Dispatch } from "redux";
import { v1 } from "uuid";

export type PostDataType = {
  id: string;
  message: string;
  likes: number;
  likeIsPressed: boolean;
};

export type ProfilePageType = {
  myPosts: Array<PostDataType>;
  newPostText: string;
  userData: UserProfileType;
};

export type AddPostActionType = ReturnType<typeof addPostAC>;
export type IncLikeActionType = ReturnType<typeof incLikeAC>;
export type UpdatePostTextActionType = ReturnType<typeof updatePostTextAC>;
export type SetUserProfileACType = ReturnType<typeof setUserProfileAC>;

export type ActionType =
  | AddPostActionType
  | IncLikeActionType
  | UpdatePostTextActionType
  | SetUserProfileACType;

let initialState: ProfilePageType = {
  myPosts: [
    { id: v1(), message: "New message1", likes: 0, likeIsPressed: false },
  ],
  newPostText: "",
  userData: {
    userId: 0,
    lookingForAJob: false,
    lookingForAJobDescription: "",
    fullName: "",
    contacts: {
      github: "",
      vk: "",
      facebook: "",
      instagram: "",
      twitter: "",
      website: "",
      youtube: "",
      mainLink: "",
    },
    photos: {
      small: "",
      large: "",
    },
  },
};

export const profileReducer = (
  state: ProfilePageType = initialState,
  action: ActionType
): ProfilePageType => {
  switch (action.type) {
    case "ADD-POST":
      return {
        ...state,
        myPosts: [
          {
            id: v1(),
            message: state.newPostText,
            likes: 0,
            likeIsPressed: false,
          },
          ...state.myPosts,
        ],
        newPostText: "",
      };
    case "INC-LIKE":
      if (action.likeIsPressed)
        return {
          ...state,
          myPosts: state.myPosts.map((p) =>
            p.id === action.postID
              ? { ...p, likes: p.likes - 1, likeIsPressed: false }
              : p
          ),
        };
      else
        return {
          ...state,
          myPosts: state.myPosts.map((p) =>
            p.id === action.postID
              ? { ...p, likes: p.likes + 1, likeIsPressed: true }
              : p
          ),
        };
    case "UPDATE-POST-TEXT":
      return { ...state, newPostText: action.newText };
    case "PROFILE/SET-USER-PROFILE":
       
      return {
        ...state,
        userData: { ...action.payload.userData },
      };
    default:
      return state;
  }
};

export const addPostAC = () => {
  return {
    type: "ADD-POST",
  } as const;
};

export const incLikeAC = (postID: string, likeIsPressed: boolean) => {
  return {
    type: "INC-LIKE",
    postID,
    likeIsPressed,
  } as const;
};

export const updatePostTextAC = (newText: string) => {
  return {
    type: "UPDATE-POST-TEXT",
    newText,
  } as const;
};

export const setUserProfileAC = (userData: UserProfileType) => {
  return {
    type: "PROFILE/SET-USER-PROFILE",
    payload: {
      userData,
    },
  } as const;
};

export const getUserProfileTC =
  (userId: number) =>
  (dispatch: Dispatch<SetUserProfileACType>) => {
     
    profileAPI
      .getUserProfile(userId)
      .then((res) => {
         
        dispatch(setUserProfileAC(res.data));
      });
  };
