<template>
    <fieldset class="mb-4">
        <div>
            <legend class="text-left font-medium text-gray-900">
                {{ index + 1 }}. {{ answers.question }}
            </legend>
        </div>
        <div class="mt-3">
                <div 
                v-for="(option, ind) of answers.data.options"
                :key="option.uuid"
                class="flex items-center">
                <label 
                for="otpion.uuid"
                class="ml-3 block text-sm font-medium text-gray-700">
                    {{ option.text }}
                </label>
            </div>
        </div>
        <hr class="mb-3">
        <div class="mt-3 flex items-center">
            <p class="ml-3 block text-sm font-medium text-gray-700">Answer: {{ answers.answer }} </p>
        </div>
    </fieldset>
</template>

<script setup>
const { answers, index, modelValue } = defineProps({
    answers: Object,
    index: Number,
});



</script>

<style></style>