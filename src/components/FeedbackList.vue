<template>
 <div v-if="feedback.answers > 0" class="bg-white animate-fade-in-down shadow-md p4">
    <img 
        :src="feedback.image_url" 
        class="w-full h-48" alt="">
          <h3 class="text-xl font-bold mb-3">{{ feedback.title }}</h3>
          <div class="flex justify-between text-sm mb-1 mx-5">
            <div>Create Date:</div>
            <div>{{ feedback.created_at }}</div>
          </div>
          <div class="flex justify-between text-sm mb-1 mx-5">
            <div>Expire Date:</div>
            <div>{{ feedback.expire_date }}</div>
          </div>
          <div class="flex justify-between text-sm mb-1 mx-5">
            <div>Status:</div>
            <div v-if="feedback.status" class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>

              <h2 class="text-sm font-normal">
                  Active
              </h2>
            </div>
            <div v-else class="text-red-500">Draft</div>
            
          </div>
          <div class="flex justify-between text-sm mb-3 mx-5">
            <div>Question:</div>
              <div>{{ feedback.questions}}</div>
           </div>
          <div class="flex justify-between text-sm mb-3 mx-5">
            <div>Answers:</div>
              <div>{{ feedback.answers}}</div>
           </div>
           <div class="flex justify-between">

            <router-link
                :to="{ name: 'FeedbackView', params: { id: feedback.id } }"
                class="flex py-2 px-4 border-transparent text-sm rounded-md
                      text-indigo-500 hover:bg-indigo-700 hover:text-white transition-colors
                      focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                        View Answers
            </router-link>
           </div>
  </div>
</template>

<script setup>

defineProps({
    feedback: Object
});


</script>