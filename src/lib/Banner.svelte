<div class="gs_container">
    <div class="gs_configure">
        <h1>Configuration</h1>
        <p>
            Here you can configure what data you want to provide.
            Keep in mind, that we do not gather any personal data like your IP address
            The site admin has already selected these settings:
        </p>
        <section>
            <h2>Fingerprint</h2>
            <h3>Is used to keep track of unique visitors.</h3>
        </section>
        <section>
            <h2>Device</h2>
            <h3>Is used to collect device data which can be used to improve the site.</h3>
        </section>
        <div class="gs_configure_controls">
            <button class="btn primary">Apply</button>
            <button class="px-2 py-1 rounded-md text-normal text-gray-400 font-medium border-2 border-gray-200 hover:bg-gray-50 focus:outline-none focus:ring transition">Revert to default</button>
        </div>
    </div>
    <div class="gs_banner">
        <div class="gs_info">
            <p>
                This website uses <i>Glass</i>, a privacy friendly analytics tool.
                By clicking "Accept", the following data fill be provided for analytic purposes:
                <!--<a href="">Learn more</a>-->
            </p>
            <ul>
                <li><b>Fingerprint</b></li>
                <li><b>Timing</b></li>
                <li><b>Device</b></li>
            </ul>
        </div>
        <div class="gs_controls">
            <button class="btn primary">Accept</button>
            <button class="px-4 py-2 rounded-md text-lg text-gray-400 font-medium border-2 border-gray-200 hover:bg-gray-50 focus:outline-none focus:ring transition">Configure</button>
        </div>
    </div>
</div>

<!--
<div class="max-w-screen-lg mx-auto fixed bg-white inset-x-5 p-5 bottom-40 rounded-lg drop-shadow-2xl flex gap-4 flex-wrap md:flex-nowrap text-center md:text-left items-center justify-center md:justify-between">
    <div class="w-full">This website uses cookies to ensure you get the best experience on our website. 
        <a href="#" class="text-indigo-600 whitespace-nowrap  hover:underline">Learn more</a></div>
    <div class="flex gap-4 items-center flex-shrink-0">
     
      <button class="text-indigo-600 focus:outline-none hover:underline">Decline</button>
      <button class="bg-indigo-500 px-5 py-2 text-white rounded-md hover:bg-indigo-700 focus:outline-none">Allow Coockies</button>
    </div>
</div>
-->

<style lang="postcss">
    .gs_container {
        @apply w-full fixed bottom-0 z-50 p-8;
    }
    .gs_banner {
        @apply bg-white shadow-xl rounded-lg;
        @apply px-6 py-4 flex flex-col md:flex-row gap-8 justify-between items-center;
        max-width: 50em;
    }
    .gs_info {
        @apply flex-col gap-2 justify-between;
    }
    .gs_info ul {
        @apply mt-2 flex gap-6;
    }
    .gs_banner .gs_controls {
        @apply flex gap-4 self-end md:self-auto;
    }
    .gs_configure {
        @apply bg-white shadow-xl rounded-lg;
        @apply mb-8 p-6;
        max-width: 50em;
    }
    .gs_configure h1 {
        @apply text-3xl font-bold mb-3;
    }
    .gs_configure > p {
        @apply text-base font-semibold text-gray-600;
    }
    .gs_configure > section {
        @apply my-4 p-4 pt-3 border-2 border-gray-100 bg-gray-50 rounded-md;
    }
    .gs_configure > section h2 {
        @apply text-xl font-bold mb-2;
    }
    .gs_configure > section h3 {
        @apply text-base font-semibold mb-3 text-gray-600;
    }
    .gs_configure .gs_configure_controls {
        @apply mt-4 flex gap-4 justify-end;
    }
</style>