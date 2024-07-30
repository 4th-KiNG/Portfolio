import Header from "./Header/Header";
import About from "./About/About";
import MainInfo from "./MainInfo/MainInfo";
import MyStack from "./MyStack/MyStack";
import dynamic from "next/dynamic";
const Projects = dynamic(() => import("./Projects/Projects"), {ssr: false})

export{
    Header,
    About,
    MyStack,
    MainInfo,
    Projects
}