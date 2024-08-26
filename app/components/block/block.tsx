"use client"

import Image from "next/image"
import img1 from './1.svg'
import img2 from './2.svg'
import img3 from './3.svg'
import img4 from './4.svg'
import Link from "next/link"
import styles from './block.module.css'
import { useRouter } from "next/navigation"
export default function MainBlock(){
    const router = useRouter()
    return(
        <>
        
        <div className={styles.main}>
                <div className={styles.items} onClick={()=>router.push('/bilet')}>
                <Image src={img1} alt="a" />
                <h2>Іспит як в СЦ</h2>
                <p>20запитань, 20 хвилин, максимум 2 помилки</p>
            </div>


            <div className={styles.items}>
                <Image src={img2} alt="s"/>
                <h2>Вчити по білетах</h2>
                <p>20 випадкових запитань, без обмежень</p>
            </div>
            <div className={styles.items}>
                <Image src={img3} alt="dd"/>
         
                <h2>Вчити по темах</h2>
        
                <p>Запитання згруповані по темах</p>
            </div>
            <div className={styles.items}>
                <Image src={img4} alt="d"/>
                <h2>Мої помилки</h2>
                <p>Запитання, де були допущені помилки, з можливістю їх пройти ще раз</p>
            </div>

        </div>
        </>
    )
}