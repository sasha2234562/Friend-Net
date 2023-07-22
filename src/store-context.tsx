import React from "react";
import {store} from "./redux/redux-store";


export type ProviderType = {
    store: typeof store
    children: React.ReactNode
}



const StoreContext = React.createContext( {} as typeof store)


export const Provider = (props: ProviderType) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )

}

export default StoreContext