// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const counties = [
  {
    "name":"Maricopa",
    "state":"Arizona",
    "healthURL":"https://www.maricopa.gov/5302/Public-Health",
    "healthFacebook":"https://www.facebook.com/MCDPH",
    "healthTwitter":"https://twitter.com/Maricopahealth",
    "healhPhone":"(602) 506-6900",
    "governor":"Doug Ducey",
    "senator1":"Krysten Sinema",
    "senator2":"Martha McSally",
    "secretary":"Katie Hobbs",
  }
]

export default counties;