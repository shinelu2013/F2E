<template lang="pug">
  div#app
    pageHeader
    comicCover(:comicData="comicData")
    pageFooter
</template>

<script>
import PageHeader from './components/PageHeader.vue';
import PageFooter from './components/PageFooter.vue';
import ComicCover from './components/ComicCover.vue';

export default {
  name: 'app',
  components: {
    comicCover: ComicCover,
    pageHeader: PageHeader,
    pageFooter: PageFooter
  },
  data() {
    return {      
      comicData:{    
        title: 'MY HEXSCHOOL',
        pic: './assets/cover.png',
        genres: 'Fusce/vehicula/dolor',
        author: 'Namae Shiranai',
        status: 'Ongoing',
        rate: '4',
        summary: `If your banker breaks, you snap; if your apothecary by mistake sends you poison in your pills, you die. 

Therefore, I say, I saw that this situation of mine was the precise situation of every mortal that has this Siamese connexion with a plurality of other mortals.  `,
        chapters: [
          {
            id:1,
            title:'The F2E Challenge Start!',
            isNew: false
          },
          {
            id:2,
            title:'Todo List is Going Crazy!',
            isNew: true
          }
        ]
      }
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
@import 'css/util';
.app{
  font-size: $baseFontSize;  
}
</style>
