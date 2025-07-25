import Link from 'next/link'
import Image from 'next/image'

import logoImg from '@/assets/logo.png'
import classes from './Header.module.css'
import HeaderBackground from './Header-background'
import NavLink from './nav-link'

const Header = () => {
    return (
        <>
        <HeaderBackground />
        
        <header className={classes.header}>
            <Link className={classes.logo} href="/">
                <Image src={logoImg}  alt="A plate with food" priority/>
                NextLevel Food
            </Link>

            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink href="/meals">Browse Meals</NavLink>
                    </li>
                    <li>
                        <NavLink href="/community">Foodies Community</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
        </>
    )
}

export default Header
