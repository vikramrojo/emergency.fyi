import counties from './_counties.js';

const contents = JSON.stringify(counties.map(county => {
	return {
		name: county.slug,
		cases: county.cases,
		deaths: county.deaths,
		county: county.county,
		state: county.state,
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}