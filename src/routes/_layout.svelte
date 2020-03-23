<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>

</style>

<Nav {segment}/>

<main p="8 sm3">
	<slot></slot>
</main>