const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            todoList: [],
            text: "",
            willBe: 0,
            activeWillBe: 0,
            completedItem:0
        }
    },
    methods: {
        addItem(event) {
            if (this.text != "") {
                this.todoList.push({
                    id: this.counter,
                    text: this.text,
                    completed: false,
                    isClick: false,
                    isCheck: false
                }),
                this.text = "";
                this.counter++;
                this.willBe++;
            }
        },
        removeItem(todoItem) {
            this.todoList = this.todoList.filter((todo) => todo !== todoItem)
            this.willBe--;
            this.countItem(todoItem);
            this.countCompleted(todoItem);
        },
        countItem(todo){
            todo.isCheck=!todo.isCheck
            this.activeWillBe = 0;
            this.todoList.forEach((element) => {
                if(element.isCheck == true){
                    this.activeWillBe++;
                    element.isClick=false;
                }
                console.log(element);
            });
        },
        countCompleted(todo){
            todo.isClick=!todo.isClick;
            this.completedItem=0;
            this.todoList.forEach(element=>{
                if(element.isClick == true){
                    this.completedItem++;
                }
            });
        }
    },
    computed: {
        
    }

}).mount("#app");