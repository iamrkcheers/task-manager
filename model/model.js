function addobj(id, name, desc, completed) {
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.completed = completed;
}

var tskOp = {
    id: 0
    , completed: false
    , tskArray: [],

    add: function (name, desc) {
        var x = new addobj(++this.id, name, desc, this.completed);
        //tskObj=x;
        this.tskArray.push(x);
    },
    
    delete:function(){
        this.tskArray=this.tskArray.filter(function(obj){
            return !obj.completed;
        });
    },
    
    sort:function(){
      this.tskArray.sort(function(a,b){
          return a.name.localeCompare(b.name);
      });  
    },

    toggleTask: function (id) {
        this.tskArray.forEach(function (obj) {
            if (obj.id == id) {
                obj.completed = !obj.completed;
            }
        });
    },

    tskPending: function () {
        var arr = this.tskArray.filter(function (obj) {
            return !obj.completed;
        });
        return arr.length;
    },

    tskCompleted: function () {
        var arr = this.tskArray.filter(function (obj) {
            return obj.completed;
        });
        return arr.length;
    }
}