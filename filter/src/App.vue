<template lang="pug">
  div#app
    div.mainFrame
      div.header
        div.logo
          span HaveFun
        div.searchArea
          div.searchBar
            i.fas.fa-search
            input(size=30,placeholder="Explore your own activities",v-model="filterText" ,@input="filterData()")
      div.body
        div.filterPanel
          div.filterItem
            h3 Location
            select(v-model="filterLocation", @change="filterData()")
              option(value="") 
              option(v-for="area in areas", :key="area.value", :value="area.value") {{ area.title }}
          div.filterItem
            h3 Categories
            div.categories(v-for="cate in categories", :key="cate.value")
              input(type="checkbox",:value="cate.value" ,v-model="filterCategories", @change="filterData()")
              label {{ cate.title }}

        div.content
          div.summaryArea
            span Showing 
            label {{ displayDataSet.length }}
            span  results by...
          div.tagArea
            div.tag(v-for="tag in tags", :key="tag.value" , @click="removeTag(tag)")
              span {{ tag.title }}
              i.far.fa-times-circle            
          div.displayArea
            div.displayItem(v-for="item in pageData")
              div.itemImage
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
              div(@click="gotoPage(1)",title="跳到最前頁") #[i.fas.fa-angle-double-left]
              div(@click="displayPage>1?displayPage--:displayPage",title="上一頁") #[i.fas.fa-angle-left]
              div(v-for="index in totalPage" :key="index" :class="{ 'active': displayPage === index }" @click="gotoPage(index)")
                span {{index}}
              div(@click="displayPage<totalPage?displayPage++:displayPage",title="下一頁") #[i.fas.fa-angle-right]
              div(@click="gotoPage(totalPage)",title="跳到最後頁") #[i.fas.fa-angle-double-right]
</template>

