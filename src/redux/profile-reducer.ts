import { followAPI, profileAPI, UserProfileType } from "./../api/api";
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
  status: string;
  follow: boolean;
};

export type AddPostActionType = ReturnType<typeof addPostAC>;
export type IncLikeActionType = ReturnType<typeof incLikeAC>;
export type UpdatePostTextActionType = ReturnType<typeof updatePostTextAC>;
export type SetUserProfileACType = ReturnType<typeof setUserProfileAC>;
export type SetUserProfilePhotoACType = ReturnType<typeof setUserProfilePhotoAC>;
export type SetUserProfileStatusACType = ReturnType<typeof setUserProfileStatusAC>;
export type SetFollowACType = ReturnType<typeof profileSetFollowAC>;


export type ActionType =
  | AddPostActionType
  | IncLikeActionType
  | UpdatePostTextActionType
  | SetUserProfileACType
  | SetUserProfilePhotoACType
  | SetUserProfileStatusACType
  | SetFollowACType;

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
status: "Test message",
follow: false,
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
    case "PROFILE/SET-PROFILE-PHOTO":
      return {
        ...state,
        userData: {
          ...state.userData,
          photos: action.payload.photos,
        },
      };
    case "PROFILE/SET-PROFILE-STATUS":
      return {
        ...state,
        status: action.payload.status
      }
    case "PROFILE/SET-FOLLOW-STATUS":
      
      return {
        ...state,
        follow: action.payload.follow
      }
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

export const setUserProfilePhotoAC = (photos: {
  small: string;
  large: string;
}) => {
  return {
    type: "PROFILE/SET-PROFILE-PHOTO",
    payload: {
      photos,
    },
  } as const;
};

export const setUserProfileStatusAC = (status:string) => {
  return {
    type: "PROFILE/SET-PROFILE-STATUS",
    payload: {
      status
    }
  } as const
}

export const profileSetFollowAC = (follow: boolean) => {
  
  return {
    type: "PROFILE/SET-FOLLOW-STATUS",
    payload: {
      follow
    }
  } as const
}

export const getUserProfileTC =
  (userId: number) => (dispatch: Dispatch<SetUserProfileACType>) => {
    profileAPI.getUserProfile(userId).then((res) => {
      dispatch(setUserProfileAC(res.data));
    });
  };

export const setUserProfilePhotoTC = (photo: File) => (dispatch: Dispatch) =>
  profileAPI
    .savePhoto(photo)
    .then((res) => dispatch(setUserProfilePhotoAC(res.data.data)));

export const setUserProfileStatusTC = (status:{status:string}) => (dispatch: Dispatch) => {
  profileAPI.setProfileStatus(status).then(res => {
    if(res.data.resultCode === 0) {
      alert("Profile status updated")
      dispatch(setUserProfileStatusAC(status.status))
    }
  })
}

export const getUserProfileStatusTC = (userId: number) => (dispatch: Dispatch) => {
  profileAPI.getUserStatus(userId).then(res => {
    dispatch(setUserProfileStatusAC(res.data))
  })
}

export const getUserFollowStatusTC = (userId: number) => (dispatch: Dispatch) => {
  followAPI.getStatus(userId).then(res => {
    
    dispatch(profileSetFollowAC(res.data))
  })
}
