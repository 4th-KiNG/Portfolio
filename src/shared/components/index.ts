import Header from "./Header/Header";
import About from "./About/About";
import MainInfo from "./MainInfo/MainInfo";
import MyStack from "./MyStack/MyStack";
import dynamic from "next/dynamic";
const Projects = dynamic(() => import("./Projects/Projects"), {ssr: false})
import CallBack from "./CallBack/CallBack";
import Footer from "./Footer/Footer";

export{
    Header,
    About,
    MyStack,
    MainInfo,
    Projects,
    CallBack,
    Footer
}