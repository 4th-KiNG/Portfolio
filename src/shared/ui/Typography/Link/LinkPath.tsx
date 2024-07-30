"use client"
import Link from "next/link";
import styles from './LinkPath.module.scss'
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
interface ILink{
    path?: string,
    content: string,
    image?: StaticImageData
}

const LinkPath = ({path, content, image} : ILink) => {
    return (
        <>
        <Link href={path ? path : ""} className={styles.Link}>
            {image ? <Image src={image} className={styles.Link_Ico} alt="ico" /> : ""}
            <p className={styles.Link_Text}>{content}</p>
        </Link>
        </>
    );
}
 
export default LinkPath;