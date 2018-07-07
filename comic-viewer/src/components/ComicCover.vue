<template lang="pug">
    div.cover
        div.pic
            img(:src="comicData.pic")
        div.info
            div.title {{ comicData.title }}
            div.label.genres 
                label Genres
                span {{ comicData.genres }}
            div.label.author 
                label Author
                span {{ comicData.author }}
            div.label.status 
                label Status
                span {{ comicData.status }}
            div.label.rate 
                label Rate
                span(v-for="i in [1,2,3,4,5]" :class="i<=comicData.rate?'fas fa-star':'far fa-star'")
            div.label.summary
                label Summary
                p(v-for="par in comicData.summary.split('\\n')") {{ par }}
        div.chapterList
            div.title All Chapters
            div.list
                div.chapter(v-for="(ch,i) in comicData.chapters" :key="ch.id") Chapter {{i+1}}:{{ ch.title }}
                    span(v-if="ch.isNew",class="isNew") New
</template>

<script>
export default {
    props:{
        comicData:{
            type:Object,
            default:{
                title:'',
                pic:'',
                genres:'',
                author:'',
                status:'',
                rate:'',
                summary:'',
                chapters:[]
            }
        }
    }
}
</script>


<style lang="scss" scoped>
$contaierWidth: 700px;

@mixin boldText($fontSize){
    font-family: 'Roboto-Bold';
    font-weight: 700;    
    font-size: $fontSize;
}

.cover{
    margin: 30px 15% 30px 15%;
    display: inline-flex;
    flex-wrap: wrap;
    width: $contaierWidth;

    > .pic {
        img{
            border: 5px solid black;
            box-sizing: border-box;
            width: 300px;
            height: 450px;
        }
    }
    > .info {
        width: 400px;
        max-width: 400px;
        height: 60%;
        display: inline-flex;
        flex-direction: column;        
        white-space: wrap;

        > .title{
            height: 50px;
            font-size: 36px;
            color: white;
            background-color: black;
            text-align: center;
            margin-bottom: 10px;
        }
        > .label {
            margin: 5px 0px 5px 10px; 
            label {
                @include boldText(16px);
                width: 50px;                
                display: inline-block;
                margin: 0px 10px 0px 10px; 
            }        
        }
        > .rate {
            span {
                margin-right: 5px;
            }
        }
        > .summary{
            margin-top: 20px;
            p {
                margin-left: 10px;
            }
        }
    }

    > .chapterList {
        display:block;
        width: $contaierWidth;
        margin-top: 20px;
        .title{
            width: 180px;
            height: 45px;
            line-height: 45px;
            font-size: 24px;
            color: white;
            background-color: black;            
            text-align: center;
        }
        .list{
            border: 5px solid black;
            box-sizing: border-box;
            .chapter{
                @include boldText(16px);                
                padding: 10px 20px 10px 20px;
                line-height: 24px;

                &:hover{
                    background-color: black;
                    color: white;
                    cursor: pointer;
                }
                .isNew{
                    @include boldText(14px);
                    display: inline-block;
                    width: 50px;
                    line-height: 18px;
                    text-align: center;
                    color: black;
                    background-color: #50FF44;
                    margin-left: 10px;
                }
            }
        }
    }
}

</style>
