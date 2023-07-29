import {createStore} from "vuex";
import axiosClient from "../axios";


const tmpSurveys = [
    // {
    //     id: 100,
    //     title: "TheCodeholic Youtube channel content",
    //     slug: "TheCodeholic-youtube-channel-content",
    //     status: "draft",
    //     image: "https://pbs.twimg.com/profile_images/11180595350030172221/9ZwEYqj2_400x400.png",
    //     description: "My name is James. <br>I am a Web developer with 2+ years of experience, free educational content",
    //     created_at: "2021-12-20 18:00:00",
    //     updated_at: "2021-12-20 18:00:00",
    //     expire_date: "2021-12-20 18:00:00",
    //     questions: [
    //         {
    //             id: 1,
    //             type: "select",
    //             question: "From which contry are you?",
    //             description: null,
    //             data: {
    //                 options: [
    //                     {uuid: "f8af96f2-1d80-4632-9e9e-b560670e52ea", text: "USA"},
    //                     {
    //                         uuid: "201c1ff5-23c9-42f9-bfb5-bbc850536440",
    //                         text: "Georgia",
    //                     },
    //                     {
    //                         uuid:"b5c09733-a49e-460a-ba8a-526863010729",
    //                         text: "Germany",
    //                     },
    //                     { uuid: "2abf1cee-f5fb-427c-a220-b5d159ad6513", text: "India" },
    //                     { uuid: "8d14341b-ec2b-4924-9aea-bda6a53b51fc", text: "United Kingdom", },
    //                 ],
    //             },
    //         },
    //         {
    //             id: 2,
    //             type: "checkbox",
    //             question: "Which Language videos do you want to see on my channel?",
    //             description:  "I am a stubbeorn developer around anywhere in the world",
    //             data: {
    //                 options: [
    //                     {uuid: "f8af96f2-1d80-4632-9e9e-b560670e52ea", text: "Javascipt"},
    //                     {
    //                         uuid: "201c1ff5-23c9-42f9-bfb5-bbc850536440",
    //                         text: "PHP",
    //                     },
    //                     {
    //                         uuid:"b5c09733-a49e-460a-ba8a-526863010729",
    //                         text: "Germany",
    //                     },
    //                     { uuid: "2abf1cee-f5fb-427c-a220-b5d159ad6513", text: "HTML + CSS" },
    //                     { uuid: "8d14341b-ec2b-4924-9aea-bda6a53b51fc", text: "All of the above", },
    //                 ],
    //             },
    //         },
    //         {
    //             id: 3,
    //             type: "checkbox",
    //             question: "Which PHP framework videos do you want to see on my channel?",
    //             description:  "I am a stubbeorn developer around anywhere in the world",
    //             data: {
    //                 options: [
    //                     {uuid: "f8af96f2-1d80-4632-9e9e-b560670e52ea", text: "Laravel"},
    //                     {
    //                         uuid: "201c1ff5-23c9-42f9-bfb5-bbc850536440",
    //                         text: "Codeigniter",
    //                     },
    //                     {
    //                         uuid:"b5c09733-a49e-460a-ba8a-526863010729",
    //                         text: "Symfony",
    //                     },
    //                 ],
    //             },
    //         },
    //         {
    //             id: 4,
    //             type: "radio",
    //             question: "Which framework do you love most?",
    //             description:  "I am a stubbeorn developer around anywhere in the world",
    //             data: {
    //                 options: [
    //                     {uuid: "f8af96f2-1d80-4632-9e9e-b560670e52ea", text: "Laravel 5"},
    //                     {
    //                         uuid: "201c1ff5-23c9-42f9-bfb5-bbc850536440",
    //                         text: "Laravel 6",
    //                     },
    //                     {
    //                         uuid:"b5c09733-a49e-460a-ba8a-526863010729",
    //                         text: "Laravel 7",
    //                     },
    //                     { uuid: "2abf1cee-f5fb-427c-a220-b5d159ad6513", text: "Laravel 8" },
    //                 ],
    //             },
    //         },
    //         {
    //             id: 5,
    //             type: "checkbox",
    //             question: "What type of projects do you want to see on my channel built with laravel?",
    //             description:  "I am a stubbeorn developer around anywhere in the world",
    //             data: {
    //                 options: [
    //                     {uuid: "f8af96f2-1d80-4632-9e9e-b560670e52ea", text: "RESP API"},
    //                     {
    //                         uuid: "201c1ff5-23c9-42f9-bfb5-bbc850536440",
    //                         text: "E-commerce",
    //                     },
    //                     {
    //                         uuid:"b5c09733-a49e-460a-ba8a-526863010729",
    //                         text: "Real estate",
    //                     },
    //                     { uuid: "2abf1cee-f5fb-427c-a220-b5d159ad6513", text: "All of the above" },
    //                 ],
    //             },
    //         },
    //         {
    //             id: 6,
    //             type: "text",
    //             question: "What your favourite Youtube channel?",
    //             description:  null,
    //             data: {},
    //         },
    //         {
    //             id: 7,
    //             type: "textarea",
    //             question: "What do you think about Masterstroke channel?",
    //             description:  "Write your honest opinion. Everything is anonymous.",
    //             data: {},
    //         },
    //     ],
    // },
    // {
    //     id: 200,
    //     title: "Laravel 8",
    //     slug: "Laravel-8",
    //     status: "active",
    //     image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/laravel.svg/1200px-laravel.svg",
    //     description: "Laravel is a web application framework with expressive, elegant syntax.",
    //     created_at: "2021-12-20 18:00:00",
    //     updated_at: "2021-12-20 18:00:00",
    //     expire_date: "2021-12-20 18:00:00",
    //     questions: [],
    // },
    // {
    //     id: 300,
    //     title: "Vue 3",
    //     slug: "vuel-3",
    //     status: "active",
    //     image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.jpg",
    //     description: "Vue (pronounced /vju:/, like view) is a progressive framework for building us",
    //     created_at: "2021-12-20 18:00:00",
    //     updated_at: "2021-12-20 18:00:00",
    //     expire_date: "2021-12-20 18:00:00",
    //     questions: [],
    // },
    // {
    //     id: 400,
    //     title: "Tailwind 3",
    //     slug: "tailwind-3",
    //     status: "active",
    //     image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo_2.svg/2048px-Tailwind.jpg",
    //     description: "A utility-first CSS framework packed with classes like <code>flex</code>",
    //     created_at: "2021-12-20 18:00:00",
    //     updated_at: "2021-12-20 18:00:00",
    //     expire_date: "2021-12-20 18:00:00",
    //     questions: [],
    // },
];

