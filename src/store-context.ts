import React from "react"
import { Store } from "redux"
import { ReduxStateType } from "./redux/redux-store"
import { ActionType } from "./redux/store"

const StoreContext = React.createContext({} as Store<ReduxStateType, ActionType>)

// type ProviderType = {
//     store: Store<ReduxStateType, ActionType>
//     children: React.ReactNode
// }
// // export const Provider = (props: ProviderType) => {
// //     return (
// //         <StoreContext.Provider value={props.store}>
// //             {props.children}
// //         </StoreContext.Provider>
// //     )
    

// // }

export default StoreContext