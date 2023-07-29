<template>
    <header class="bg-gray-100 shadow">
        <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 class="text-3xl font-bold tracking-tight text-gray-900">
                {{ title }}

                <p class="lg:hidden md:hidden text-lg text-gray-700 float-right"> {{ name }}</p>
            </h1>
            <slot name="header"></slot>
        </div>
    </header>
    <main>
        <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <slot></slot>
        </div>
    </main>
</template>

<script setup>
const props = defineProps({
    title: String,
    name: Object,
});
</script>

<script>

</script>