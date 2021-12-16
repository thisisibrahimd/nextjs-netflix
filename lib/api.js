const API_URL = process.env.WORDPRESS_API_URL

async function fetchAPI(query, { variables } = {}) {
    const headers = { 'Content-Type': 'application/json' }

    const res = await fetch(API_URL, {
        method: 'POST',
        headers,
        body: JSON.stringify({
            query,
            variables,
        }),
    })

    const json = await res.json()
    if (json.errors) {
        console.error(json.errors)
        throw new Error('Failed to fetch API')
    }
    return json.data
}

export async function getAllMovies() {
    const data = await fetchAPI(`
		query MyQuery {
			titles {
				nodes {
					id
					title
					slug
					featuredImage {
						node {
							id
							sourceUrl
						}
					}
				}
			}
		}
	`)
    return data.titles
}

export async function getAllMovieSlugs() {
	const data = await fetchAPI(`
		query MyQuery {
			titles {
				edges {
					node {
						id
						slug
					}
				}
			}
		}
	`)
	return data?.titles
}

export async function getMovieBySlug(id) {
	const data = await fetchAPI(`
	query MyQuery($id: ID!) {
		title(id: $id, idType: SLUG) {
			id
			title
			content
			featuredImage {
				node {
					altText
					mediaDetails {
						height
						width
					}
					sourceUrl
				}
			}
		}
	}`, {
		variables: {
			"id" : id
		}
	})
	return data?.title

}