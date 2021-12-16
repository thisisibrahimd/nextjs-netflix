import Image from 'next/image'
import classNames from 'classnames/bind'

import styles from './btnui.module.scss'

let cx = classNames.bind(styles)

const BtnUI = ({ icon }) => {
    let btnClasses = cx({
        btn_ui: true,
        menu: icon === "menu",
        search: icon === "search"
    })
    return <button className={btnClasses}>
        <Image src={`/images/icon-${icon}.svg`} altText={`${icon} icon`} width={36} height={36} />
    </button>
}

export default BtnUI