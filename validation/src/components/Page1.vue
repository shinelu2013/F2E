<template lang="pug">
  div.page
    progressBar(:stages="stages")
    div.title 
        div.bigTitle Create Account
        div.smallTitle Glad to sess you here!    
    div.field
        label Account
        input(:model="account" placeHolder="example@email.com")
    div.field
        label Password
        input(:model="password" type="password" placeHolder="******")
    div.field
        label Confirm Password
        input(:model="confirm_password" type="password" placeHolder="******")           
    div.field
        button.submitButton(:disabled="!formValid") SUBMIT & NEXT
</template>

<script>
import ProgressBar from './ProgressBar';

export default {
    props:{
        stages:{
            type: Array
        }
    },
  data() {
    return {
        account:'',
        password:'',
        confirm_password:''
    };
  },
  components:{
      progressBar: ProgressBar
  },
  mounted() {
    this.$nextTick(() => {
      this.init();
    });
  },
  methods: {
    init() {
        console.log(`page1 stages:`,this.stages)
    },
  },
  computed: {    
      formValid: function(){
          return false;
      }
  },
  filters: {
    
  },
};
</script>

<style lang="scss" scoped>
@import './css/util';

$containerWidth: 460px;;

.page{
    width: $totalWidth;
    display: flex;
    flex-direction: column;    
    justify-content: center;
}

.title{
    display: block;
    text-align: center;
    width: 100%;
    .bigTitle{
        font-size: 48px;
    }
    .smallTitle{
        font-size: 24px;
    }
}

.field{
    width: $containerWidth;
    height: 100px;
    align-self: center;
    margin-bottom: 20px;

    > label {
        display: block;
    }
    > input {
        height: 50px;
        width: $containerWidth;        
        margin-top: 10px;
        padding-left: 20px;
        border-radius: 10px;
        border: 2px solid black;
        box-sizing: border-box;
    }

    > .submitButton {
        width: $containerWidth;
        height: 50px;
        line-height: 25px;
        border: none;
        border-radius: 10px;
        background-color: $submitButtonColor;
        color: $submitFontColor;
        &:disabled{
            background-color: $disableButtonColor;
        }
    }
}
</style>
