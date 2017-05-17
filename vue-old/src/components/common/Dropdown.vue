<template>
    <div class="dropdown">
      <input class="input" placeholder="Name" v-model="search"></input>
      <div class="items">
        <a v-for="item in list" @click.stopPropagation="updateSearch(item)">{{ item.name }}</a>
      </div>
    </div>
</template>

<script>
  export default {
    /* Template Components */
    components: {},

    /* Component Props */
    props: ['options'],

    /* Template Data */
    data() {
      return {
        id: null,
        name: null,
        search: ''
      };
    },

    /* Computed Template Data */
    computed: {
      list: function() {
        let list = [];
        for (const item of this.options) {
          if (item.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1) {
            list.push(item);
          }
        }
        return list;
      }
    },

    /* Lifecycle Hooks */
    created() {},

    mounted() {},

    destroyed() {},

    /* Instance Methods */
    methods: {
      updateSearch: function(item) {
        this.id = item.id;
        this.name = item.name;
        this.search = item.name;
        this.$emit('input', item);
      }
    }
  };
</script>

<style scoped>
  .dropdown input {
    margin-bottom: 3px;
  }
  
  .dropdown {
    position: relative;
    display: inline-block;
  }
  
  .items {
    max-height: 200px;
    width: 100%;
    position: absolute;
    padding: 0;
    margin-left: 10px;
    margin-top: 5px;
    background: rgb(10, 30, 45);
    border-radius: 7px;
    overflow-y: auto;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;
    opacity: 0;
    display: block;
    z-index: 1;
  }
  
  .input:focus+.items {
    opacity: 1;
    height: inherit;
  }
  
  .input:focus+.items a {
    cursor: pointer;
  }
  
  .items a {
    box-sizing: border-box;
    padding: 10px;
    display: block;
    transition: all 0.3s ease-in-out;
    pointer-events: all;
  }
  
  .items a:hover {
    background: rgb(25, 65, 83)
  }
</style>
