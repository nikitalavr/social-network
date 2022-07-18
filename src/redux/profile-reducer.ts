import { v1 } from "uuid";
import { ActionType, PostDataType, ProfilePageType } from "./store";

export type AddPostActionType = ReturnType<typeof addPostAC>;
export type IncLikeActionType = ReturnType<typeof incLikeAC>;
export type UpdatePostTextActionType = ReturnType<typeof updatePostTextAC>;

let initialState = {
  myPosts: [
    { id: v1(), message: "New message1", likes: 0, likeIsPressed: false },
  ],
  newPostText: "",
}

export const profileReducer = (
  state: ProfilePageType = initialState,
  action: ActionType
): ProfilePageType => {
  switch (action.type) {
    case "ADD-POST":
      let newPost: PostDataType = {
        id: v1(),
        message: state.newPostText,
        likes: 0,
        likeIsPressed: false,
      };
      state.myPosts.unshift(newPost);
      state.newPostText = "";
      break;
    case "INC-LIKE":
      let likeIsPressedFlag = !action.likeIsPressed;
      console.log(likeIsPressedFlag);

      state.myPosts.map((p) =>
        p.id === action.postID
          ? { ...p, likes: p.likes++, likeIsPressed: likeIsPressedFlag }
          : p
      );
      break;
    case "UPDATE-POST-TEXT":
      state.newPostText = action.newText;
      break;
    default:
      return state;
  }
  return state;
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
