import { createContext } from "react"
import useMobile from "../hooks/useMobile"

export const MobileContext = createContext()

export const MobileProvider = ({ children }) => {

    const IsMobile = (  ) => {
        const Mobile = useMobile()
        return Mobile
    }

    return(
        <MobileContext.Provider value={{
          IsMobile
        }}
        >
            { children }
        </MobileContext.Provider>
    )
}