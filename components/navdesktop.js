import Link from 'next/link'

import styles from './nav.module.scss'

const navLinks = [
    {
        label: "Home",
        path: '/'
    },
    {
        label: "TV Shows",
        path: '/tv'
    },
    {
        label: "Movies",
        path: '/movies'
    },
    {
        label: "New & Popular",
        path: '/new'
    },
    {
        label: "My List",
        path: '/my-list'
    },
    {
        label: "Watch Again",
        path: '/watch-again'
    }
]

const NavDesktop = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                {navLinks.map((navLink, index) => {
                    const {label, path} = navLink
                    return <li>
                        <Link href={path}>
                        <a>
                            {label}
                            </a>
                            </Link>
                    </li>
                })}
            </ul>
        </nav>
    )
}

export default NavDesktop