<script>
  export let organization;
</script>

<li cell p="6 sm3" shadow="3" bg="white">
  <h3>
    <a target='_blank' rel='noopener noreferrer' href='{organization.donation}'>{organization.title}</a>
  </h3>
  <p>{organization.description}</p>
</li>
