var allTaskValues=[]; //FOR CHECK AND LOOK AT THE LINEUPS OF TASKS
var allTitleValues=[];
var allTasks=[];
var allTitles=[];
//var allImportants=[];
var temp;

function createTask(str,date){
    var task=document.createElement("div");
    var cTaskInput=document.createElement("input");
    var cTaskEdit=document.createElement("input");
    var cTaskDelete=document.createElement("input");
    var taskTestDiv=document.createElement("div");
    var taskActionsDiv=document.createElement("div");
    var taskDate=document.createElement("input");
        
    task.setAttribute("id", "task");
    cTaskInput.setAttribute("id", "task-text");
    cTaskEdit.setAttribute("id", "task-edit");
    cTaskDelete.setAttribute("id", "task-delete");
    taskTestDiv.setAttribute("id", "task-test");
    taskActionsDiv.setAttribute("id", "actions");
    taskDate.setAttribute("id", "task-date");

    cTaskEdit.setAttribute('type', 'submit');
    cTaskDelete.setAttribute('type', 'submit');
    cTaskInput.setAttribute('type', 'text');
    taskDate.setAttribute("type", "date");
    cTaskInput.readOnly=true;
    cTaskEdit.value="Edit";
    cTaskDelete.value="Delete"
    cTaskInput.value=str;
    taskDate.value=date;
    
    taskTestDiv.append(cTaskInput);
    taskActionsDiv.append(taskDate);
    taskActionsDiv.append(cTaskEdit);
    taskActionsDiv.append(cTaskDelete);

    task.append(taskTestDiv);
    task.append(taskActionsDiv);

    cTaskEdit.addEventListener("click", ()=>{
        if(cTaskEdit.value=="Edit"){
            cTaskEdit.value="Save";
            cTaskInput.style.color="#FFFFFF";
            cTaskInput.readOnly=false;
            for(let i=0;i<allTaskValues.length;i++){
                if(allTaskValues[i]==cTaskInput.value){
                    temp=i;
                    break;
                }
            }
        }
        else{
            cTaskEdit.value="Edit";
            cTaskInput.style.color="#000000";
            cTaskInput.readOnly=true;
            allTaskValues[temp]=cTaskInput.value
            allTasks[temp]=task;
        }
    });

    cTaskDelete.addEventListener("click", ()=>{
        for(let i=0;i<allTaskValues.length;i++){
            if(cTaskInput.value==allTaskValues[i]){
                allTaskValues.splice(i, 1);
                allTasks.splice(i, 1);
            }
        }
        task.parentNode.removeChild(task);
    });

    return task;
}


function createTitle(str){
    var titleDiv=document.createElement("div");
    var titleDivText=document.createElement("div");
    var titleText=document.createElement("input");
    var titleEdit=document.createElement("input");
    var titleDelete=document.createElement("input");
         
    titleDiv.setAttribute("id","task-title");
    titleDivText.setAttribute("id","task-title-text");
    titleText.setAttribute("id","task-title-text-input");
    titleEdit.setAttribute("id","task-title-text-edit");
    titleDelete.setAttribute("id","task-title-text-delete");

    titleText.setAttribute("type","text");
    titleText.readOnly=true;
    titleEdit.setAttribute("type","submit");
    titleDelete.setAttribute("type","submit");
            
    titleText.value=title.value;
    titleEdit.value="Edit";
    titleDelete.value="Delete";
    titleText.value=str;

    titleDivText.append(titleText);
    titleDivText.append(titleEdit);
    titleDivText.append(titleDelete);
    titleDiv.append(titleDivText);

    titleEdit.addEventListener("click", ()=>{
        if(titleEdit.value=="Edit"){
            titleEdit.value="Save";
            titleText.style.color="#0D0D0D";
            titleText.readOnly=false;
            for(let i=0;i<allTitleValues.length;i++){
                if(allTitleValues[i]==titleText.value){
                    temp=i;
                    break;
                }
            }
        }
        else{
            titleEdit.value="Edit";
            titleText.style.color="#FFFFFF";
            titleText.readOnly=true;
            allTitleValues[temp]=titleText.value
            allTitles[temp]=titleDiv;
        }
    });

    titleDelete.addEventListener("click", ()=>{
        for(let i=0;i<allTitleValues.length;i++){
            if(titleText.value==allTitleValues[i]){
                allTitleValues.splice(i, 1);
                allTitles.splice(i, 1);
            }
        }
        titleDiv.parentNode.removeChild(titleDiv);
    });

    return titleDiv;
}


window.addEventListener("load", () => {
    var tasks=document.getElementById("container");
    var input=document.getElementById("form-input");
    var save=document.getElementById("form-submit");
    //var important=document.getElementById("form-important");
    var deadline=document.getElementById("form-deadline");
    var formTitle=document.getElementById("form-title");
    var isImportant=false;

    /*important.addEventListener("click", ()=>{
        if(isImportant){ 
            isImportant=false;
            important.style.color="#FFFFFF";
        }
        else{
            isImportant=true;
            important.style.color="#F20226";
        }
    });*/

    save.addEventListener("click", ()=>{
        if(input.value=="" && formTitle.value=="") alert("Please enter a valid value");
        
        else if(input.value!="" && formTitle.value==""){
            var task=createTask(input.value, deadline.value);
            /*if(isImportant==true && allTaskValues.length!=0){
                for(let i=0;i<allImportants.length;i++){
                    if(allImportants[i]==0){
                        var g=allTasks[i];
                        allTaskValues.push(allTaskValues[i]);
                        allTaskValues[i]=input.value;
                        allTasks.push(allTasks[i]);
                        allTasks[i]=task;
	                tasks.children[i].parentNode.replaceChild(task, tasks.children[i]);
                        tasks.append(g);
                        allImportants.push(0);
                        allImportants[i]=1;
                        console.log(tasks.children[i].id);
                        break;
                    }
                    
                }
            }*/
            //else{
                tasks.append(task);
                allTasks.push(task);
                allTaskValues.push(input.value);
                //allImportants.push(isImportant);
            //}
        }

        else if(input.value=="" && formTitle.value!=""){
	    var isEqual=false;
            for(let i=0;i<allTitleValues.length;i++){
                if(formTitle.value==allTitleValues[i]){
		    isEqual=true;
                    break;
		}
            }
	    if(isEqual==false){
                var title=createTitle(formTitle.value);
                tasks.append(title);
	        allTitleValues.push(formTitle.value);
                allTitles.push(title);
            }
        }

        else{
            var isEqual=false;
            for(let i=0;i<allTitleValues.length;i++){
                if(formTitle.value==allTitleValues[i]){
		    isEqual=true;
                    break;
		}
            }
	    if(isEqual==false){
                var task=createTask(input.value, deadline.value);
                var title=createTitle(formTitle.value);
                title.append(task);
                tasks.append(title);
                
                //TODO: add tasks to allTasks array
                
	        allTitleValues.push(formTitle.value);
                allTitles.push(title);
            }
            else{
                var task=createTask(input.value, deadline.value);
                for(let i=0;i<allTitleValues.length;i++){
                    if(allTitleValues[i]==formTitle.value){
                        allTitles[i].append(task);
                    }
                }
            }
        }
        input.value="";
    });
   

});