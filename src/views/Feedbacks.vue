
<template>
    <PageComponent>
      <template v-slot:header>
        <div class="flex justify-between">
          <h1 class="text-3xl font-bold text-gray-900">Feedbacks</h1>
        </div>
      </template>
      <div v-if="feedbacks.loading" class="flex justify-center">Loading...</div>
        <div v-else>
          <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
          <FeedbackList
          v-for="(feedback, ind) in feedbacks.data"
            :key="feedback.id" 
            :feedback="feedback"
            class="opacity-0 animate-fade-in-down"
            :style="{animationDelay: `${ind * 0.1}s`}"
            />
        </div>

        <div class="flex justify-center mt-5">
        <nav class="relative z-0 inline-flex justify-center rounded-md shadow-sm" aria-label="Pagination">
          <!-- Current: z-10.bg-indigo-50.border-indigo-500.text-indigo-600 -->
          <a v-for="(link, i) of feedbacks.links"
            :key="i" 
            :disabled="!link.url" 
            href="/#/Feedbacks"
            @click="getForPage($event, link)"
            aria-current="page"
            class="relative inline-flex items-center px-4 py-2 border text-sm font-medium whitespace-nowrap"
            :class="[
              link.active 
              ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600'
              : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50',
              i === 0 ? 'rounded-1-md' : '',
              i === feedbacks.links.length - 1 ? 'rounded-r-md' : '',
            ]"
            v-html="link.label">
            
          </a>
        </nav>
      </div>

      </div>
    </PageComponent>
   </template>
  
  
  <script setup>
  import store from "../store";
  import { computed } from "vue";
  import PageComponent from '../components/PageComponent.vue';
  import FeedbackList from '../components/FeedbackList.vue';

  const feedbacks = computed(() => store.state.feedbacks);

  store.dispatch('getFeedbacks')

//   function deleteFeedback(feedback) {
//     if (confirm(`Are you sure you want to delete this survey? Operation can't be undone!!`)) {
//       store.dispatch('deleteSurvey', survey.id)
//       .then(() => {
//         store.dispatch('getSurveys')
//       })
//     }
//   }

function getForPage(ev, link) {
    ev.preventDefault();
    if (!link.url || link.active) {
      return;
    }

    store.dispatch("getFeedbacks", { url: link.url });
  }
  </script>
  
    