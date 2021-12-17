import Image from 'next/image'

import styles from './wordpressimage.module.scss'

const WordpressImage = ({ data }) => {
    const { sourceUrl, altText, mediaDetails } = data
    const { width, height } = mediaDetails

    return <Image
        src={sourceUrl}
        width={width}
        height={height}
        alt={altText}
        className={styles.responsive_img}
    />
}

export default WordpressImage