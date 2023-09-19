
let add = document.getElementById("task-add");

add.addEventListener("click", addTask);

let list_detailsID;
let checkboxID;
let taskID;
let x = 0;

function addTask() {
    let input = document.getElementById("task-input");
    let lists = document.getElementById("lists");


    if (input.value === "") {
        alert("Entry should not be empty!");
    } else {
        ++x;
        list_detailsID = "list_details" + x;
        checkboxID = "checkboxID" + x;
        taskID = "taskID" + x;

        let list_details = document.createElement("div");
        list_details.className = "list_details";
        list_details.id = list_detailsID;
        lists.appendChild(list_details);

        let list_details_div = document.getElementById(list_detailsID);
        let input_div = document.createElement("input");
        input_div.id = checkboxID;
        input_div.setAttribute("type", "checkbox");
        list_details_div.appendChild(input_div);

        let li = document.createElement("li");
        li.className = "task1";
        li.id = taskID;
        li.textContent = input.value;
        list_details_div.appendChild(li);

        input.value = "";
    }
}

let clear_all = document.getElementById('clr');
clear_all.addEventListener("click", Clear_all);
function Clear_all() {
    document.getElementById('list_ul').innerHTML = "";
}

document.addEventListener("click", (e) => {
    let elementid = e.target.id;

    let parentid = e.target.parentElement.id;

    let parentElementID = "list_details";

    let deleteKey = document.getElementById("dlt");
    deleteKey.addEventListener("click", () => {
        for (let i = 1; i <= x; i++) {
            if (parentElementID + i === parentid) {
                document.getElementById(parentid).style.display = "none";
            }
        }
    })
})