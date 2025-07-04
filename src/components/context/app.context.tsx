/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState } from "react";

interface IAppContext {
    isAuthenticated: boolean;
    setIsAuthenticated: (v: boolean) => void;
    user: IUser | null;
    setUser: (v: IUser | null) => void;
    isAppLoading: boolean;
    setIsAppLoading: (v: boolean) => void;
}

const CurrentAppContext = createContext<IAppContext | null>(null);

type TProps = {
    children: React.ReactNode;
}

export const AppProvider = (props: TProps) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [user, setUser] = useState<IUser | null>(null);
    const [isAppLoading, setIsAppLoading] = useState<boolean>(true);

    return (
        <CurrentAppContext.Provider value={{
            isAuthenticated,
            setIsAuthenticated,
            user,
            setUser,
            isAppLoading,
            setIsAppLoading
        }}>
            {props.children}
        </CurrentAppContext.Provider>
    )
}

export const useCurrentApp = () => {
    const currentUserContext = useContext(CurrentAppContext);

    if (!currentUserContext) {
        throw new Error('useCurrentApp must be used within a CurrentAppContextProvider');
    }

    return currentUserContext
}