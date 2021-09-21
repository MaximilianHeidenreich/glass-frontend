<script context="module">
    export async function load({ page: { params, query }, fetch }) {

        console.log(params);
        console.log(query);
		return {
			props: {
				pageID: params["pageID"],
				pageName: query.get("pageName") ? query.get("pageName") : "Invalid pageName"
			}
		};
	}
</script>
<script>
    import Navbar from "$lib/Navbar.svelte";
    import Footer from "$lib/Footer.svelte";
    import ChartCard from "$lib/cards/ChartCard.svelte";

    export let pageID;
	export let pageName;
</script>

<main>
    <Navbar/>
    <section id="base-info">
        <div class="content">
            <div class="header">
                <div style="flex: 3;">
                    <h1>{pageName}</h1>
                    <small>PageID: {pageID}</small>
                </div>
                <div style="flex: 1;">
                    <h1>Details</h1>
                    <ul class="details">
                        <li>
                            <span>Views:</span>
                            <span>243.450</span>
                        </li>
                        <li>
                            <span>Events/day:</span>
                            <span>243.450/day</span>
                        </li>
                        <li>
                            <span>Data size:</span>
                            <span>23MB</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="cards">
                <ChartCard title="Visits/day" value="30.000" change={0.732}/>
                <ChartCard title="Tests/day" value="20" change={-0.332}/>
                <ChartCard title="Visits/day" value="30.000" change={0.732}/>
                <ChartCard title="Tests/day" value="20" change={-0.332}/>
            </div>
        </div>
    </section>
    <section id="details">

    </section>
    <Footer/>
</main>

<style lang="postcss">
    #base-info .content .header {
        @apply grid gap-7 lg:grid-cols-2;
    }
    #base-info .content .header div h1 {
        @apply text-4xl font-extrabold mb-6;
    }
    #base-info .content .header div small {
        @apply text-sm font-medium mb-8 text-gray-400;
    }
    #base-info .content .header ul.details {
        
    }
    #base-info .content .header ul.details li {
        @apply flex justify-between;
    }
    #base-info .content .header ul.details li span:nth-child(1) {
        @apply text-gray-500 font-mono font-medium uppercase;
    }
    #base-info .content .header ul.details li span:nth-child(2) {
        @apply text-gray-400 font-mono font-normal uppercase;
    }
    #base-info .content .cards {
        @apply relative top-24 grid gap-7 sm:grid-cols-2 lg:grid-cols-4;
    }
    
    #details {
        @apply bg-gray-100;
        height: 60vh;
    }
</style>
