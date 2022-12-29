import { createStore } from 'vuex'

export default createStore({
  state: {
    api_url: 'https://fakestoreapi.com'
  },
  getters: {
    api_url: (state) => state.api_url
  },
})
