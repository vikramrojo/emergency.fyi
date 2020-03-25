<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`index.json`).then(r => r.json()).then(organizations => {
			return { organizations };
		});
	}
</script>

<script>
	export let organizations;

	import _ from 'lodash';
	import Donation from "./_donation.svelte";

	let filter = '';
</script>

<svelte:head>
  <title>Give back</title>
</svelte:head>

<section p="8 sm4">
  <ul grid columns="3" gap="8">
    <li cell>
      <h2>Give back</h2>
      <p>These organziations could use your help.</p>
      <p>Look for donation opportunity here.</p>
    </li>
		{#each organizations as organization}
			{#if (organization.donation && organization.donation.length !== 0)}
				<Donation {organization} />
			{/if}
		{/each}
  </ul>
</section>