import Image from 'next/image'

const FeaturedImage = ({ data }) => {
    const { node } = data
    const { sourceUrl, altText, mediaDetails } = node
    const { width, height } = mediaDetails
    return <Image
        src={sourceUrl}
        width={256}
        height={367}
        alt={altText}
    />
}

export default FeaturedImage