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

[icon="36"] {
	height: 36px;
	vertical-align: text-bottom;
}

[column] {
  margin: 0 auto;
  max-width: 1240px;
}

</style>

<svelte:head>
	<title>#EmergencyFYI {county.county} County, {county.state}</title>
</svelte:head>

<section bg="gray3">
	<ul grid column columns="1" gap="8" p="8 sm3">

		<li cell>
			<h1>{county.county} County</h1>
			<h2>{county.state}</h2>
			<p><span chip type="danger" mr="2">Last Updated</span><b>Tuesday, March 31, 2020</b></p>
		</li>
		<li cell>
			<h2><img src="building-hospital.svg" icon="36" mr="2" alt="icon title"/>COVID-19 Updates.</h2>
			<ul grid gap="6" columns="2">
				<li cell>
					<span class="h3">Cases <a href="https://github.com/nytimes/covid-19-data">(Source)</span>
					<h1>{county.cases}</h1>
				</li>
				<li cell>
					<span class="h3">Deaths <a href="https://github.com/nytimes/covid-19-data">(Source)</a></span>
					<h1>{county.deaths}</h1>
				</li>
				<li cell span="2">
					<span class="h3">Projected COVID-19 Peak <a href="https://covid19.healthdata.org/projections">(Source)</span>
					<h2>
						{#if county.state == "Alabama"}
							April 20, 2020
						{:else if county.state == "Alaska"}
							April 15, 2020
						{:else if county.state == "Arizona"}
							April 27, 2020
						{:else if county.state == "Arkansas"}
							April 25, 2020
						{:else if county.state == "California"}
							April 28, 2020
						{:else if county.state == "Colorado"}
							April 17, 2020
						{:else if county.state == "Connecticut"}
							April 15, 2020
						{:else if county.state == "Delaware"}
							April 11, 2020
						{:else if county.state == "District of Columbia"}
							April 16, 2020
						{:else if county.state == "Florida"}
							May 2, 2020
						{:else if county.state == "Georgia"}
							April 23, 2020
						{:else if county.state == "Hawaii"}
							May 2, 2020
						{:else if county.state == "Idaho"}
							April 26, 2020
						{:else if county.state == "Illinois"}
							April 17, 2020
						{:else if county.state == "Indiana"}
							April 19, 2020
						{:else if county.state == "Iowa"}
							April 30, 2020
						{:else if county.state == "Kansas"}
							April 28, 2020
						{:else if county.state == "Kentucky"}
							May 16, 2020
						{:else if county.state == "Louisiana"}
							April 10, 2020
						{:else if county.state == "Maine"}
							April 17, 2020
						{:else if county.state == "Maryland"}
							April 28, 2020
						{:else if county.state == "Massachusetts"}
							April 16, 2020
						{:else if county.state == "Michigan"}
							April 9, 2020
						{:else if county.state == "Minnesota"}
							April 23, 2020
						{:else if county.state == "Mississippi"}
							April 22, 2020
						{:else if county.state == "Missouri"}
							May 22, 2020
						{:else if county.state == "Montana"}
							April 26, 2020
						{:else if county.state == "Nebraska"}
							April 23, 2020
						{:else if county.state == "Nevada"}
							April 21, 2020
						{:else if county.state == "New Hampshire"}
							April 17, 2020
						{:else if county.state == "New Jersey"}
							April 8, 2020
						{:else if county.state == "New Mexico"}
							April 24, 2020
						{:else if county.state == "New York"}
							April 9, 2020
						{:else if county.state == "North Carolina"}
							April 27, 2020
						{:else if county.state == "North Dakota"}
							April 21, 2020
						{:else if county.state == "Ohio"}
							April 19, 2020
						{:else if county.state == "Oklahoma"}
							April 22, 2020
						{:else if county.state == "Oregon"}
							May 6, 2020
						{:else if county.state == "Pennsylvania"}
							April 17, 2020
						{:else if county.state == "Rhode Island"}
							April 20, 2020
						{:else if county.state == "South Carolina"}
							April 27, 2020
						{:else if county.state == "South Dakota"}
							May 3, 2020
						{:else if county.state == "Tennessee"}
							April 19, 2020
						{:else if county.state == "Texas"}
							May 5, 2020
						{:else if county.state == "Utah"}
							April 23, 2020
						{:else if county.state == "Vermont"}
							April 9, 2020
						{:else if county.state == "Virginia"}
							May 20, 2020
						{:else if county.state == "Washington"}
							April 15, 2020
						{:else if county.state == "West Virginia"}
							May 3, 2020
						{:else if county.state == "Washington"}
							April 15, 2020
						{:else if county.state == "Wyoming"}
							May 4, 2020
						{:else}
							Unknown
						{/if}
					</h2>
				</li>
			</ul>
		</li>
		<li cell>
			<h3>EmergencyFYI is a resource that provides city- and county- level information to help you navigate this ongoing crisis, expand your network for volunteering, and provide direct support for local relief efforts. If this is an emergency, contact your insurance provider, primary care physician, or your local county health department.</h3>
      <a button href="health-depts/">Local Health Departments</a>
		</li>
	</ul>
</section>

<section column p="8 sm3">
	<ul grid columns="1" gap="8">

		<li cell>
			<h2><img src="clipboard-check.svg" icon="36" mr="2" alt="icon title"/>What you can do?</h2>
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
			<h2><img src="alert-triangle.svg" icon="36" mr="2" alt="icon title"/>Active efforts against COVID-19.</h2>
			<p><span chip type="danger" mr="4">Coming soon</span></p>		
		</li>


		<li cell bg="yellow" shadow="3" p="6">
			<h2><img src="phone-call.svg" icon="36" mr="2" alt="icon title"/>What can your elected officials do?</h2>
			<p>Elected officials need to hear from constituents concerned about the COVID-19 response.</p>
			<ul grid columns="4" gap="6" >
				<li cell>
					<h3>Implement social distancing</h3>
					<p>4 in 5 voters believe we should continue to practice social distancing for as long as necessary, even if it means a slower economic recovery. Some states have not implemented quarantine restrictions which threaten to worsen conditions.</p>
				</li>		
				<li cell>
					<h3>Emergency preparedness</h3>
					<p>We are facing a massive shortfall of personal protective equipment, ICU beds, ventilators and testing kits. Voters demand that hard hit counties receive additional federal support and where necessary, declare a state of emergency.</p>				
				</li>		
				<li cell>
					<h3>Absentee voting.</h3>
					<p> Despite the disruption to civic life America will hold elections this November. Every eligible voter should be able to safely register and vote. Your Secretary of State should bolster absentee voting measures. Contact Secretary of State.</p>
				</li>
				<li cell>
					<h3>Economic relief.</h3>
					<p>The COVID-19 response has necessitated a widespread shutdown of retail and service sectors, threatening millions of lost jobs. Given the quarantine, the government must bail out workers and employers by providing debt relief and emergency subsidies.</p>
				</li>
			</ul>
		</li>

		<li cell>
			<h2><img src="message.svg" icon="36" mr="2" alt="icon title"/>Share this page.</h2>
			<h3>Take a second to share this county page on social media. Encourage people you know to stay up to date on local updates and contact your representatives to ask for an adequate emergency response.</h3>
		</li>

		<li cell>
			<h2><img src="shield.svg" icon="36" mr="2" alt="icon title"/>What is our goal?</h2>
			<p>Emergency FYI is calling on Americans to act on this health crisis by supporting our communities, preserving our public health and protecting our democracy. Elected officials can act decisively to:</p>
			<ul class="h3">
				<li>Enforce social distancing and shelter in place so long as is required to keep our communities healthy.</li>
				<li>Declare a state of emergency and collect necessary medical supplies.</li>
				<li>Provide mail ballot options and protect in-person voting options.</li>
				<li>Provide emergency economic relief to hard hit employees and businesses impacted by quarantines.</li>
			</ul>
		</li>

	</ul>
</section>