import posts from './_posts.js';

const contents = JSON.stringify(posts.map(post => {
	return {
		title: post.title,
		url: post.url,
		description: post.description,
		email: post.email,
		social: post.social,
		tagA: post.tagA,
		tagB: post.tagB
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}