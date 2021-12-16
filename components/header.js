import { useState } from 'react'

import Logo from './logo'
import NavDesktop from './navdesktop'
import OverlayMenu from './overlaymenu'
import BtnGroup from './btngroup'
import BtnUI from './btnui'

import styles from "./header.module.scss"

const Header = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false)

    return (
        <header className={styles.header}>
            {isMenuVisible &&
                <OverlayMenu closeHandler={setIsMenuVisible} />
            }
            <Logo />
            <NavDesktop />
            <BtnGroup>
                <BtnUI icon="menu" clickHandler={() => setIsMenuVisible(true)}/>
                <BtnUI icon="search" />
            </BtnGroup>
        </header>
    )
}

export default Header