<template>
  <v-card class="mx-auto">
    <div class="d-flex justify-space-between">
      <div>
        <v-card-title-text-overflow>
          <div class="el">
            {{ p_name }}
          </div>
        </v-card-title-text-overflow>

        <v-card-subtitle>{{ p_price }}$</v-card-subtitle>

        <v-card-actions>
          <router-link :to="`/product/${p_id}`">
            <v-btn class="ml-2" variant="outlined" size="small"> Detail </v-btn>
          </router-link>
        </v-card-actions>
      </div>

      <v-avatar class="ma-3" size="125" rounded="0">
        <v-img :src="img"></v-img>
      </v-avatar>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "ProDuct",
  props: {
    img: {
      type: String,
    },
    p_name: {
      type: String,
    },
    p_price: {
      type: String,
    },
    p_id: {
      type: String,
    },
  },
};
</script>

<style>
.el {
  white-space: nowrap;
  width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>