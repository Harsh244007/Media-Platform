import { lazy } from "react"

const Header= lazy(()=>import("./Header/header"))
const Banner= lazy(()=>import("./Banner/banner"))


export {Header,Banner}