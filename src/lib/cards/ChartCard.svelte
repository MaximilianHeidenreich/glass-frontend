<script>
    export let title;
    export let value;
    export let change;
</script>

<div class="card">
    <div class="text-base text-gray-400 ">{title}</div>
    <div class="flex items-center pt-1">
        <div class="text-2xl font-bold text-gray-900 ">{value}</div>
        {#if change >= 0}
        <span class="flex items-center px-2 py-0.5 mx-2 text-sm text-green-600 bg-green-100 rounded-full">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 15L12 9L6 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
            <span>1.8%</span>
        </span>
        {:else}
        <span class="flex items-center px-2 py-0.5 mx-2 text-sm text-red-600 bg-red-100 rounded-full">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
            <span>2.5%</span>
        </span>
        {/if}
    </div>
</div>

<style lang="postcss">
    .card {
        @apply p-5 bg-white rounded shadow-xl border-2 border-gray-100;
    }
</style>