<script>
export default {
  name: 'app',
  components: {},
  data() {
    return {
      filterText: "",  //關鍵字查詢
      filterLocation: "", //位置查詢
      filterCategories: [], //分類查詢
      isChange: false,
      areas:[
        {"title": "新興區","value":"新興區"},
        {"title": "前金區","value":"前金區"},
        {"title": "苓雅區","value":"苓雅區"},
        {"title": "前鎮區","value":"前鎮區"},
        {"title": "楠梓區","value":"楠梓區"},
        {"title": "鳥松區","value":"鳥松區"},
        {"title": "鹽埕區","value":"鹽埕區"},
        {"title": "鼓山區","value":"鼓山區"},
        {"title": "橋頭區","value":"橋頭區"},
        {"title": "三民區","value":"三民區"},
        {"title": "鳳山區","value":"鳳山區"},
        {"title": "旗津區","value":"旗津區"},
        {"title": "小港區","value":"小港區"},
        {"title": "林園區","value":"林園區"},
        {"title": "美濃區","value":"美濃區"},
        {"title": "旗山區","value":"旗山區"},
        {"title": "左營區","value":"左營區"},
        {"title": "大樹區","value":"大樹區"},
        {"title": "仁武區","value":"仁武區"},
        {"title": "大寮區","value":"大寮區"},
        {"title": "茂林區","value":"茂林區"},
        {"title": "六龜區","value":"六龜區"},
        {"title": "桃源區","value":"桃源區"},
        {"title": "阿蓮區","value":"阿蓮區"},
        {"title": "燕巢區","value":"燕巢區"},
        {"title": "田寮區","value":"田寮區"},
        {"title": "大社區","value":"大社區"},
        {"title": "岡山區","value":"岡山區"},
        {"title": "湖內區","value":"湖內區"},
        {"title": "路竹區","value":"路竹區"},
        {"title": "茄萣區","value":"茄萣區"},
        {"title": "永安區","value":"永安區"},
        {"title": "彌陀區","value":"彌陀區"},
        {"title": "梓官區","value":"梓官區"},
        {"title": "那瑪夏區","value":"那瑪夏區"},
        {"title": "甲仙區","value":"甲仙區"},
        {"title": "杉林區","value":"杉林區"},
        {"title": "內門區","value":"內門區"}
      ],
      categories:[
        {"value":"1","title":"文化類"},
        {"value":"2","title":"生態類"},
        {"value":"3","title":"古蹟類"},
        {"value":"4","title":"廟宇類"},
        {"value":"5","title":"藝術類"},
        {"value":"6","title":"小吃/特產類"},
        {"value":"7","title":"國家公園類"},
        {"value":"8","title":"國家風景區類"},
        {"value":"9","title":"休閒農業類"},
        {"value":"10","title":"溫泉類"},
        {"value":"11","title":"自然風景類"},
        {"value":"12","title":"遊憩類"},
        {"value":"13","title":"體育健身類"},
        {"value":"14","title":"觀光工廠類"},
        {"value":"15","title":"都會公園類"},
        {"value":"16","title":"森林遊樂區類"},
        {"value":"17","title":"林場類"},
        {"value":"18","title":"其他"}
      ],
      tags:[],
      fullDataSet: [],
      displayDataSet: [],
      displayPage: 0, //目前顯示頁數
      itemPerPage: 5,  //每頁顯示筆數
      totalPage: 0, //總頁數
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
        this.resetFilter();
        // this.countTotalPage(this.fullDataSet);
        this.filterData();
      },(err)=>{
        console.error(`Error!! `, err)
      });
    },
    resetFilter(){
      this.filterText= "";
      this.filterLocation= "";
      this.filterCategories= [];
      this.displayPage = 0;
      this.totalPage = 0;
    },
    removeTag(tag){
      console.log(`remove tag `, tag)
      switch(tag.kind){
        case "location":
          this.filterLocation = "";
          break;
        case "categories":
          this.filterCategories = this.filterCategories.filter(item=>{
            return item != tag.value;
          })
          break;
        case "text":
          this.filterText = "";
          break;
      }
      this.filterData();
    },
    filterData(){
      console.log(`call filteredData`)
      let tempDataSet = Object.assign([], this.fullDataSet);
      this.tags = [];
      if(this.filterLocation){
        this.tags.push({
          "kind":"location",
          "title": this.filterLocation,
          "value": this.filterLocation
        });
        console.log(`filter by filterLocation=>`, this.filterLocation);        
        tempDataSet = tempDataSet.filter(item=>{
          return item.Zone === this.filterLocation;
        });
        console.log(`filterd length: `, tempDataSet.length);
      }
      if(this.filterCategories.length>0){
        console.log(`filter by filterCategories=>`, this.filterCategories);
        this.categories.forEach(item=>{
          if(this.filterCategories.indexOf(item.value) != -1){
            this.tags.push({
              "kind": "categories",
              "title": item.title,
              "value": item.value
            })
          }
        })
        tempDataSet = tempDataSet.filter(item=>{
          return this.filterCategories.indexOf(item.Class1) != -1
        })
        console.log(`filterd length: `, tempDataSet.length);
      }
      if(this.filterText){
        console.log(`filter by filterText=>`, this.filterText);
        this.tags.push({
          "kind":"text",          
          "title": this.filterText,
          "value": this.filterText
        });
        tempDataSet = tempDataSet.filter(item=>{
          return item.Name.indexOf(this.filterText) != -1;
        })
        console.log(`filterd length: `, tempDataSet.length);
      }
      console.log(`filterData=>`, tempDataSet);
      this.displayDataSet = tempDataSet;
      this.countTotalPage(tempDataSet);
      this.isChange = true;
    },
    countTotalPage(data){
      this.totalPage = Math.ceil(data.length / this.itemPerPage);
      this.displayPage = 1;
    },
    gotoPage(page){
      this.displayPage = page;
    },
  },
  computed: {
    filteredData: function(){
      
    },
    pageData: function() {
      this.isChange = false;
      let start = (this.displayPage-1) * this.itemPerPage;      
      return this.displayDataSet.slice(start,start+this.itemPerPage);      
    }
  },
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
      i
        font-size: 14px
      input
        color: white
        border: none
        background-color: $header-color
        margin-left: 5px
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
            font-size: 22px
            height: 40px
            line-height: 40px
          .desc
            height: 60px
            margin-bottom: 10px
            margin-top: 10px
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
