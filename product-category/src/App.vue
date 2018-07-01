<template lang="pug">
  div.app
    div.grid-container
      div.header
        div.brand CCCLOTHES
        div.category MEN'S TOPS
      div.item.item1
        div.text.title(data-title="LINEN BLAZER") LINEN BLAZER
        div.text.smalltext Men's outfit
        div.text.num 01
        div.image(style="background-image:url('https://images.unsplash.com/photo-1513827379601-9dba5099a3f9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1acdd78f34ee75aade9e313251bb1695&auto=format&fit=crop&w=2468&q=80')")
        div.deco-box.border
        div.deco-box.stripped

      div.item.item2
        div.text.title(data-title="FREELIFT") FREELIFT
        div.text.smalltext Men's basics
        div.text.num 02
        div.image(style="background-image:url('https://images.unsplash.com/photo-1514632542677-48fae74a01b2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cf412aceb1d689765e387d30fca7210a&auto=format&fit=crop&w=2468&q=80')")
        div.deco-box.border
        div.deco-box.solid

      div.item.item3
        div.text.title(data-title="SUPER SKINNY") SUPER SKINNY
        div.text.smalltext Men's pattern shirts
        div.text.num 03
        div.image(style="background-image: url('https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a0f994eef47e5fb1a67849703cc961b3&auto=format&fit=crop&w=2550&q=80')")
        div.deco-box.border
        div.deco-box.solid

      div.item.item4
        div.text.title(data-title="DENIM") DENIM
        div.text.smalltext Men's cadual
        div.text.num 04
        div.image(style="background-image:url('https://images.unsplash.com/photo-1484516758160-69878111a911?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=39466d66952b133d5a5cff642b970d05&auto=format&fit=crop&w=1887&q=80')")
        div.deco-box.border
        div.deco-box.stripped

      div.item.item5
        div.text.title(data-title="SWEATSHIRTS") SWEATSHIRTS
        div.text.smalltext Men's jacket
        div.text.num 05
        div.image(style="background-image:url('https://images.unsplash.com/photo-1525448198276-222de3961638?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=43fb25556cdbd191e520c7f28739e40d&auto=format&fit=crop&w=2550&q=80')")
        div.deco-box.border
        div.deco-box.stripped

      div.item.item6
        div.text.title(data-title="VINTAGE DENIM") VINTAGE DENIM
        div.text.smalltext Men's classic
        div.text.num 06
        div.image(style="background-image:url('https://images.unsplash.com/photo-1519406709381-c1f293304b28?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=98c497a29f229085d9574ee8b6eeef8c&auto=format&fit=crop&w=1534&q=80')")
        div.deco-box.border
        div.deco-box.solid

      div.item.item7
        div.text.title(data-title="EDITION") EDITION
        div.text.smalltext Men's shirts
        div.text.num 07
        div.image(style="background-image:url('https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=63ff45d79414b3166b08b800a32018be&auto=format&fit=crop&w=1534&q=80')")
        div.deco-box.border
        div.deco-box.solid                                          
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

<style lang="scss" scoped>
$baseSize: 16px;
$primaryColor: #50E3C2;
$gridCellWidth: 120px;
$gridCellHeight: 100px;

@mixin pos($x, $y) {
  left: $x * $gridCellWidth;
  top: $y * $gridCellHeight;
}

@mixin box($w, $h, $x, $y, $z: 0) {
  @include pos($x, $y);
  width: $w * $gridCellWidth;
  height: $h * $gridCellHeight;
  z-index: $z;
}


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

.item {
  position: relative;
  
  > .text {
    position: absolute;
    white-space: nowrap;
  }
  
  > .title {
    font-size: 48px;   
    &:after, &:before {
      content: attr(data-title);
      overflow: hidden;
      position: absolute;
      left: 0;
      color: black;
    }
    &:after {
      height: 26px;
      top: -17px;
      opacity: 0.3;
    }
    &:before {
      height: 19px;
      top: -27px;
      opacity: 0.1;
    }
  }
  
  > .smalltext {
    font-family: 'Roboto-BoldItalic';
    font-size: 24px;
  }
  
  > .num {
    font-size: 48px;
  }
  
  > .image {
    width: 100%;
    height: 100%;
    display: block;
    background-size: cover;
    background-repeat: no-repeat;
  }
  
  > .deco-box {
    display: block;
    position: absolute;
    
    &.border {
      box-sizing: border-box;
      border: 20px solid $primaryColor;
      background-color: transparent;
    }
    
    &.stripped {
      background-color: transparent;
      background-image: repeating-linear-gradient(
        135deg,
        $primaryColor,
        $primaryColor 20px,
        transparent 20px,
        transparent 40px
      );
    }
    
    &.solid {
      background-color: $primaryColor;
    }
  }
}

