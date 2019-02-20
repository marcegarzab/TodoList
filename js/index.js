//Add new ToDo:
document.getElementById("postToDo").addEventListener("click", function(event){
	event.preventDefault(); //always should add this to prevent FORM from refreshing

	var check = document.createElement("input");
	var textToDo = document.createElement("label");
	var eachToDo = document.createElement("div");
	check.className = "checkClass";
	eachToDo.className = "eachToDoClass";

	check.type = "checkbox";
	textToDo.textContent = document.getElementById("newToDo").value;

	eachToDo.append(check);
	eachToDo.append(textToDo);

	document.getElementById("listOfToDos").appendChild(eachToDo);
	newToDo.value="";
});

//Clear all checkboxes:
document.getElementById("clearCheckboxButton").addEventListener("click", function(){
	var toDos = document.getElementsByClassName("checkClass");
	for(var x = 0; x < toDos.length; x++){
		toDos[x].checked = false; 
	}
});

//Check all the checkboxes:
document.getElementById("markAllCheckboxButton").addEventListener("click", function(){
	var toDos = document.getElementsByClassName("checkClass");
	for(var x = 0; x < toDos.length; x++){
		toDos[x].checked = true; 
	}
});

//Delete all ToDo's:
document.getElementById("deleteButton").addEventListener("click", function(){
	var toDos = document.getElementsByClassName("eachToDoClass");
	for(var x = 0; x < toDos.length; x++){
		toDos[x].remove();
	}
});


