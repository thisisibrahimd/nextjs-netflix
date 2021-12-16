import classNames from 'classnames/bind'

import Nav from './nav'
import BtnUI from './btnui'
import Input from './input'
import styles from './overlay.module.scss'

let cx = classNames.bind(styles)

const Overlay = ({ type, closeHandler }) => {
    let overlayClasses = cx({
        overlay: true,
        menu: type === "menu",
        search: type === "search"
    })

    return <div className={overlayClasses}>
        <BtnUI icon='close' clickHandler={() => closeHandler(false)}/>
        { type === "menu" ?
            <>
            <Nav type="mobile" />
            <Nav.SocialMedia />
            </>
        : type === "search" ?
            <>
            <Input />
            <BtnUI icon="search" />
            </>
        : ''
        }
    </div>
}

export default Overlay