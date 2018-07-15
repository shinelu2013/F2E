<template lang="pug">
  div#app
    page1(:stages="stages")
</template>

<script>
import Page1 from './components/Page1';

export default {
  name: 'app',
  components: {
    page1: Page1
  },
  data() {
    return {
      stages:[
        {
            id:1,
            status:'current'
        },
        {
            id:2,
            status:'wait'
        },
        {
            id:3,
            status:'wait'
        },{
            id:4,
            status:'wait'
        }
      ]      
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.init();
    });
  },
  methods: {
    init() {

    },
  },
  computed: {    
    
  },
  filters: {
    
  },
};
</script>

<style lang="scss">
@import './css/util';

body {
  width: $totalWidth;
  font-size: $baseFontSize;
  font-family: $baseFontFamily;
  margin: 0 15% 15% 15%;
}
</style>
