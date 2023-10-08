import React from "react";
import {Preloader} from "../components/preloader/preloader";

export function withSuspanse<P> (Component: React.FunctionComponent<P>) {
    return (props: any)=> {
        return <React.Suspense fallback={<Preloader/>}>
            <Component {...props}/>
        </React.Suspense>
    }
}