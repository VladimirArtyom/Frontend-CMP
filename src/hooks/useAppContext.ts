import { useContext } from "react"
import { AppContext } from "../context/AppContext"

export const useAppContext = () => {
    const context = useContext(AppContext)
    if (!context) throw new Error("Useappcontext must be used within app Provider")
    return context;
}