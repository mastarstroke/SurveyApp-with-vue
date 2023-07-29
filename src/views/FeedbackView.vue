<template>
<PageComponent>
    
    <template v-slot:header>
        <div class="flex justify-between">
          <h1 class="text-3xl font-bold text-gray-900">Answers</h1>
        </div>
      </template>
      <div v-if="feedbackAnswers.loading" class="flex justify-center">Loading...</div>
<!-- component -->
    <div v-else>
        <section class="container px-4 mx-auto">
            <div class="flex flex-col">
                <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                            <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                <thead class="bg-gray-50 dark:bg-gray-800">
                                    <tr>
                                        <th scope="col" class="px-4 py-3.5 text-sm font-normal rtl:text-right text-gray-500 dark:text-gray-400">
                                            Survey
                                        </th>

                                        <th scope="col" class="px-4 py-3.5 text-sm font-normal rtl:text-right text-gray-500 dark:text-gray-400">
                                            Date/Time
                                        </th>
                                        <th scope="col" class="px-4 py-3.5 text-sm font-normal rtl:text-right text-gray-500 dark:text-gray-400">
                                            
                                        </th>

                                    </tr>
                                </thead>
                                <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                    <tr
                                        v-for="feedbackAnswer of feedbackAnswers.data"
                                        :key="feedbackAnswer.id" 
                                        :feedbackAnswer = "feedbackAnswer"
                                        >                  
                                        <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{{feedbackAnswer.survey.title}}</td>

                                        <td class="px-4 py-4 text-sm whitespace-nowrap">
                                            {{feedbackAnswer.end_date}}
                                        </td>
                                        <td class="px-4 py-4 text-sm whitespace-nowrap">
                                            <router-link
                                            :to="{ name: 'FeedbackAnswerView', params: { id: feedbackAnswer.id } }"
                                            class="flex py-2 px-4 border-transparent text-sm rounded-md
                                                text-indigo-500 hover:bg-indigo-700 hover:text-white transition-colors
                                                focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-5">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                View
                                            </router-link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <div class="flex justify-center mt-5">
            <nav class="relative z-0 inline-flex justify-center rounded-md shadow-sm" aria-label="Pagination">
            <!-- Current: z-10.bg-indigo-50.border-indigo-500.text-indigo-600 -->
                <a v-for="(link, i) of feedbackAnswers.links"
                    :key="i" 
                    :disabled="!link.url" 
                    href="#"
                    @click="getForPage($event, link)"
                    aria-current="page"
                    class="relative inline-flex items-center px-4 py-2 border text-sm font-medium whitespace-nowrap"
                    :class="[
                    link.active 
                    ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600'
                    : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50',
                    i === 0 ? 'rounded-1-md' : '',
                    i === feedbackAnswers.links.length - 1 ? 'rounded-r-md' : '',
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
    import { useRoute } from "vue-router";
    import PageComponent from '../components/PageComponent.vue';

    const route = useRoute();

    const feedbackAnswers = computed(() => store.state.feedbackAnswers);

    store.dispatch('getFeedbackAnswers', route.params.id);

    function getForPage(ev, link) {
    ev.preventDefault();
    if (!link.url || link.active) {
      return;
    }

    store.dispatch("getFeedbackAnswers", { url: link.url });
  }

   </script>    