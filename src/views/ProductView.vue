<template>
  <v-container>
    <div class="display-center" v-show="load">
      <v-progress-circular indeterminate></v-progress-circular>
    </div>
    <v-card class="mx-auto my-12" max-width="500">
      <v-img max-height="425" :src="data.image"></v-img>

      <v-card-item>
        <v-card-title
          ><div class="mul">
            {{ data.title }}
          </div>
        </v-card-title>

        <v-card-subtitle>
          <span class="mr-1">{{ data.category }}</span>
        </v-card-subtitle>
      </v-card-item>

      <v-card-text>
        <v-row align="center" class="mx-0">
          <v-rating
            :model-value="rate_1.rate"
            color="amber"
            density="compact"
            half-increments
            readonly
            size="small"
          ></v-rating>

          <div class="text-grey ms-4">
            {{ rate_1.rate }} ({{ rate_1.count }})
          </div>
        </v-row>

        <div class="my-4 text-subtitle-1">{{ data.price }} $</div>

        <div>
          {{ data.description }}
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<style>
.display-center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.mul {
  overflow-wrap: break-word;
}
</style>

<script>
// eslint-disable-next-line no-unused-vars
import axios from "axios";
export default {
  data() {
    return {
      data: [],
      rate_1: [],
      load: true,
    };
  },
  async created() {
    await this.getData();
    console.log(this.data.id);
  },
  mounted() {},
  methods: {
    async getData() {
      try {
        const resp = await axios.get(
          `${this.$store.getters.api_url}/products/${this.$route.params.id}`
        );
        this.data = resp.data;
        this.rate_1 = resp.data.rating;
        this.load = false;
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>