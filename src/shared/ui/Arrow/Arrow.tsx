import { arrow } from "@/assets/images";
import Image from "next/image";
import styles from './Arrow.module.scss'

interface IArrow{
    direction: "left" | "right"
    onClick: () => void
}

const Arrow = ({direction, onClick} : IArrow) => {
    return (
        <>
        <button
            className={styles.Arrow}
            style={{rotate: `${direction === "left" ? "180deg" : ""}`}}
            onClick={onClick}
        >
            <Image src={arrow} alt="arrow" />
        </button>
        </>
    );
}
 
export default Arrow;