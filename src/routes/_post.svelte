<script>
  export let post;
</script>

<li cell p="6" shadow="3" bg="white">
  <h2>
    <a rel='prefetch' href='{post.slug}'>{post.title}</a>
  </h2>
  <a chip mr="2" mb="2" href="/?tag={post.tagA}" class="">{post.tagA}</a>
  <a chip mr="2" mb="2" href="/?tag={post.tagB}" class="">{post.tagB}</a>
  <p>{post.description}</p>
</li>
