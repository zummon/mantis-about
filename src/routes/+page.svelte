<script>
	const { data } = $props();
</script>

<div class="max-w-4xl mx-auto">
	<h2 class="text-3xl font-semibold mb-8 text-center">Profiles</h2>

	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
		{#each data.profiles as profile}
			<div class="rounded-lg shadow-md p-6">
				<div
					class="w-24 h-24 rounded-full border border-dashed mb-4 mx-auto overflow-hidden"
				>
					<img class="" src={profile.imgsrc} alt={profile.origin} />
				</div>
				<h3 class="text-lg font-semibold text-center mb-2">{profile.name}</h3>
				<p class="text-center mb-4">Software Engineer</p>
				<div class="flex justify-center space-x-4">
					<a href="/profile/{profile.slug}" class="underline">View</a>
				</div>
			</div>
		{/each}
	</div>
</div>
