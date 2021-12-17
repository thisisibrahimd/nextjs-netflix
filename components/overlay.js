import classNames from 'classnames/bind'

import Nav from './nav'
import BtnUI from './btnui'
import Input from './input'
import styles from './overlay.module.scss'
import YoutubeVideo from './youtubevideo'
import Container from './container'

let cx = classNames.bind(styles)

const Overlay = ({ type, closeHandler, youtubeUrl }) => {
    let overlayClasses = cx({
        overlay: true,
        menu: type === "menu",
        search: type === "search",
        video: type === "video"
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
        : type === "video" ?
            <>
            <Container>
                <YoutubeVideo youtubeUrl={youtubeUrl} />
            </Container>
            </>
        : ''
        }
    </div>
}

export default Overlay