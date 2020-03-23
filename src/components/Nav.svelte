<script>
	export let segment;
</script>

<style>

</style>

<nav>
	<ul>
		<li><a aria-current='{segment === undefined ? "" : undefined}' href='.'>home</a></li>
		<li><a aria-current='{segment === "about" ? "" : undefined}' href='about'>about</a></li>
		<li><a rel=prefetch aria-current='{segment === "blog" ? "" : undefined}' href='blog'>blog</a></li>
	</ul>
</nav>
