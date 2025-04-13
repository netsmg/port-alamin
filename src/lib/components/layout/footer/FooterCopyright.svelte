<script>
	import ExLink from '$components/common/ExLink.svelte';
	import { COPYRIGHT_ENTITY } from '$lib/constants/entities.js';

	let currentYear = new Date().getFullYear();
</script>

<!-- Footer -->
<div class="end text-xs">
	<div class="end__text">
		© {currentYear} {COPYRIGHT_ENTITY} Muhammad Al-amin (WEBUInet). All Rights Reserved.
	</div>

	
</div>

<style>
	.end {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
	}
	.end__text {
		user-select: none;
		margin-top: var(--space-small);
		color: var(--color-text-secondary);
	}
	.end__svelte {
		color: var(--color-svelte);
		font-weight: 600;
	}
</style>
