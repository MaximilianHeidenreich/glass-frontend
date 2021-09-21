<script>
    import "../app.postcss";
</script>
<slot></slot>

<style lang="postcss" global>
    ::-moz-selection {
        @apply bg-purple-300 text-pink-500;
    }
    ::selection {
        @apply bg-purple-300 text-pink-500;
    }
    a {
        text-decoration: none;
        position: relative;
        @apply text-gray-900;
    }
    a:hover {
        @apply text-gray-800;
        transition: 0.4s;
    }
    a:before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0%;
        border-bottom: 2px solid #3366FF;
        @apply border-purple-600;
        transition: 0.4s;
    }
    a:hover:before {
        width: 100%;
    }
    a.noline:hover:before {
        width: 0;
    }
    a.btn:hover:before {
        width: 0;
    }

    p {
        @apply mb-2;
    }

    .glass {
        font-weight: inherit;
        @apply italic text-transparent bg-clip-text bg-gradient-to-br from-blue-100 to-blue-100;
    }

    .btn {
        @apply px-4 py-2 rounded-md text-lg font-medium border-0 focus:outline-none focus:ring transition;
    }
    .btn.primary {
        @apply text-white bg-purple-600 hover:bg-purple-700 active:bg-purple-800 focus:ring-red-300;
    }


    section {
        width: 100%;
    }
    .content {
        margin: 0 auto;
        @apply relative max-w-6xl px-8 py-24;
    }
</style>