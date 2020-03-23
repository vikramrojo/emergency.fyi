<script>
	export let segment;
</script>

<style>

</style>

<nav p="sm3" px="8" py="4">
	<ul flex>
		<li><a aria-current='{segment === undefined ? "" : undefined}' href='.'>Emergency.FYI</a></li>
		<li ml="8"><a aria-current='{segment === undefined ? "" : undefined}' href='health-depts'>Health Departments</a></li>
		<li ml="8"><a aria-current='{segment === "about" ? "" : undefined}' href='about'>Submit Resource</a></li>
	</ul>
</nav>
