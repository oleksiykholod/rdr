import styles from './navBar.module.css'
import Image from 'next/image'
import svitlophor from './svitlophor.jpg'
import { ReactElement } from 'react'
import SignIn from '../sign_in'
import { auth } from '@/auth'
import SignOut from '../logout'

export default async function NavBar(){
    async function but(){
        const session = await auth()
    if (session){
        return(<><SignOut/></>)
    }
    }
    return(
        <>
        <header className={styles.Nav}>
            <Image src={svitlophor} alt='s' className='image' width={30}/>
            <h1>Тести ПДР</h1>
            {but()}
        </header>
        </>
    )
}