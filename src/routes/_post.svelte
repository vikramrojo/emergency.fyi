<script>
  export let post;

</script>

<li cell p="6" shadow="3" bg="white">
  <h2>
    <a rel='prefetch' href='{post.slug}'>{post.title}</a>
  </h2>
  {#each post.tags as tag}
    <a chip mr="2" mb="2" href="/?tag={tag}" class="">{tag}</a>
  {/each}
  <p>{post.description}</p>
</li>
