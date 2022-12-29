<template>
  <v-container>
    <div class="display-center" v-show="load">
      <v-progress-circular indeterminate></v-progress-circular>
    </div>

    <v-row class="mb-6 display-center" dense>
      
      <div v-for="item in data" :key="item.id">
      <v-expand-transition>
        <v-col cols="auto">
          <Product
            :img="item.image"
            :p_name="item.title"
            :p_price="item.price"
            :p_id="item.id"
          />
        </v-col>
      </v-expand-transition>
      </div>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import Product from "@/components/Product.vue";
import axios from "axios";
export default {
  name: "HomeView",
  components: {
    Product,
  },
  data() {
    return {
      num: 6,
      data: [],
      load: true,
    };
  },
  created() {
    this.getProduct();
  },
  methods: {
    async getProduct() {
      try {
        const res = await axios.get(`${this.$store.state.api_url}/products`);
        this.data = res.data;
        this.load = false;
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>

<style>
.display-center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
