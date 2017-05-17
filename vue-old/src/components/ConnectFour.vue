<template>
    <div class="container">
      <div class="columns" v-for="i in counterWidth" :key="i">
        <Counter v-for="j in counterHeight" :key="j"></Counter>
      </div>
    </div>
</template>

<script>
  /* Component Imports */
  import Counter from '@/components/ConnectFour/Counter';

  export default {
    /* Template Components */
    components: {
      Counter
    },

    /* Template Props */
    props: {
      counterWidth: {
        default: 4,
        type: Number
      },
      counterHeight: {
        default: 4,
        type: Number
      }
    },

    /* Template Data */
    data() {
      return {};
    },

    /* Computed Template Data */
    computed() {},

    /* Lifecycle Hooks */
    created() {},

    mounted() {},

    destroyed() {},

    /* Instance Methods */
    methods: {}
  };
</script>

<style scoped lang="scss">
  .container {
    position: relative;
    margin: 20px auto;
    border: 5px solid black;
    border-radius: 10px;
    min-height: 80px;
    background-color: rgba(30, 120, 250, 0.9);
    padding: 10px;
    display: inline-block;
  }
</style>
