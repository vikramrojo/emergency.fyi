import counties from './_counties.js';

const contents = JSON.stringify(counties.map(county => {
	return {
		name: county.name,
		state: county.state,
		url: county.healthURL,
		facebook: county.healthFacebook,
		twitter: county.healthTwitter,
		phone: county.healthPhone,
		governor: county.governor,
		senator1: county.senator1,
		senator2: county.senator2,
		secretary: county.secretary,
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}