.item1 {
  grid-column: 1 / span 4;
  grid-row: 3 / span 4;
  
  > .title {
    top: -15px;
  }
  
  > .smalltext {
    @include pos(3.6, 3.5);
    transform: rotate(90deg);
  }
  
  > .num {
    @include pos(0, 4);
  }
  
  > .image {
    background-position: 0 -150px;
  }
  
  > .deco-box.border {
    @include box(2, 2, 2.5, -0.5, -10);
  }
  
  > .deco-box.stripped {
    @include box(2, 1, 0.5, 3.5, 1);
  }
}

.item2 {  
  grid-column: 6/span 2;
  grid-row: 4/span 2;
  
  > .title {
    @include pos(1, 2.2);
  }
  
  > .smalltext {
    @include pos(-0.1, -0.25);
  }
  
  > .num {
    @include pos(2.5, -1);
  }
  
  > .image {
    background-position: 0 -80px;
  }
  
  > .deco-box.border {
    @include box(2, 2, 1, -1, -10);
  }
  
  > .deco-box.solid {
    @include box(2, 2, 0.5, -0.5, -5);
  }
}

.item3 {
  grid-column: 1/span 4;
  grid-row: 9/span 2;

  > .title {
    @include pos(1.2, -0.5);
  }
  
  > .smalltext {
    @include pos(0.5, 2);
  }
  
  > .num {
    @include pos(4, 2);
  }
  
  > .image {
    background-position: 0 -60px;
  }
  
  > .deco-box.border {
    @include box(2, 2, 2.5, 0.5, -10);
  }
  
  > .deco-box.solid {
    @include box(2, 1, 0, -0.5, -10);
  }
}

.item4 {
  grid-column: 7/span 2;
  grid-row: 9/span 4;

  > .title {
    @include pos(-0.8, 0.5);
    transform: rotate(-90deg);
  }
  
  > .smalltext {
    @include pos(1, -0.89);
    transform: rotate(90deg);
  }
  
  > .num {
    @include pos(-0.5, 3.5);
  }
  
  > .image {
    background-position: -40px 0;
  }
  
  > .deco-box.border {
    @include box(2, 2, -0.5, -1, -10);
  }
  
  > .deco-box.stripped {
    @include box(2, 1, 0, 3.5, 1);
  }
}

.item5 {
  grid-column: 3/span 2;
  grid-row: 13/span 2;

  > .title {
    @include pos(-2, 0.5);
    z-index: 10;
  }
  
  > .smalltext {
    @include pos(2, 0);
  }
  
  > .num {
    @include pos(-1, 1.5);
  }
  
  > .image {
    background-position: -40px 0;
    transform: scale(-1, 1);
  }
  
  > .deco-box.border {
    @include box(2, 1, -1, 1.5, -10);
  }
  
  > .deco-box.stripped {
    @include box(2, 1, -1.5, -0.5, 1);
  }
}

.item6 {
  grid-column: 5/span 4;
  grid-row: 15/span 4;

  > .title {
    @include pos(1, -0.5);
    z-index: 10;
  }
  
  > .smalltext {
    @include pos(1.5, 4);
  }
  
  > .num {
    @include pos(-0.5, 1.5);
  }
  
  > .image {
    background-position: 0 -160px;
  }
  
  > .deco-box.border {
    @include box(4, 1, 0, 3.5, -10);
  }
  
  > .deco-box.solid {
    @include box(1, 2, -0.5, 2, -10);
  }
}

.item7 {
  grid-column: 1/span 2;
  grid-row: 17/span 4;

  > .title {
    @include pos(1.45, 0.62);
    transform: rotate(90deg);
    z-index: 10;
  }
  
  > .smalltext {
    @include pos(0, -0.3);
  }
  
  > .num {
    @include pos(2.5, 3.5);
  }
  
  > .deco-box.border {
    @include box(2, 2, 0.5, -0.5, -10);
  }
  
  > .deco-box.solid {
    @include box(1, 2, 2, 2, -10);
  }
}

</style>
