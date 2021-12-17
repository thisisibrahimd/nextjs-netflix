import WordpressImage from "./wordpressimage"
import BtnUI from "./btnui"

import styles from './storyart.module.scss'
import { useState } from "react"
import Overlay from "./overlay"

const StoryArt = ({ storyArt, youtubeUrl }) => {
    const [isVideoVisible, setIsVideoVisible] = useState(false)

    return  <div className={styles.story_art_container}>
        <WordpressImage data={storyArt} />
        {youtubeUrl &&
            <BtnUI icon="play" clickHandler={() => setIsVideoVisible(true)} />
        }
        {isVideoVisible &&
            <Overlay type="video" closeHandler={() => setIsVideoVisible(false)} youtubeUrl={youtubeUrl} />
        }
    </div>
}

export default StoryArt