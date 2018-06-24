<template lang="pug">
div.app
  div.header
    div.logo
      div Shoptime
    div.navbar
      nav
        ul
          li.active HOME
          li ORDERS
          li PRODUCT
    div.account
      div Admin
  div.content
    div.title OVERVIEW
    div.period
      span 2018/6/6 
      span.fas.fa-caret-right
      span 2018/6/13 
      select 
        option(value="Daily") Daily
        option(value="Weekly" selected) Weekly
        option(value="Monthly") Monthly
        option(value="Yearly") Yearly
        option(value="Custom") Custom      
    div.summaryArea
      div.summaryItem
        label.fas.fa-hand-holding-usd
        label TOTAL REVENUE
        span 54,540
      div.summaryItem
        label.fas.fa-boxes
        label TOTAL COST
        span 12,660
      div.summaryItem
        label.fas.fa-money-bill
        label NET INCOME
        span 41,880
    div.graphArea
      div(id="canvas",style="width: 1000px;height:400px;")
    div.listArea
      div.transaction
        div.title Transaction Website
        div.item
          div.logo.fab.fa-facebook-square
          div.name Facebook.com
          div.value 45,836
          div.rate.red.fas.fa-arrow-up 20%
        div.item
          div.logo.fab.fa-google
          div.name google.com
          div.value 23,582
          div.rate.red.fas.fa-arrow-up 12%
        div.item
          div.logo.fas.fa-shopping-cart
          div.name Shopify.com
          div.value 2,489
          div.rate.green.fas.fa-arrow-down 15%
        div.item
          div.logo.fab.fa-wordpress-simple
          div.name Wordpress.com
          div.value 1,057
          div.rate.green.fas.fa-arrow-down 30%
      div.latest 
        div.title Latest Orders
        div.item
          div.pic 
            img(src="https://picsum.photos/100?random",width="100",height="100")
          div.info
            div.name Vintage T-shirt
            div.date 
              i.fas.fa-clock 
              span 2018/6/13  13:42
            div.people
              i.fas.fa-male 
              span Belle Willis
          div.total 
            span Total
            span 3,200
        div.item
          div.pic 
            img(src="https://picsum.photos/100?random",width="100",height="100")
          div.info
            div.name Cowboy Jacket
            div.date 
              i.fas.fa-clock 
              span 2018/6/13  10:45
            div.people
              i.fas.fa-male 
              span Adrian Cummings
          div.total 
            span Total
            span 2,800
        div.item
          div.pic 
            img(src="https://picsum.photos/100?random",width="100",height="100")
          div.info
            div.name Coach Coat
            div.date 
              i.fas.fa-clock 
              span 2018/6/13  8:26
            div.people
              i.fas.fa-male 
              span Lura Holland
          div.total 
            span Total
            span 1,600

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
      console.log('init data');
      var myChart = echarts.init(document.querySelector("#canvas"));
      var option = {
          title: {
              text: 'Activity'
          },
          tooltip: {},         
          xAxis: {
              data: ["6 JUN","7 JUN","8 JUN","9 JUN","10 JUN","11 JUN","12 JUN","13 JUN"]
          },
          yAxis: {},
          series: [{
              name: '銷量',
              type: 'line',
              color: '#7ED321',
              data: [8000,6551,5433,7151,6620,4862,7159,8631]
          },{
              name: '銷量',
              type: 'line',
              color: '#4A90E2',
              data: [2400,4551,4862,4651,3620,7159,2259,1131]
          },{
              name: '銷量',
              type: 'line',
              color: '#D0021B',
              data: [3433,3620,4623,2259,6620,3816,3631,2345]
          }]
      };

      myChart.setOption(option);      
    },
  },
  computed: {    
    
  },
  filters: {
    
  },
};
</script>

<style lang="scss" scoped>
$maxWidth: 1200px;
$revenueColor : #7ED321;
$costColor : #D0021B;
$incomeColor : #4A90E2;

