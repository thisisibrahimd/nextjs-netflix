import Link from 'next/link'
import BtnUI from './btnui'
import styles from './overlay.module.scss'

import { getNavLinks } from '../lib/api'
import Nav from './nav'

const OverlayMenu = ({ closeHandler }) => {
    const navLinks = getNavLinks()
    return <div className={styles.overlay}>
        <BtnUI icon='close' clickHandler={() => closeHandler(false)}/>
        <Nav type="mobile" />
    </div>
}

export default OverlayMenu