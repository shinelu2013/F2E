<template lang="pug">
    div 
        span 
</template>

<script>
export default {
    
}
</script>


<style lang="scss" scoped>
$backgroundColor: black;
$textColor: #50FF44;
$textSize: 16px;
$headerHeight: 30px;

div{
    width: 100%;
    height: $headerHeight;
    background-color: $backgroundColor;
    text-align: center;
    > span {
        font-size: $textSize;
        line-height: $headerHeight;
        color: $textColor;
    }
}
</style>
