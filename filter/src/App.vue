<template lang="pug">
  div#app
    div.mainFrame
      div.header
        div.logo
          span HaveFun
        div.searchArea
          div.searchBar
            i.fas.fa-search
            input(size=30,placeholder="Explore your own activities")
      div.body
        div.filterPanel
          div.filterItem
            h3 Location
            select
              option Taiwan
          div.filterItem
            h3 Date
            div.dateControl
              span from
              input(type="Date")
            div.dateControl
              span to
              input(type="Date")
          div.filterItem
            h3 Categories
            div.categories
              input(type="checkbox",value="All")
              label All
            div.categories
              input(type="checkbox",value="Entertainment")
              label Entertainment
            div.categories
              input(type="checkbox",value="Food")
              label Food
            div.categories
              input(type="checkbox",value="Learning")
              label Learning
            div.categories
              input(type="checkbox",value="Outdoors")
              label Outdoors

        div.content
          div.summaryArea
            span Showing 
            label {{ fullDataSet.length }}
            span  results by...
          div.tagArea
            div.tag
              span Kaohsiung
              i.far.fa-times-circle
            div.tag
              span Entertainment
              i.far.fa-times-circle
          div.displayArea
            div.displayItem(v-for="item in displayDataSet")
              div.itemImage
                // img(src="https://picsum.photos/220/?random",width="220px",height="220px")
                img(:src="item.Picture1",width="220px",height="220px")
              div.itemContent
                div.name {{ item.Name}}
                div.desc {{ item.Description | cutDesc }}
                div.info
                  a.map(:href="'https://www.google.com/maps/search/?api=1&query=' + item.Name", target="_blank", title="開啟地圖")
                    span.fas.fa-map-marker-alt {{ item.Zone }}
                  span.fas.fa-briefcase {{ item.Opentime }}
          div.footArea
            div.paginationBar
              div(@click="gotoPage(1)") #[i.fas.fa-angle-double-left]
              div(v-for="index in totalPage" :key="index" :class="{ 'active': displayPage === index }" @click="gotoPage(index)")
                span {{index}}
              div(@click="gotoPage(totalPage)") #[i.fas.fa-angle-double-right]
</template>

<script>
export default {
  name: 'app',
  components: {},
  data() {
    return {
      filterItem: [
        {
          title: 'Location',
        },
      ],
      fullDataSet: [],
      displayDataSet: [],
      displayPage: 1,
      itemPerPage: 5,  //每頁顯示筆數
      totalPage: 1,
    };
  },
  mounted() {
    this.$nextTick(()=>{
      this.init();
    });
  },  
  methods: {
    init() {
      console.log('init data');
      this.loadData();
    },
    loadData() {
      const url = 'https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97';

      this.$http.get(url).then((res)=>{
        console.log('get response data=>', res);
        this.fullDataSet = res.body.result.records
        this.countTotalPage(this.fullDataSet);
        this.displayDataSet = this.filterData(this.fullDataSet);
      },(err)=>{
        console.error(`Error!! `, err)
      });
    },
    countTotalPage(data){
      this.totalPage = Math.ceil(data.length / this.itemPerPage);
      this.displayPage = 1;
    },
    filterData(data) {
      let start = (this.displayPage-1) * this.itemPerPage;      
      return data.splice(start,this.itemPerPage);
    },
    gotoPage(page){
      this.displayPage = page;
    },
  },
  computed: {},
  filters: {
    cutDesc(desc) {
      let maxChar = 150;
      if(desc.length >= maxChar){
        return desc.substring(0,maxChar) + '...'
      }else{
        return desc;
      }
    }
  }
};
</script>

<style lang="sass" scoped>
$header-color: #7828B4
$purple: #9013FE

.mainFrame
  flex-direction: row
  .header
    background-color: $header-color
    height: 92px
    width: 100%
    display: flex
    .logo
      font-size: 36px
      color: white
      width: 30%
      text-align: center
      vertical-align: middle
      padding-top: 24px
      padding-bottom: 24px
    .searchArea
      // width: 70%
      font-family: Roboto-Italic
      color: white
      padding-top: 37px
      font-size: 20px
      .searchBar
        border-bottom: 1px solid white
      input
        color: white
        border: none
        background-color: $header-color
  .body
    display: flex
    flex-direction: row
    .filterPanel
      width: 300px
      // border: 1px solid blue
    .filterItem
      width: 300px
      padding-left: 48px
      select
        width: 220px
      .dateControl
        display: flex
        margin-bottom: 8px
        span
          font-size: 16px
          text-align: right
          width: 34px
          margin-right: 12px
  .content
    width: 72%
    // border: 1px solid red
    .summaryArea
      font-size: 24px
      margin-bottom: 10px
      label
        color: red
        font-weight: bold
    .tagArea
      display: flex
      margin-bottom: 10px
      .tag
        border: 1px solid $purple
        border-radius: 100px
        margin-right: 8px
        padding-left: 16px
        padding-right: 16px
        cursor: pointer
        transition-duration: 0.5s       
        color: $purple
        &:hover
          background-color: $purple
          color: white 
        span
          font-size: 16px
          margin-right: 5px
          margin-top: 8px
          margin-bottom: 8px
        i
          font-size: 14px
    .displayArea
      .displayItem
        display: flex
        border: 1px solid rgba(20%,20%,40%,0.3)
        margin-bottom: 20px;
        // padding-bottom: 10px;
        box-shadow: 4px 4px 2px rgba(20%,20%,40%,0.3)
        .itemImage

        .itemContent
          padding: 5px 10px 5px 10px
          .name
            height: 40px
            line-height: 40px
          .desc
            height: 70px
            margin-bottom: 10px
          .info
            position: relative
            top: 70px
            .map
              margin-right: 10px              
    .footArea
      .paginationBar
        display: flex
        div
          border: 1px solid #ECEEEF
          width: 20px
          height: 20px
          text-align: center
          line-height: 20px
          cursor: pointer
          &.active
            background-color: $purple
            border: 1px solid $purple
            color: white
</style>
