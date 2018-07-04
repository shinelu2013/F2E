<template lang="pug">
    div.item(:class="galleryItem.class")
        div.text.title(:data-title="galleryItem.title") {{ galleryItem.title }}
        div.text.smalltext {{ galleryItem.smallText }}
        div.text.num {{ galleryItem.num }}
        div.image
        div.deco-box(:class="{'border':galleryItem.decoBox.border}")
        div.deco-box(:class="{'solid':galleryItem.decoBox.solid}")
        div.deco-box(:class="{'stripped':galleryItem.decoBox.stripped}")
</template>

<script>
export default {
    props:{
        galleryItem:{
            type:Object,
            default:{
                title: '',
                class: '',
                smallText: '',
                num: '',
                decoBox:{
                    border: false,
                    stripped: false,
                    solid: false
                }
            }
        }
    }
}
</script>

<style lang="scss">
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
    background-image:url('https://images.unsplash.com/photo-1513827379601-9dba5099a3f9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1acdd78f34ee75aade9e313251bb1695&auto=format&fit=crop&w=2468&q=80')
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
    background-image: url('https://images.unsplash.com/photo-1514632542677-48fae74a01b2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cf412aceb1d689765e387d30fca7210a&auto=format&fit=crop&w=2468&q=80')
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
    background-image: url('https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a0f994eef47e5fb1a67849703cc961b3&auto=format&fit=crop&w=2550&q=80')
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
    background-image:url('https://images.unsplash.com/photo-1484516758160-69878111a911?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=39466d66952b133d5a5cff642b970d05&auto=format&fit=crop&w=1887&q=80')
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
    background-image:url('https://images.unsplash.com/photo-1525448198276-222de3961638?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=43fb25556cdbd191e520c7f28739e40d&auto=format&fit=crop&w=2550&q=80')
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
    background-image:url('https://images.unsplash.com/photo-1519406709381-c1f293304b28?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=98c497a29f229085d9574ee8b6eeef8c&auto=format&fit=crop&w=1534&q=80')
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
  
  > .image{
    background-image:url('https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=63ff45d79414b3166b08b800a32018be&auto=format&fit=crop&w=1534&q=80')
  }
  
  > .deco-box.border {
    @include box(2, 2, 0.5, -0.5, -10);
  }
  
  > .deco-box.solid {
    @include box(1, 2, 2, 2, -10);
  }
}
</style>

