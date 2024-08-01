"use client"
import Image, { StaticImageData } from 'next/image';
import styles from './Projects.module.scss'
import { arrow, coinflip, doorshop, exton, mediagram, portfolio, watercoin } from '@/assets/images';
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
        title: "Protfolio",
        content: "Portfolio site for presenting my skills",
        image: portfolio,
        githublink: "https://github.com/4th-KiNG/Portfolio",
        deploy: "https://alexander-pisanko-portfolio.vercel.app/"
    },
    {
        title: "MediaGram",
        content: "Telegram Mini App for a company that launched the sale of its vouchers.",
        image: mediagram,
        githublink: "https://github.com/4th-KiNG/MediaGram",
        deploy: "https://t.me/Media_Gram_Test_Bot"
    },
    {
        title: "Door Shop",
        content: "Business card website and product catalog for a door store with admin panel integration",
        image: doorshop,
        githublink: "https://github.com/4th-KiNG/DoorShop",
        deploy: "https://door-shop-wine.vercel.app/"
    },
    {
        title: "WaterCoin",
        content: "Telegram Mini App for clicker game with integration of a large number of mathematical calculations",
        image: watercoin,
        githublink: "https://github.com/4th-KiNG/WaterCoin",
        deploy: "https://t.me/WaterTest1Bot"
    },
    {
        title: "CoinFlipBot",
        content: "Telegram Mini App for playing heads and rush on tones",
        image: coinflip,
        githublink: "https://github.com/4th-KiNG/CoinFlipBot",
        deploy: "https://4th-king.github.io/CoinFlipBot/"
    },
    {
        title: "Exton",
        content: "Telegram Mini App wallet with new Exton token",
        image: exton,
        githublink: "https://github.com/MishaZhem/NewExton",
        deploy: "https://t.me/Exton_Bot"
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
        <div className={styles.Projects} id='projects'>
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