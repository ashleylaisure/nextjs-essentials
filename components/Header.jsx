import Link from 'next/link'
import logoImg from '@/assets/logo.png'
import classes from './Header.module.css'

const Header = () => {
    return (
        <header className={classes.header}>
            <Link className={classes.logo} href="/">
                <img src={logoImg.src} alt="A plate with food" />
                NextLevel Food
            </Link>

            <nav className={classes.nav}>
                <ul>
                    <li>
                        <Link href="/meals">Browse meals</Link>
                    </li>
                    <li>
                        <Link href="/community">Foodies Community</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
