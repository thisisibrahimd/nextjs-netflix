import Image from 'next/image'

const Logo = () => {
    return (
        <Image src={`/images/netflix-logo.svg`} altText={'Netflix Logo'} width={160} height={60} />
    )
}

export default Logo