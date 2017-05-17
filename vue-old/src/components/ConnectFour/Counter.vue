<template>
    <div class="counter" :style="style"></div>
</template>

<script>
  /* Component Imports */
  
  export default {
    /* Template Components */
    components: {},

    /* Template Props */
    props: ['color', 'hoverColor', 'fillColour', 'click'],

    /* Template Data */
    data() {
      return {};
    },

    /* Computed Template Data */
    computed: {},

    /* Lifecycle Hooks */
    created() {},

    mounted() {},

    destroyed() {},

    /* Instance Methods */
    methods: {}
  };
</script>

<style scoped lang="scss">
  .counter {
      border: 3px solid black;
      border-radius: 50px;
      height: 60px;
      width: 60px;
      margin: 10px;
      background: white;
      display: inline-block;
      cursor: pointer;
      transition: all 0.5s ease-in-out;
  }
  
  .p1 {
      background: rgb(200, 20, 20);
  } 
  
  .counter:hover {
    background: rgb(200, 20, 20);
  }
</style>
