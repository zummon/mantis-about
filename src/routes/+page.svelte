<script>
  const { data } = $props()
</script>

<div class="flex flex-wrap gap-4 lg:gap-6">
	{#each data.profiles as profile}
		<div class="py-3 px-4 sm:max-w-xl shadow-lg sm:rounded-3xl sm:p-20 bg-clip-padding bg-opacity-20 border border-gray-200" style="backdrop-filter: blur(20px);">
			<a class="" href="/profile/{profile.slug}">
				{profile.name}
			</a>
		</div>
	{/each}
</div>