<footer>
    <div class="content">
        <a href="/" class="noline">
            <svg class="w-12 h-12 " xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#874efe" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M128,32a96,96,0,0,1,0,192" opacity="0.2"></path><circle cx="128" cy="128" r="96" fill="none" stroke="#874efe" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle><line x1="128" y1="32" x2="128" y2="224" fill="none" stroke="#874efe" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line></svg>
        </a>
        <div class="links">
            <div class="left">
                <ul>
                    <li class="font-semibold text-[14px] text-gray-600">Open Source</li>
                    <li class="pt-1.5 text-xs "><a class="text-gray-900" href="/about">GitHub Repository</a></li>
                    <li class="pt-1.5 text-xs "><a class="text-gray-900" href="/about">Collected data</a></li>
                    <li class="pt-1.5 text-xs "><a class="text-gray-900" href="/about">Contributors</a></li>
                    <li class="pt-1.5 text-xs "><a class="text-gray-900" href="/about">License</a></li>
                </ul>
                <ul>
                    <li class="font-semibold text-[14px] text-gray-600">Product</li>
                    <li class="pt-1.5 text-xs "><a class="text-gray-900" href="/about">Getting started</a></li>
                    <li class="pt-1.5 text-xs "><a class="text-gray-900" href="/about">Documentation</a></li>
                    <li class="pt-1.5 text-xs "><a class="text-gray-900" href="/about">Blog</a></li>
                </ul>
                <ul>
                    <li class="font-semibold text-[14px] text-gray-600">Company</li>
                    <li class="pt-1.5 text-xs "><a class="text-gray-900" href="/about">About Us</a></li>
                    <li class="pt-1.5 text-xs "><a class="text-gray-900" href="/about">Careers</a></li>
                    <li class="pt-1.5 text-xs "><a class="text-gray-900" href="/about">Blog</a></li>
                </ul>
            </div>
            <div class="right">
                <p>Made with &#128156; by <a href="https://www.maximilian-heidenreich.de">Maximilian Heidenreich</a></p>
            </div>
        </div>
    </div>
</footer>

<style lang="postcss">
    footer {
        @apply pt-12 pb-16 text-gray-600 bg-gray-50;
    }
    footer  svg {
        @apply mb-6;
    }
    footer .links {
        @apply w-full flex flex-col md:flex-row gap-16 md:gap-48 justify-between items-center;
    }
    footer .links .left {
        @apply w-full flex flex-wrap gap-16 justify-between;
    }
    footer .links .left ul {
        
    }
    footer .links .left ul :first-child {
        @apply mb-1;
    }
    footer .links .right {
        @apply flex-col text-center;
        min-width: fit-content;
    }
</style>