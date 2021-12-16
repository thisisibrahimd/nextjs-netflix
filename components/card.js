import Image from "next/image";
import Link from "next/link";
import FeaturedImage from '../components/featuredImage'

const Card = ({ title, image, slug }) => {
    return (
        <div>
            {image &&
                <FeaturedImage data={image} />
            }
            <h3>
                <Link href={`/titles/${slug}`} passHref>
                    <a>
                        {title}
                    </a>
                </Link>
            </h3>
        </div>
    )
}

export default Card