<template lang="pug">
div.progressBar
    div.stage(:class="getStageClass(stages[0])")
    div.line(:class="{'linepass': currentStage>1}")
    div.stage(:class="getStageClass(stages[1])")
    div.line(:class="{'linepass': currentStage>2}")
    div.stage(:class="getStageClass(stages[2])")
    div.line(:class="{'linepass': currentStage>3}")
    div.stage(:class="getStageClass(stages[3])")    
</template>

<script>
export default {
    props:{
        stages:{
            type: Array,
            default: [
                {
                    id:1,
                    status:'current'
                },
                {
                    id:3,
                    status:'wait'
                },
                {
                    id:2,
                    status:'wait'
                },{
                    id:4,
                    status:'wait'
                }
            ]
        }
    },
    data(){
        return {
            currentStage: 1
        }
    },
    mounted() {    
        console.log(`ProgressBar stages:`,this.stages)        
        for(let idx in this.stages){
            let stage = this.stages[idx];
            if(stage.status === 'current'){
                this.currentStage = ++idx;
            }
        }
    },
    methods:{
        getStageClass: function(stage,idx){
            let clsAry = ["stage"];
            switch(stage.status){
                case "current":
                    clsAry.push("current");
                    break;
                case "passed":
                    clsAry.push("passed");
                    break;
                case "wait":
                    clsAry.push("wait");
                    break;
                default:
                    clsAry.push("wait");
                    break;
            }
            
            return clsAry.join(" ");
        }
    }
}
</script>

<style lang="scss" scoped>
.progressBar {
    display:block;
    height: 100px;
    margin: 20px 0 20px 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    .stage{
        width: 16px;
        height: 16px;
        font-size: 16px;
        line-height: 16px;
        font-family: 'Font Awesome\ 5 Free';
        color: #0275D8;
        
        &:before{
            content: "\f111";
            position: absolute;
            text-align: center;            
        }
    }
    .current{
        &:after{
            content: "\F111";
            position: absolute;
            text-align: center;            
            font-weight: 700;
            font-size: 9px;
            width: 16px;
        }
    }
    .next{
        &:after{

        }
    }
    .passed{
        &:before{
            content: "\F058";
            position: absolute;
            text-align: center;            
            font-weight: 700;
        }
    }
    .line{
        height: 1px;
        width: 65px;
        border-top: 2px solid #BEE1FF;
    }
    .linepass{
        border-top: 2px solid #0275D8;
    }
}

</style>
