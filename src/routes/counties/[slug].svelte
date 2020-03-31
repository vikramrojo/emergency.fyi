<script context="module">
	export async function preload({ params, query }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`counties/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { county: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	export let county;
</script>

<style>

[column] {
  margin: 0 auto;
  max-width: 1040px;
}

</style>

<svelte:head>
	<title>{county.name}</title>
</svelte:head>

<section column p="8 sm3">
	<ul grid columns="1" gap="8">

		<li cell>
			<h1>{county.name} County</h1>
			<h2>{county.state}</h2>
			<p><span chip type="danger" mr="4">Last Updated:</span><span>Friday, March 27, 2020</span></p>
			<h3>EmergencyFYI is a resource that provides county level information to navigate this ongoing crisis, expand your network for volunteering and other direct support for local relief efforts.</h3>
		</li>

		<li cell>
			<h2>COVID-19 Updates.</h2>
			<ul grid gap="6" columns="3">
				<li cell>
					<span>Cases</span>
					<h2>399</h2>
					<a>Source</a>
				</li>
				<li cell>
					<span>Deaths</span>
					<h2>5</h2>
					<a>Source</a>
				</li>
				<li cell>
					<span>COVID-19 Peak</span>
					<h2>April 19, 2020</h2>
					<a>Source</a>
				</li>
			</ul>
		</li>

		<li cell>
			<h2>What you can do?</h2>
			<ul grid gap="6">
				<li cell>
					<h3>Practicing social distancing.</h3>
					<p>This is a strategy to reduce physical interactions between people with the aim of slowing the spread of COVID-19. Practice non-physical greetings, maintain at least 6 feet between yourself and others and cease any form of gatherings.</p>
				</li>
				<li cell>
					<h3>Testing for COVID-19.</h3>
					<p>Symptoms listed are fever, cough and shortness of breath. Most people have mild illness and are able to recover from home. Not everyone needs to be tested for COVID-19. If you experience trouble breathing, a persistent pain in the chest, confusion or an inability to arouse or are bluish in your face, get medical attention.</p>
				</li>
				<li cell>
					<h3>Connecting with relief efforts.</h3>
					<p> In addition to governmental response, volunteers across the country are coming together to form mutual aid groups. Seek out or contribute to relief efforts happening in your county. If you can, pay it forward with a financial contribution to local businesses.</p>
				</li>
			</ul>
		</li>

		<li cell>
			<h2>Active efforts against COVID-19.</h2>
		
		</li>


		<li cell bg="white" shadow="3" p="6">
			<h2>What can your elected officials do?</h2>
			<p>Elected officials need to hear from constituents concerned about the COVID-19 response.</p>
			<ul grid columns="3" gap="6" >
				<li>
					<h3>Indefinite social distancing</h3>
					<p>4 in 5 voters believe we should continue to practice social distancing for as long as necessary. Even if it requires a slower economic recovery.</p>
					<h3>{county.senator1}</h3>
					<p>(123) 123-1231</p>
					<h3>{county.senator2}</h3>
					<p>(123) 123-1231</p>
				</li>		
				<li>
					<h3>Emergency preparedness</h3>
					<p>We are facing a massive shortfall of personal protective equipment, ICU beds and ventilators. Voters demand that hard hit counties receive additional federal support and if necessary, declare a state of emergency.</p>				
					<h3>{county.governor}</h3>
					<p>(123) 123-1231</p>
				</li>		
				<li>
					<h3>Absentee voting.</h3>
					<p> Despite the disruption to civic life America will hold elections this November. Every eligible voter should be able to safely register and vote. Your Secretary of State should bolster absentee voting measures. Contact Secretary of State.</p>
					<h3>{county.secretary}</h3>
					<p>(123) 123-1231</p>
				</li>
			</ul>
		</li>

		<li cell>
			<h2>Share this page.</h2>
			<p>Take a second to share this county page on social media. Encourage people you know to stay up to date on local updates and contact your representatives to ask for an adequate emergency response and absentee voting.</p>
		</li>

		<li cell>
			<h2>What is our goal?</h2>
			<p>Emergency FYI is calling on Americans to act on this health crisis by supporting our communities, preserving our public health and protecting our democracy. Elected officials can act decisively to:</p>
			<ul class="h3">
				<li>Enforce social distancing so long as is required to keep our communities healthy.</li>
				<li>Declare a state of emergency and collect necessary medical supplies.</li>
				<li>Provide mail ballot options and protect in-person voting options.</li>
			</ul>
		</li>

	</ul>
</section>