.app{
  display: flex;
  flex-direction: column;
  >div {
    display: block; 
    // border: 2px solid lightblue;
  }      
  width: $maxWidth;
  padding: 0px 20px 0px 20px;
  .header{
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: space-around;
    background-color: black;
    color: white;
    font-size: 16px;
    .logo{
      width: $maxWidth * 0.2;
      div{
        padding-left: 30px;
      }
      height: 40px;
      line-height: 40px;
      font-size: 24px;
      
      //padding: 10px 10px 10px 10px;
      // text-align: center;
      align-self: center;
    }
    .navbar{
      width: 70%;
      nav{
        ul{
          list-style: none;
          display: inline-flex;
          margin:0;
          padding:0;
          li{
            cursor: pointer;
            margin-right: 40px;
            height: 70px;
            line-height: 70px;
            box-sizing: border-box;
            &.active{
              border-bottom: 3px solid white;
            }
            &:hover{
              border-bottom: 3px solid gray;
            }
          }
        }        
      }
    }
    .account{
      width: 10%;
      align-self: center;
    }
  }
  .content{
    background-color: #F2F2F2;
    padding: 20px 30px;   
    .title{
      font-size: 24px;
      width: 120px;      
      float: left;
      margin-bottom: 10px;
    }
    .period{      
      font-size: 16px;
      float: right;
      margin-top: 15px;
      select{
        border-style: none;
        background-color: #F2F2F2;
      }
    }
    .summaryArea{
      height: 150px;
      width: 100%;
      display: flex;
      justify-content: space-between;  
      align-items: center;
      margin-bottom: 10px;
      .summaryItem{
        background-color: white;
        width: 360px;      
        height: 140px;
        text-align: center;        
        label{          
          display: inline-block;
          font-size: 18px;
          margin-top: 15%;
          margin-right: 5px;
        }
        span{
          display: block;
          font-size: 24px;        
        }
        &:nth-child(1){
          span{
            color: #7ED321; 
          }
        }
        &:nth-child(2){
          span{
            color: #D0021B; 
          }
        }
        &:nth-child(3){
          span{
            color: #4A90E2; 
          }
        }
      }
    }
    .graphArea{
      width: 100%;
      height: 400px;      
      background-color: white;
      margin-bottom: 10px;
      div#canvas{
        margin: 20px 70px 20px 70px;
      }
    }
    .listArea{
      width: 100%;
      display: flex;
      flex-direction: space-between;
      > *{
        float: left;
        width: 50%;
        height: 450px;
        background-color: white; 
        &:nth-child(1){
          margin-right: 20px;
        }
      }   
      
      .transaction{
        display: flex;
        flex-direction: column;
        padding-left: 20px;        
        padding-right: 20px;
        box-sizing: border-box;
        .title{
          width: auto;
          font-size: 24px;
          padding-top: 10px;
        }
        .item{
          width: 100%;
          height: 60px;
          line-height: 60px;
          border-bottom: 1px solid #EBEBEB ;
          margin-bottom: 10px;
          >*{
            display: inline-block;
          }
          .logo{
            width: 10%;
            padding-left: 10px;
            font-size: 40px;
          }
          .name{
            width: 50%;
            height: 60px;
            line-height: 60px;
            padding-left: 20px;
          }
          .value{
            width: 15%;
            font-size: 20px;
            text-align: right;
            margin-right: 10px;
          }
          .rate{
            width: 10%;
            text-align: right;
            &.red{
              color: red;
            }
            &.green{
              color: green;              
            }
          }
        }
      }
      .latest{
        display: flex;
        flex-direction: column;
        padding-left: 20px;        
        padding-right: 20px;
        box-sizing: border-box;
        .title{
          width: auto;
          font-size: 24px;
          padding-top: 10px;
          margin-bottom: 10px;
        }
        .item{
          width: 100%;
          height: 100px;
          max-height: 100px;
          line-height: 100px;
          border-bottom: 1px solid #EBEBEB ;
          padding-bottom: 10px;        
          margin-bottom: 10px;
          display: flex;
          align-items: flex-start;
          flex-wrap: wrap;          
          
          >*{
            display: inline-flex;          
          }
          .pic{
            // width: 10%;
            width: 100px;
            height: 100px;
            padding-left: 10px;
          }
          .info{
            display: flex;
            flex-direction: column;
            width: 280px;
            font-size: 16px;
            padding:0;
            margin:0;
            padding-bottom: 10px;
            padding-left: 20px;
            .name{
              // width: 200px;
              height: 40px;
              line-height: 40px;
              font-size: 20px;
              padding-left: 0px;
              margin-right: 20px;
            }
            .date{
              height: 30px;
              line-height: 30px;
              i{
                width: 25px;
                text-align:center;
              }
            }
            .people{
              height: 30px;
              line-height: 30px;
              i{
                width: 25px;
                text-align:center;
              }
            }            
          }
          .total{
              display: flex;
              flex-direction: column;              
              height: 80px;
              width: 100px;
              font-size: 20px;
              align-items: flex-end;
              align-self: flex-end;
              span {
                &:nth-child(1){
                  font-size: 14px;
                }
                height: 20px;
              }
            }
        }
      }
    
    }
  }  
}

</style>
