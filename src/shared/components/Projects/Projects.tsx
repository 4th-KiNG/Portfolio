"use client"
import Image, { StaticImageData } from 'next/image';
import styles from './Projects.module.scss'
import { arrow, doorshop, mediagram, watercoin } from '@/assets/images';
import Title from '@/shared/ui/Typography/Title/Title';
import Project from '@/shared/ui/Project/Project';
import Text from '@/shared/ui/Typography/Text/Text';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Arrow from '@/shared/ui/Arrow/Arrow';

interface IProject{
    title: string,
    content: string,
    image: StaticImageData,
    githublink: string,
    deploy: string
}

const projects: IProject[] =[
    {
        title: "MediaGram",
        content: "Telegram Mini App for a company that launched the sale of its vouchers.",
        image: mediagram,
        githublink: "",
        deploy: ""
    },
    {
        title: "Door Shop",
        content: "Business card website and product catalog for a door store with admin panel integration",
        image: doorshop,
        githublink: "",
        deploy: ""
    },
    {
        title: "WaterCoin",
        content: "Telegram Mini App for clicker game with integration of a large number of mathematical calculations",
        image: watercoin,
        githublink: "",
        deploy: ""
    },
    {
        title: "MediaGram",
        content: "Telegram Mini App for a company that launched the sale of its vouchers.",
        image: mediagram,
        githublink: "",
        deploy: ""
    },
    {
        title: "Door Shop",
        content: "Business card website and product catalog for a door store with admin panel integration",
        image: doorshop,
        githublink: "",
        deploy: ""
    },
    {
        title: "WaterCoin",
        content: "Telegram Mini App for clicker game with integration of a large number of mathematical calculations",
        image: watercoin,
        githublink: "",
        deploy: ""
    }
]

const Projects = () => {
    const [number, setNumber] = useState(3)
    const [offset, setOffset] = useState(200)
    const allprojects = document.getElementsByClassName(styles.One)
    useEffect(() => {
        for (let i = 0; i < allprojects.length; i ++){
            allprojects[i].classList.remove(styles.Up)
        }
        allprojects[number].classList.add(styles.Up)
        const windowCenter = document.documentElement.clientWidth / 2
        const objectcenter = allprojects[number].getBoundingClientRect().left + (allprojects[number].getBoundingClientRect().width / 2)
        setOffset(offset + (windowCenter - objectcenter))
    }, [number])

    return (
        <>
        <div className={styles.Projects}>
            <Title
                content='Projects'
            />
            <ul>
                {projects.map((project: IProject, index) => {
                    return(
                        <>
                        <li key={index} className={styles.One} style={{transform: `translateX(${offset}px)`}}>
                            <Project {...project}/>
                        </li>
                        </>
                    )
                })}
            </ul>
            <div className={styles.Arrows}>
                <Arrow direction='left' onClick={() => setNumber(number > 0 ? number - 1 : number)} />
                <Arrow direction='right' onClick={() => setNumber(number < allprojects.length - 1 ? number + 1 : number)} />
            </div>
        </div>
        </>
    );
}
 
export default Projects;