<script>
  const {data} = $props()
</script>

<div class="flex flex-wrap gap-4 lg:gap-6">
	{#each data.profiles as profile}
		<div class="py-3 px-4 sm:max-w-xl bg-white shadow-lg sm:rounded-3xl sm:p-20 bg-clip-padding bg-opacity-20 border border-gray-200" style="backdrop-filter: blur(20px);">
			<div class="max-w-md mx-auto text-white">
				{profile.name}
			</div>
		</div>
	{/each}
</div>