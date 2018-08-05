<template lang="pug">
  div#app
    div.head
      div.title
        span FRONT-END Skill Tree
    div.content
      div.skillSeries(v-for="skillSeries in skillData")
        div.mainIcon
          img( :src="skillSeries.icon" width="128px" height="128px")
        div.detail
          div.skillItem(v-for="skill in skillSeries.skills" :title="skill.title" :class="{inactive: !skill.learned, active:skill.learned}"  @click="skill.learned = !skill.learned")          
            div
              i.material-icons {{skill.material_icons}}
            div.skillpoint
              span {{ skill.title }}
</template>

<script>
import skillData from './skills.json';

export default {
  name: 'app',
  components: {},
  data() {
    return {
      skillData,      
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.init();
    });
  },
  methods: {
    init() {

    }
  },
  computed: {    
    
  },
  filters: {
    
  },
};
</script>

<style lang="scss">
html,body{
  margin: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #6a357b;
}

#app{
  display: flex;
  flex-direction: column;
  margin: 0px 10% 0px 10%;
}

.head{
  width: 100%;
  height: 150px;
  text-align: center;
  margin-left: 2vw;
  color: #fff;
  text-shadow: 0px 3px 7px #0093ff;
  letter-spacing: 2px;
  font-weight: 900;
  font-size: 80px;
}
.content{
  display: flex;
  flex-direction: column;
  justify-content: center;  
}

.skillSeries{
  display: inline-flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 50px;
  .detail{
    margin-left: 30px;
    display: inline-flex;
  }
  .skillItem{
    width: 128px;
    height: 128px;    
    font-size: 20px;
    color: white;
    text-align: center;
    cursor: pointer;
    border: 1px solid white;
    padding: 5px;
    margin-right: 10px;

    .skillpoint{

    }
  }
    
  .material-icons{
    font-size: 96px;
  }

  .inactive{
    opacity: 0.5;
  }
  .active{
    opacity: 1;
  }
}
</style>
