import FeaturedImage from '../../components/featuredImage'
import Layout from '../../components/layout'
import { getAllMovieSlugs, getMovieBySlug } from '../../lib/api'

export async function getStaticPaths() {
    const movieSlugs = await getAllMovieSlugs()

    const paths = movieSlugs.edges.map(edge => {
        const { slug } = edge.node
        return {
            params: {
                id: slug
            }
        }
    })

    return {
		paths,
		fallback: false
	}


}

export async function getStaticProps({ params }) {
	const movieData = await getMovieBySlug(params.id)

	return {
		props : {
		     movieData
		}
	}
}

const singleMovie = ({ movieData }) => {
    const { title, featuredImage } = movieData

    return <Layout>
        <h1>{title}</h1>
        {featuredImage &&
            <FeaturedImage data={featuredImage} />
        }
    </Layout>
}

export default singleMovie