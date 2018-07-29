<template lang="pug">
  div.wrapper
    div#page1
      div.square
      div.circle
      div.star
      div.title    
        h1 EOMETRY PERSON
        p find your core personality type in shapes!
    div#page2(class="hide")
      div.question_area
        <h1 class="title">Q1</h1>
      <h2>If one day you get a gift that can change the rule of the world, which ability will you choose?</h2>
      <p>Choose the answer appeared in your mind instantly</p>
      <button name="qry_1">Destroy all humans in the world</button>
      <button name="qry_1">Make the war never happened</button>
      <button name="qry_1">You won’t get old and live forever</button>
      div.sidebar
</template>

<script>
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

    },
  },
  computed: {    
    
  },
  filters: {
    
  },
};
</script>

<style lang="scss">
body{
  font-family: sans-serif;
  background-color: #1469FF;
  height: 120vh;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
}

%rotate_1{
  animation-delay:0s, 4200ms; 
  animation-duration: 4s,500ms;
  animation-iteration-count: 1,1;
  animation-timing-function: linear,linear;
  animation-name: anticlockwise_rotation, fitWindow;
}
%scale_1{
  @extend %rotate_1;  
  animation-name: circle_rotation, fitWindow;
}
%rotate_2{
  animation-delay:0s, 4200ms; 
  animation-duration: 4s,500ms;
  animation-iteration-count: 1,1;
  animation-timing-function: linear,linear;
  animation-name: clockwise_rotation, fitWindow;
}
%triangle{
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0px 180px 240px 180px;
  border-color: transparent transparent #FF3C82 transparent;
  transform: translatey(-20px);
}
.wrapper{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#page1{
  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-sizing: border;
  height: 100vh;
  position: relative;
  &>*,&>*:before,&>*:after{
    position: absolute;
  }
  .square{
    width: 50vh;
    height: 50vh;
    background-color: black;
    @extend %rotate_1;   
  }
  .circle{
    width: 60vh;
    height: 60vh;
    border-radius: 50%;
    background-color: #0027C8;
    @extend %scale_1;
  }
  .star{
    @extend %triangle;
    &::after{
      content: "";
      @extend %triangle;
      transform: translate(-180px,50px) rotate(180deg);
    }
    @extend %rotate_2;    
  }
  .title{
    width: 100vh;
    text-align: center;
    color: white;
    z-index: 5;
    &>*{      
      margin: 0;
    }
    h1 {
      font-size: 64px;
      line-height: 64px;
      margin-bottom: 10px;
    }
    p {
      font-size: 24px;
      line-height: 24px;      
    }
    
  }
}

#page2{
  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-sizing: border;
  height: 100vh;
  position: relative;
}

.hide{
  opacity: 0;
}
@keyframes anticlockwise_rotation{
  0%{
    transform: rotate(360deg);
  }
  25%{
    transform: rotate(270deg);
  }
  50%{
    transform: rotate(180deg);
  }
  75%{
    transform: rotate(90deg);
  }
  100%{
    transform: rotate(0deg);
  }
}
@keyframes clockwise_rotation{
  0%{
    transform: rotate(0deg);
  }
  25%{
    transform: rotate(90deg);
  }
  50%{
    transform: rotate(180deg);
  }
  75%{
    transform: rotate(270deg);
  }
  100%{
    transform: rotate(360deg);
  }
}
@keyframes circle_rotation{
  0%{
    transform: scale(1,1);
  }
  25%{
    transform: scale(0.75,0.75);
  }
  50%{
    transform: scale(1,1);
  }
  75%{
    transform: scale(1.25,1.25);
  }
  100%{
    transform: scale(1,1);
  }
}
@keyframes fitWindow{  
  100%{
    transform: scale(20);
  }
}

</style>
