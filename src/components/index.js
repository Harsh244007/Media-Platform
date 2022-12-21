import { lazy } from "react"

const Header= lazy(()=>import("./Header/header"))
const Banner= lazy(()=>import("./Banner/banner"))
const Categories= lazy(()=>import("./Categories/categories"))

const Login= lazy(()=>import("./Login/login"))
const Signup= lazy(()=>import("./Signup/signup"))


export {Header,Banner,Login,Signup,Categories}