<script>
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';

	export let segment;
</script>

<style>
main {
  height: 100vh;
  
}
</style>

<main flex="column" justify="between">
  <section>
    <Nav {segment} />
    <slot />
  </section>
  <Footer />
</main>
