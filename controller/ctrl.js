window.addEventListener("load", init);

function init() {
    document.getElementById("addbtn").addEventListener("click", addTask);
    document.getElementById("searchbtn").addEventListener("click",searchTask);
    document.getElementById("deletebtn").addEventListener("click",deleteTask);
    document.getElementById("sortbtn").addEventListener("click",sortTask);
}

function addTask() {
    var tskname = document.getElementById("tskname").value;
    var tskdesc = document.getElementById("tskdesc").value;
    var ul = document.getElementById("tsklist");
    var li = document.createElement("li");
    li.className = "pending";
    tskOp.add(tskname, tskdesc);
    ul.appendChild(li).innerHTML = tskOp.id + " " + tskname + " " + tskdesc;
    li.addEventListener("click", toggle);
    updateCount();
}

function searchTask(){
    var search=document.getElementById("searchlbl").className;
    alert(search);
    if(search=="hidden"){
        alert(search);
        search="shown";
        alert(search);
    }
    else{
        search="hidden";
    }
}

function deleteTask(){
    tskOp.delete();
    //alert(arr);
    print(tskOp.tskArray);
}

function sortTask(){
    tskOp.sort();
    print(tskOp.tskArray);
}

function toggle() {
    var arr = this.innerHTML.split(" ");
    var id = arr[0];
    tskOp.toggleTask(id);
    if (this.className == "pending") {
        this.className = "completed";
    } else {
        this.className = "pending";
    }
    updateCount();
}

function updateCount() {
    document.getElementById("pnd").innerHTML = tskOp.tskPending();
    document.getElementById("cmp").innerHTML = tskOp.tskCompleted();
}

function print(count) {
    var ul=document.getElementById("tsklist");
    ul.innerHTML="";
    count.forEach(function(i){
        var li = document.createElement("li");
        li.className = "pending";
        li.innerHTML=i.id+" "+i.name+" "+i.desc;
        ul.appendChild(li);
        li.addEventListener("click", toggle);
    });
    updateCount();
}