import Image from 'next/image'
import Container from './container'
import styles from './footer.module.scss'
import Nav from './nav'

const socialMediaLinks = [
    {
        icon: "facebook",
        path: "https://www.facebook.com/netflix"
    },
    {
        icon: "twitter",
        path: "https://www.twitter.com/netflix"
    },
    {
        icon: "instagram",
        path: "https://www.instagram.com/netflix"
    }
]

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container>
                <Nav.SocialMedia />
            </Container>
        </footer>
    )
}

export default Footer