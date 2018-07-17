<template lang="pug">
  div#app
    div.game
</template>

<script>
import * as PIXI from 'pixi.js';

export default {
  name: 'app',
  components: {},
  data() {
    return {      
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.init();
    });
  },
  methods: {
    init() {
      // The application will create a renderer using WebGL, if possible,
      // with a fallback to a canvas render. It will also setup the ticker
      // and the root stage PIXI.Container
      const app = new PIXI.Application();

      // The application will create a canvas element for you that you
      // can then insert into the DOM
      document.querySelector(".game").appendChild(app.view);

      // app.renderer.view.style.position = "absolute";
      // app.renderer.view.style.display = "block";
      console.log(app.renderer.view.style)
      // app.renderer.autoResize = true;
      // app.renderer.resize(window.innerWidth, window.innerHeight);
      app.renderer.resize(1024, 800);
    },

  },
  computed: {    
    
  },
  filters: {
    
  },
};
</script>

<style lang="scss" scoped>
*{
  margin:0;
  padding:0;
}
#app{
  display:flex;
  justify-content: center;
}
</style>
