<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	import '$lib/styles/global.scss';

	import PageMenu from '$lib/icons/Page_Menu_iOS.svelte';
	import p from '$lib/styles/rootLayout/pageMenu.module.scss';

	import Sidebar from '$lib/components/Sidebar.svelte';

	let { children } = $props();

	// サイドバーの表示を切り替える
	let showSidebar = $state(false);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header>
	<button class={p.button} onclick={() => showSidebar = !showSidebar}>
		<PageMenu />
	</button>

	{#if showSidebar}
		<Sidebar onClose={() => showSidebar = false} />
	{/if}
</header>

{@render children()}

