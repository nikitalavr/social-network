const initialState: InitialStateType = {
  status: "idle",
  error: null,
  isInitialized: false,
};
type InitialStateType = {
  status: RequestStatusType;
  error: string | null;
  isInitialized: boolean;
};
export const appReducer = (
  state: InitialStateType = initialState,
  action: ActionType
): InitialStateType => {
  switch (action.type) {
    case "APP/SET-IS-INITIALIZED":
      return {
        ...state,
        isInitialized: action.payload.isInitialized,
      };
    case "APP/SET-APP-STATUS":
      return {
        ...state,
        status: action.payload.status,
      };
    case "APP/SET-APP-ERROR":
      return {
        ...state,
        error: action.payload.error,
      };

    default:
      return state;
  }
};

export const setIsInitializedAC = (isInitialized: boolean) => {
  return {
    type: "APP/SET-IS-INITIALIZED",
    payload: {
      isInitialized,
    },
  } as const;
};

export const setAppStatusAC = (status: RequestStatusType) => {
  return {
    type: "APP/SET-APP-STATUS",
    payload: {
      status,
    },
  } as const;
};

export const setAppErrorAC = (error: string) => {
  return {
    type: "APP/SET-APP-ERROR",
    payload: {
      error,
    },
  } as const;
};

//types app-reducer
type ActionType =
  | SetIsInitializedACType
  | SetAppStatusACType
  | SetAppErrorACType;

export type RequestStatusType = "idle" | "loading" | "succeeded" | "failed";

type SetIsInitializedACType = ReturnType<typeof setIsInitializedAC>;
export type SetAppStatusACType = ReturnType<typeof setAppStatusAC>;
export type SetAppErrorACType = ReturnType<typeof setAppErrorAC>;
