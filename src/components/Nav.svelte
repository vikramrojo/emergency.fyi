<script>
	export let segment;
</script>

<style>
img {
	height: 40px;
}

.bold {
	font-weight: 500;
	text-decoration: underline;
}
</style>

<nav p="sm3" px="8" bg="gray3" flex class="h4" align="center">
	<a mr="6" py="2" href='.'><img src="logo.svg" alt="logo"></a>
	<a mr="6" py="2" class={segment === undefined ? 'bold' : ''} href='.'>Impacted Counties</a>
	<a mr="6" class={segment === 'health-depts' ? 'bold' : ''} href='health-depts'>Health Departments</a>
	<!-- <a aria-current='{segment === undefined ? "" : undefined}' href='give-back'>Give back</a> -->
</nav>
