<template>
    <div class="todoItem container" :class="{'focusItem': todoList.ismarked}">
        <div class="row todo-header">
            <div class="todo-title col-md-9">
                <label class="customCheck" :class="{'completedText': todoList.status=='completed' }">{{todoList.title}}
                    <input type="checkbox" :checked="todoList.status=='completed'">
                    <span class="checkmark"></span>
                </label>                
            </div>
            <div class="todo-mark col-md-1"><i class="far fa-star" :class="{'fa-star-fill': todoList.ismarked}"></i></div>
            <div class="todo-edit col-md-1"><i class="fas fa-pencil-alt"></i></div>
        </div>
        <div class="row todo-body" v-show="todoList.displayStatus=='unfold'">
            <div class="container">
                <div class="row todo-deadline">
                    <div class="container">
                    <div class="row"><i class="far fa-calendar-alt mr10"></i>&nbsp;Deadline</div>
                    <div class="row">
                    <input type="text" placeholder="yyyy/mm/dd" size="10">&nbsp;&nbsp;
                    <input type="text" placeholder="hh:mm" size="10">
                    </div>
                    </div>
                </div>
                <div class="row todo-file">
                    <div class="container">
                    <div class="row"><i class="far fa-file"></i>&nbsp;File</div>
                    <div class="row">
                        <button class="btn btn-outline-secondary"><i class="fas fa-plus"></i></button>
                    </div>
                    </div>
                </div>
                <div class="row todo-comment">
                    <div class="container">
                    <div class="row"><i class="far fa-comment"></i>&nbsp;Comment</div>
                    <div class="row">
                        <textarea cols="35" rows="4" placeholder="type your memo here">
                        </textarea>
                    </div>
                    </div>
                </div>               
            </div>
        </div>
        <div class="row todo-footer" v-show="todoList.displayStatus=='unfold'">
            <div class="btn-group col-md-12 p-0">
                <div class="col btnCancel"><i class="fas fa-times mr-2"></i>Cancel</div>
                <div class="col btnAddTask"><i class="fas fa-plus mr-2"></i>Add Task</div>
            </div>
        </div>
        <div class="row todo-hud" v-show="todoList.displayStatus=='fold'">
            <i class="far fa-calendar-alt ml-2" v-if="todoList.deadline != ''"> {{ formatDate(todoList.deadline)}}</i>
            <i class="far fa-file ml-2" v-if="todoList.file.length>0"></i>
            <i class="far fa-comment ml-2" v-if="todoList.comment != ''"></i>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    todoData: {
      type: Object
    }
  },
  data(){
      return {
          todoList: this.todoData
      }
  },
  mounted: function(){
      console.log(`todoList=>`, this.todoList)
  },
  methods: {
      changeDisplayStatus: function(){
          if(this.todoList.displayStatus=='fold'){
              this.todoList.displayStatus=='unfold';
          }else{
              this.todoList.displayStatus=='fold';
          }
      },
      formatDate: function(val){
        //   let dt = new Date(val);
        //   return `${dt.getMonth()+1}/${dt.getDate()}`;
        return val;
      }
  }
};
</script>

<style scoped>
.todoItem {
    min-width: 360px;
    border: 1px solid black;
    margin-top: 10px;
}
.todo-header{
    /* padding-top: 5px;
    padding-bottom: 5px; */
    height: 40px;
    line-height: 40px;
}

.todo-body{
    border-top: 1px solid gray;
    padding-top: 10px;
    background-color: #F2F2F2;        
}
.todo-body>div{
    margin-left: 20px;
}

.todo-body .todo-deadline,.todo-file,.todo-comment{
    margin-bottom: 10px;
}

.todo-btn{

}

.customCheck{
    position: relative;
    padding-left: 35px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.customCheck input  {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.checkmark {
  position: absolute;
  top: 8px;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
}

/* On mouse-over, add a grey background color */
.customCheck:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.customCheck input:checked ~ .checkmark {
  background-color: #2196F3;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.customCheck input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.customCheck .checkmark:after {
  left: 9px;
  top: 5px;
  width: 7px;
  height: 13px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.btnCancel{
    background-color: #FFFFFF;
    color: #D0021B;
}

.btnAddTask{
    background-color: #4A90E2;
    color: #FFFFFF;
}

.btn-group > div{
    cursor: pointer;
    height: 30px;
    line-height: 30px;
}

.todo-hud{
    margin-left: 50px;
    margin-bottom: 5px;
}

.focusItem{
    background-color: #FFF2DC;
}

.fa-star-fill{
    font-weight: 900;
    color: #F5A623;
}

.completedText{
    text-decoration-line: line-through;
    color:#9B9B9B;
}
</style>
