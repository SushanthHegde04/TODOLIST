function addTask() {
    var task = document.getElementById("task").value;
    if (task !== "") {
        var listItem = document.createElement("li");
        listItem.innerHTML = task + '<button class="remove-button" onclick="removeTask(this)">Remove</button>';
        document.getElementById("taskList").appendChild(listItem);
        document.getElementById("task").value = "";
    }
}

function removeTask(button) {
    button.parentElement.remove();
}
