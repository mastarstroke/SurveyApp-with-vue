<template>
    <div class="py-5 px-8">
       <div v-if="loading" class="flex justify-center">Loading...</div> 
        <div v-else class="container mx-auto">

            <div>
              <hr class="my-3" />
              <div v-for="(answers, ind) of feedbackQuestionAns">
                <AnswerViewer
                :answers="answers"
                :index="ind"
                />
              </div>
              
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import AnswerViewer from "../components/viewer/AnswerViewer.vue";

const route = useRoute();
const store = useStore();

const loading = computed(() => store.state.feedbackQuestionAns.loading);
const feedbackQuestionAns = computed(() => store.state.feedbackQuestionAns.data);

store.dispatch("getFeedbackQuestionAns", route.params.id);

</script>

<style></style>