const store = createStore({
    state: {
        user: {
            data: {},
            token: sessionStorage.getItem("TOKEN"),
        },
        dashboard: {
            loading: false,
            data: {}
        },
        currentSurvey: {
            loading:false,
            data: {}
        },
        surveys: {
            loading: false,
            links: [],
            data: []
        },
        feedbacks: {
            loading: false,
            links: [],
            data: []
        },
        feedbackAnswers: {
            loading: false,
            links: [],
            data: []
        },
        feedbackQuestionAns: {
            loading: false,
            data: []
        },
        // surveys: [...tmpSurveys],
        questionTypes: ["text", "select", "radio", "checkbox", "textarea"],
        notification: {
            show: false,
            type: null,
            message: null
        }
    },
    getters: {},
    actions: {
        getDashboardData({commit}) {
            commit('dashboardLoading', true)
            return axiosClient.get(`/dashboard`)
            .then((res) => {
                commit('dashboardLoading', false)
                commit('setDashboardData', res.data)
                return res;
            })
            .catch(error => {
                commit('dashboardLoading', false)
                return error;
            })
        },
        getFeedbacks({commit}, {url = null} = {}) {
            url = url || '/feedback'
            commit('setFeedbacksLoading', true)
            return axiosClient.get(url).then((res) => {
                commit('setFeedbacksLoading', false)
                commit("setFeedbacks", res.data);
                return res;
            });
        },
        getFeedbackAnswers({commit}, id, {url = null} = {} ) {
            url = url
            commit('setFeedbackAnswerLoading', true)
            return axiosClient.get(`/feedbackAnswer/${id}` || url)
            .then((res) => {
                commit('setFeedbackAnswerLoading', false)
                commit("setFeedbackAnswer", res.data);
                return res;
            });
        },
        getFeedbackQuestionAns({ commit }, id) {
            commit("setFeedbackQuestionAnsLoading", true);
            return axiosClient
                .get(`/FeedbackQuestionAns/${id}`)
                .then((res) => {
                    commit("setFeedbackQuestionAns", res.data);
                    commit("setFeedbackQuestionAnsLoading", false);
                    return res;
                })
                .catch((err) => {
                    commit("setFeedbackQuestionAnsLoading", false);
                    throw err;
                });
        },
        getSurvey({commit}, id) {
            commit("setCurrentSurveyLoading", true);
            return axiosClient
            .get(`/survey/${id}`)
            .then((res) => {
                commit("setCurrentSurvey", res.data);
                commit("setCurrentSurveyLoading", false);
                return res;
            })
            .catch((err) => {
                commit("setCurrentSurveyLoading", false);
                throw err;
            });
        },
        saveSurvey({ commit }, survey) {
            delete survey.image_url;
            let response;
            if(survey.id) {
                response = axiosClient
                    .put(`/survey/${survey.id}`, survey)
                    .then((res) => {
                        commit("setCurrentSurvey", res.data);
                        return res;
                    });
            } else {
                response = axiosClient.post("/survey", survey).then((res) => {
                    commit("setCurrentSurvey", res.data);
                    return res;
                });
            }

            return response;
        },
        deleteSurvey({}, id) {
            return axiosClient.delete(`/survey/${id}`);
        },
        getSurveys({commit}, {url = null} = {}) {
            url = url || '/survey'
            commit('setSurveysLoading', true)
            return axiosClient.get(url).then((res) => {
                commit('setSurveysLoading', false)
                commit("setSurveys", res.data);
                return res;
            });
        },
        getSurveyBySlug({ commit }, slug) {
            commit("setCurrentSurveyLoading", true);
            return axiosClient
                .get(`/survey-by-slug/${slug}`)
                .then((res) => {
                    commit("setCurrentSurvey", res.data);
                    commit("setCurrentSurveyLoading", false);
                    return res;
                })
                .catch((err) => {
                    commit("setCurrentSurveyLoading", false);
                    throw err;
                });
        },
        saveSurveyAnswer({ commit }, {surveyId, answers}) {
            return axiosClient.post(`/survey/${surveyId}/answer`, {answers});
        },
        register({ commit }, user) {
           return axiosClient.post('/register', user)
            .then(({data}) => {
                commit('setUser', data);
                return data;
            })
        },

        login({ commit }, user) {
            return axiosClient.post('/login', user)
            .then(({data}) => {
                commit('setUser', data);
                return data;
            })
        },
        logout({ commit }) {
            return axiosClient.post('/logout')
            .then(response => {
                commit('logout')
                return response;
            })
        }
    },
    mutations: {
        dashboardLoading: (state, loading) => {
            state.dashboard.loading = loading;
        },
        setDashboardData: (state, data) => {
            state.dashboard.data = data;
        },
        setCurrentSurveyLoading: (state, loading) => {
            state.currentSurvey.loading = loading;
        },
        setSurveysLoading: (state, loading) => {
            state.surveys.loading = loading;
        },
        setCurrentSurvey: (state, survey) => {
            state.currentSurvey.data = survey.data;
        },
        setSurveys: (state, surveys) => {
            state.surveys.links= surveys.meta.links;
            state.surveys.data = surveys.data;
        },
        setFeedbacksLoading: (state, loading) => {
            state.feedbacks.loading = loading;
        },
        setFeedbacks: (state, feedbacks) => {
            state.feedbacks.links= feedbacks.meta.links;
            state.feedbacks.data = feedbacks.data;
        },
        setFeedbackAnswerLoading: (state, loading) => {
            state.feedbackAnswers.loading = loading;
        },
        setFeedbackAnswer: (state, feedbackAnswers) => {
            state.feedbackAnswers.links= feedbackAnswers.meta.links;
            state.feedbackAnswers.data = feedbackAnswers.data;
        },
        setFeedbackQuestionAnsLoading: (state, loading) => {
            state.feedbackQuestionAns.loading = loading;
        },
        setFeedbackQuestionAns: (state, feedbackQuestionAns) => {
            state.feedbackQuestionAns.data = feedbackQuestionAns.questionAnswers;
        },
        logout: (state) => {
            state.user.token = null;
            state.user.data = {};
        },
        setUser: (state, userData) => {
            state.user.token = userData.token;
            state.user.data = userData.user;
            sessionStorage.setItem('TOKEN', userData.token);
        },
        notify: (state, {message, type}) => {
            state.notification.show = true;
            state.notification.type = type;
            state.notification.message = message;
            setTimeout(() => {
                state.notification.show = false;
            }, 3000)
        }
    },
    modules: {}
});

export default store;