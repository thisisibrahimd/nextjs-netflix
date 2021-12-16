import BtnUI from './btnui'
import styles from './overlay.module.scss'

const OverlayMenu = ({ closeHandler }) => {
    return <div className={styles.overlay}>
        <BtnUI icon='close' clickHandler={() => closeHandler(false)}/>
        Overlay Menu goes here.
    </div>
}

export default OverlayMenu