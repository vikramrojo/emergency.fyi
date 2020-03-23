<script>
	export let segment;
</script>

<style>

</style>

<nav p="8 sm3">
	<ul flex>
		<li><a aria-current='{segment === undefined ? "" : undefined}' href='.'>home</a></li>
		<li ml="8"><a aria-current='{segment === "about" ? "" : undefined}' href='about'>about</a></li>
	</ul>
</nav>
