<script>
    import { goto } from "$app/navigation";

    import Navbar from "$lib/Navbar.svelte";
    import Footer from "$lib/Footer.svelte";
    import Banner from "$lib/Banner.svelte";

    async function handleSubmit(event) {
        console.log(event);
        console.log(event.target);
        console.log(event.target.urlInput.value);

        let hostname = new URL(event.target.urlInput.value).hostname;
        const msgBuffer = new TextEncoder('utf-8').encode(hostname);
        const hashBuffer = await window.crypto.subtle.digest('SHA-256', msgBuffer);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        let pageID = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        goto(`/view/${pageID}?pageName=${encodeURIComponent(hostname)}`);
    }
    function validateInput(event) {
       let textbox = event.target;
       if (textbox.value === '') {
            textbox.setCustomValidity('Required url');
        } else if (textbox.validity.typeMismatch){
            textbox.setCustomValidity('please enter a valid url address');
        } else {
           textbox.setCustomValidity('');
        }
        return true;
    }
</script>

<!--<Banner/>-->

<main>
    <Navbar/>

    <section id="search">
        <div class="gr-lt"></div>
        <div class="gr-rt"></div>
        <div class="content">
            <div id="title">
                <h1>Analytics for everyone.</h1>
                <h2>
                    <span class="glass">Glass</span> is a analytics tool for websites that respects your users privacy.
                </h2>
            </div>
            <form
                on:submit|preventDefault="{handleSubmit}"
                on:invalid={validateInput}
                on:changed={validateInput}
                on:input={validateInput}
            >
                <div class="relative text-gray-600 w-full max-w-lg">
                    <input type="url" name="urlInput" placeholder="https://glass.io" class="bg-white shadow-xl h-10 px-5 pl-12 rounded-xl text-md focus:outline-none">
                    <span class="absolute left-0 top-0 mt-5 ml-5">
                        <svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve" width="512px" height="512px">
                        <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
                        </svg>
                    </span>
                </div>
                <button class="btn primary" type="submit">View analytics</button>
            </form>
        </div>
    </section>
    <section id="showcases">
        <div class="content">
            <div class="showcase">
                <div class="info">
                    <h3>Easy-to-use</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
                <img src="https://via.placeholder.com/350x300" alt="">
            </div>
            <div class="showcase alt">
                <div class="info">
                    <h3>Easy-to-use</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
                <img src="https://via.placeholder.com/350x300" alt="">
            </div>
            <div class="showcase">
                <div class="info">
                    <h3>Easy-to-use</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
                <img src="https://via.placeholder.com/350x300" alt="">
            </div>
            <div class="showcase alt">
                <div class="info">
                    <h3>Easy-to-use</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
                <img src="https://via.placeholder.com/350x300" alt="">
            </div>
        </div>
    </section>
    <section id="stats">
        <div class="content">
            <div class="stat">
                <h3>30.000</h3>
                <h4>Unique events handled.</h4>
            </div>
            <div class="stat">
                <h3>250</h3>
                <h4>Websites using <span class="glass">Glass</span>.</h4>
            </div>
            <div class="stat">
                <h3>12.000</h3>
                <h4>Privacy adjustments.</h4>
            </div>
            <div class="stat">
                <h3>134MB</h3>
                <h4>Data collected.</h4>
            </div>
        </div>
    </section>
    <section id="roadmap">
        <div class="content">
            <div>
                <h2>Roadmap</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <a href="">Contribute</a>
            </div>
            <div class="timeline">
                <ul>
                    <li>
                        <h3>September 2021</h3>
                        <ul>
                            <li>Do thing 1</li>
                            <li>Do thing 2</li>
                        </ul>
                    </li>
                    <li>
                        <h3>December 2021</h3>
                        <ul>
                            <li>Do other things</li>
                            <li>I dont know</li>
                        </ul>
                    </li>
                    <li>
                        <h3>February 2022</h3>
                        <ul>
                            <li>Do other things</li>
                            <li>I dont know</li>
                        </ul>
                    </li>
                    <li>
                        <h3>April 2022</h3>
                        <ul>
                            <li>Do other things</li>
                            <li>I dont know</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    <Footer/>
