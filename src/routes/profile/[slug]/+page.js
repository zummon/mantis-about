import posts from '../../../lib/post.json'

export async function load ({params}) {
	let filteredPosts = posts.filter((post) => {
		return post.profileName == params.slug
	})
	return {
		posts: filteredPosts
	}
}