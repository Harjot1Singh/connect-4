<template>
    <div class="container">
      <Heading>Connect 4</Heading>
      <div class="columns" id="board">
        <ConnectFour></ConnectFour>
      </div>
      <div class="columns">
        <div class="column">
        </div>
        <div class="column">
        </div>
        <div class="column">
        </div>
      </div>
    </div>
</template>

<script>
  /* Component Imports */
  import Heading from '@/components/common/Heading';
  import ConnectFour from '@/components/ConnectFour';
  
  export default {
    /* Template Components */
    components: {
      Heading,
      ConnectFour
    },

    /* Template Props */
    props: [],

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
#board {
  position: relative;
}
</style>