</main>

<style lang="postcss">
    .gr-lt {
        position: absolute;
        z-index: -1;
        width: 450px;
        height: 250px;
        background: radial-gradient(circle at -33% 28%, rgba(0,0,255,1), rgba(0,0,0,0)), url("data:image/svg+xml,%3Csvg viewBox='0 0 1 1' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3.36' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        filter: contrast(110%) brightness(1000%) blur(25px);
    }
    .gr-rt {
        position: absolute;
        z-index: -1;
        right: 0;
        top: 0;
        width: 350px;
        height: 250px;
        background: radial-gradient(circle at 125% 31%, rgba(16,0,255,1), rgba(0,0,0,0.17)), url("data:image/svg+xml,%3Csvg viewBox='0 0 1 1' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3.26' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        filter: contrast(110%) brightness(950%) blur(30px);
    }
    #search {
        position: relative;
        text-align: center;
        min-height: 40%;
    }
    #search .content {
        @apply pb-0;
    }
    #search #title {
        @apply max-w-3xl;
        margin: 0 auto;
    }
    #search h1 {
        @apply text-8xl font-extrabold mb-6;
    }
    #search h2 {
        @apply text-3xl mb-8 text-gray-500;
    }
    #search form {
        @apply w-full;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        gap: 1em;
        position: relative;
        top: 26px;
    }
    #search form input {
        min-width: 100%;
        @apply h-14 ;
        @apply border-2 border-gray-100;
    }
    #showcases {
        @apply bg-gray-100;
    }
    #showcases .content {
        @apply pt-36;
    }
    #showcases .content .showcase {
        @apply flex justify-between items-center mb-28;
    }
    #showcases .content .showcase.alt :nth-child(1) {
        @apply order-2;
    }
    #showcases .content .showcase .info {
        max-width: 30em;
    }
    #showcases .content .showcase .info h3 {
        @apply text-4xl font-extrabold mb-6;
    }
    #showcases .content .feature .info p {
        @apply text-xl mb-8 text-gray-500;
    }
    #stats {
        @apply bg-gray-900;
    }
    #stats .content {
        @apply grid gap-20 sm:grid-cols-2 lg:grid-cols-4;/*flex justify-between;*/
    }
    #stats .content .stat {
        @apply text-center;
    }
    #stats .content .stat h3 {
        @apply text-5xl mb-4 font-bold text-transparent bg-clip-text bg-gradient-to-br;
    }
    #stats .content .stat:nth-child(1) h3 {
        @apply from-blue-300 to-indigo-500;
    } 
    #stats .content .stat:nth-child(2) h3 {
        @apply from-yellow-300 to-yellow-600;
    } 
    #stats .content .stat:nth-child(3) h3 {
        @apply from-purple-300 to-purple-600;
    } 
    #stats .content .stat:nth-child(4) h3 {
        @apply from-white to-gray-400;
    } 
    #stats .content .stat h4 {
        @apply text-xl font-semibold text-white;
    }
    #roadmap {
        @apply bg-white;
    }
    #roadmap .content {
        @apply flex flex-col md:flex-row gap-16 justify-between;
    }
    #roadmap .content > div:first-child {
        flex: 2;
        max-width: 30em;
    }
    #roadmap .content > div:last-child {
        flex: 1;
        @apply text-right;
    }
    #roadmap .content > div:first-child h2 {
        @apply text-5xl font-extrabold mb-6;
    }
    #roadmap .content .timeline ul {
        @apply ml-4 mb-4;
    }
    #roadmap .content .timeline ul h3 {
        @apply text-2xl font-extrabold mb-2;
    }
</style>