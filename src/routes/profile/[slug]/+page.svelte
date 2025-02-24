<script>
	const { data } = $props()
</script>

{#each data.posts as post}
	
<div>
{post.title}
<br>
{post.content}
</div>
{/each}