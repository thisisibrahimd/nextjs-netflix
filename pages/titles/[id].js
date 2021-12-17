import Col from '../../components/col'
import Button from '../../components/button'
import FeaturedImage from '../../components/featuredImage'
import Layout from '../../components/layout'
import Row from '../../components/row'
import StoryArt from '../../components/storyart'
import Heading from '../../components/heading'
import { getAllMovieSlugs, getMovieBySlug } from '../../lib/api'
import Paragraph from '../../components/paragraph'
import { convert_duration_to_hours_minutes } from '../../lib/utilities'

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
    const { title, featuredImage, titleInformation, genres, ratings } = movieData
    const { duration, year, youtubeUrl, storyArt, storyLogo } = titleInformation


    const ratingsString = ratings.edges.map((rating) => `${rating.node.name} `)
    const durationString = convert_duration_to_hours_minutes(duration)

    return <Layout>
        {storyArt &&
            <StoryArt storyArt={storyArt} youtubeUrl={youtubeUrl} />
        }
        <Row>
            <Col xs="12" sm="12" md="6">
                <Heading type="h1">{title}</Heading>
                <Paragraph>{year} &#8226; {ratingsString} &#8226; {durationString}</Paragraph>
            </Col>
            <Col xs="12" sm="12" md="6" textAlign="right">
                {genres.edges.map((genre, index) => {
                    const { name } = genre.node
                    return <Button key={index} label={name} inverted />
                })}
            </Col>
        </Row>
    </Layout>
}

export default singleMovie