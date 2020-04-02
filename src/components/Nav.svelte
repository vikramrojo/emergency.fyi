<script>
	export let segment;
</script>

<style>
img {
	height: 40px;
}
</style>

<nav p="sm3" px="8" bg="gray3" flex class="h4" align="center">
	<a mr="6" py="2" aria-current='{segment === undefined ? "" : undefined}' href='.'><img src="logo.svg" alt="logo"></a>
	<a mr="6" py="2" aria-current='{segment === undefined ? "" : undefined}' href='.'>Impacted Counties</a>
	<a mr="6" aria-current='{segment === undefined ? "" : undefined}' href='health-depts'>Health Departments</a>
	<!-- <a aria-current='{segment === undefined ? "" : undefined}' href='give-back'>Give back</a> -->
</nav>
