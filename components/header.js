import Logo from './logo'
import NavDesktop from './navdesktop'
import BtnGroup from './btngroup'
import BtnUI from './btnui'

import styles from "./header.module.scss"

const Header = () => {
    return (
        <header className={styles.header}>
            <Logo />
            <NavDesktop />
            <BtnGroup>
                <BtnUI icon="menu" />
                <BtnUI icon="search" />
            </BtnGroup>
        </header>
    )
}

export default Header