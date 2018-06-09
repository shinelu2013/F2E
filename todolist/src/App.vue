<template>
  <div id="app">
    <div class="col-md-12 container">      
        <ul class="nav nav-pills bg-primary row justify-content-center">
          <li class="nav-item">
            <a class="nav-link active" data-toggle="tab" href="#tab1" @click="changeFilter()">My Tasks</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#tab2" @click="changeFilter('inprogress')">inprogress</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#tab3" @click="changeFilter('completed')">Completed</a>
          </li>
        </ul>
      
        <div class="tab-content row justify-content-center">
          <!-- <div id="tab1" class="tab-pane active"> -->
          <div class="tab-pane active">
            <div v-for="todo in todoList" :key="todo.id">
              <todo-item :todoData="todo" v-if="todo.display"></todo-item>
            </div>                    
          </div>
          <!-- </div> -->
          <!-- <div id="tab2" class="tab-pane">
            inprogress Tab
          </div>
          <div id="tab3" class="tab-pane">
            Completed Tab
          </div> -->
        </div>            
    </div>
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue';

export default {
  name: "app",
  data() {
    return {
      todoList:[
        {
          id:'1',          
          title: 'Type Something Here',
          deadline: '',
          file: [],
          comment:'',
          status: 'inprogress',
          ismarked: false,
          createDate:'',
          completedDate:''
        },{
          id:'2',          
          title: 'Type Something Here',
          deadline: '5/14',
          file: [{
            filename:'1.txt'
          }],
          comment:'Something comment',
          status: 'inprogress',
          ismarked: true,
          createDate:'',
          completedDate:''
        },{
          id:'3',          
          title: 'Type Something Here',
          deadline: '',
          file: [{
            filename:'1.txt'
          }],
          comment:'Something comment',
          status: 'inprogress',
          ismarked: true,
          createDate:'',
          completedDate:''
        },{
          id:'4',          
          title: 'Type Something Here',
          deadline: '2019/6/18',
          file: [],
          comment:'',
          status: 'inprogress',
          ismarked: false,
          createDate:'',
          completedDate:''
        },{
          id:'5',          
          title: 'Type Something Here',
          deadline: '',
          file: [{
            filename:'1.txt'
          }],
          comment:'',
          status: 'inprogress',
          ismarked: false,
          createDate:'',
          completedDate:''
        } ,{
          id:'6',          
          title: 'Type Something Here',
          deadline: '',
          file: [],
          comment:'',
          status: 'completed',
          ismarked: false,
          createDate:'',
          completedDate:'2018/6/5'
        }      
      ]
    };
  },
  components:{
    todoItem: TodoItem
  },
  created: function(){
    this.initData();
  },
  methods:{
    initData:function(){
      for(let i=0;i<this.todoList.length;i++){
        if(i==0){
          this.todoList[i].displayStatus = 'unfold';
        }else{
          this.todoList[i].displayStatus = 'fold';
        }
        this.todoList[i].display = true;
      }
    },
    changeFilter: function(filterStatus){
      for(let i=0;i<this.todoList.length;i++){
        this.todoList[i].display = false;
        if(!filterStatus || this.todoList[i].status == filterStatus){
          this.todoList[i].display = true;
        }
        this.$set(this.todoList, i, this.todoList[i])
      }
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.nav-link{
  color: #00408B;
}
.nav-link active{
  color: #FFFFFF;
}


</style>
