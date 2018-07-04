<template lang="pug">
  div.app
    div.grid-container
      div.header
        div.brand CCCLOTHES
        div.category MEN'S TOPS
      galleryItem(v-for="item in items" :key="item.num" :galleryItem="item")                                             
</template>

<script>
import GalleryItem from './GalleryItem.vue';

export default {
  name: 'app',
  components: {
    galleryItem: GalleryItem
  },
  data() {
    return {
      items:[
        {
            title: 'LINEN BLAZER',
            class: 'item1',
            smallText: "Men's outfit",
            num: '01',
            decoBox:{
                border: true,
                stripped: true,
                solid: false
            }
        },
        {
            title: 'FREELIFT',
            class: 'item2',
            smallText: "Men's basics",
            num: '02',
            decoBox:{
                border: true,
                stripped: false,
                solid: true
            }
        },
        {
            title: 'SUPER SKINNY',
            class: 'item3',
            smallText: "Men's pattern shirts",
            num: '03',
            decoBox:{
                border: true,
                stripped: false,
                solid: true
            }
        },
        {
            title: 'DENIM',
            class: 'item4',
            smallText: "Men's cadual",
            num: '04',
            decoBox:{
                border: true,
                stripped: true,
                solid: false
            }
        },
        {
            title: 'SWEATSHIRTS',
            class: 'item5',
            smallText: "Men's jacket",
            num: '05',
            decoBox:{
                border: true,
                stripped: true,
                solid: false
            }
        },
        {
            title: 'VINTAGE DENIM',
            class: 'item6',
            smallText: "Men's classic",
            num: '06',
            decoBox:{
                border: true,
                stripped: false,
                solid: true
            }
        },
        {
            title: 'EDITION',
            class: 'item7',
            smallText: "Men's shirts",
            num: '07',
            decoBox:{
                border: true,
                stripped: false,
                solid: true
            }
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
$baseSize: 16px;
$gridCellWidth: 120px;
$gridCellHeight: 100px;

.app {
  padding: 0;
  margin: 0;
  font-family: 'Roboto-Black';
  font-size: $baseSize;
}

.grid-container {
  width: 960px;
  margin: 32px auto;
  display: grid;
  grid-template-columns: repeat(8, $gridCellWidth);
  grid-template-rows: repeat(20, $gridCellHeight);
}

.header {
  grid-column: 1 / span 8;
  grid-row: 1 / 2;
  
  > .brand {
    font-size: 20px;
    line-height: 20px;
    background-color: black;
    color: white;
    width: 131px;
    height: 20px;
    margin: 0 auto;
    text-align: center;
  }
  
  > .category {
    font-size: 72px;
    font-weight: 700;
    text-align: center;
    margin-top: 4px;
  }
}



</style>
