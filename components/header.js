import { useState } from 'react'

import Logo from './logo'
import Nav from './nav'
import NavDesktop from './navdesktop'
import OverlayMenu from './overlaymenu'
import Overlay from './overlay'
import BtnGroup from './btngroup'
import BtnUI from './btnui'

import styles from "./header.module.scss"

const Header = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false)
    const [isSearchVisible, setIsSearchVisible] = useState(false)

    return (
        <header className={styles.header}>
            {isMenuVisible &&
                <Overlay type="menu" closeHandler={setIsMenuVisible} />
            }
            {isSearchVisible &&
                <Overlay type="search" closeHandler={setIsSearchVisible} />
            }
            <Logo />
            <Nav type="desktop" />
            <BtnGroup>
                <BtnUI icon="menu" clickHandler={() => setIsMenuVisible(true)}/>
                <BtnUI icon="search" clickHandler={() => setIsSearchVisible(true)} />
            </BtnGroup>
        </header>
    )
}

export default Header