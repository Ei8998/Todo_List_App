const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Task ထည့်မယ့် Function
function addTask() {

    // Input ထဲက စာသားကို ယူမယ်
    const task = taskInput.value.trim();

    // စာမရိုက်ထားရင် Task မထည့်ဘူး
    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    // List item အသစ် ဖန်တီးမယ်
    const li = document.createElement("li");

    // Task စာသားအတွက် span ဖန်တီးမယ်
    const taskText = document.createElement("span");
    taskText.textContent = task;
    taskText.className = "task-text";

    // Done Button ဖန်တီးမယ်
    const doneBtn = document.createElement("button");
    doneBtn.textContent = "Done";
    doneBtn.className = "done-btn";
    doneBtn.type = "button";

    // Delete Button ဖန်တီးမယ်
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.type = "button";

    // Done နှိပ်ရင် Task ကို ပြီးဆုံးကြောင်း ပြမယ်
    doneBtn.addEventListener("click", function () {
        taskText.classList.toggle("done");

        if (taskText.classList.contains("done")) {
            doneBtn.textContent = "Undo";
        } else {
            doneBtn.textContent = "Done";
        }
    });

    // Delete နှိပ်ရင် Task ကို ဖျက်မယ်
    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    // Element တွေကို List item ထဲထည့်မယ်
    li.appendChild(taskText);
    li.appendChild(doneBtn);
    li.appendChild(deleteBtn);

    // List item ကို စာမျက်နှာမှာ ပြမယ်
    taskList.appendChild(li);

    // Input ကို ပြန်ရှင်းမယ်
    taskInput.value = "";

    // နောက် Task ရိုက်ဖို Input ကို ပြန်ရွေးမယ်
    taskInput.focus();
}

// Add Task Button နှိပ်ရင် Function ကို ခေါ်မယ်
addBtn.addEventListener("click", addTask);

// Enter နှိပ်ရင်လည်း Task ထည့်မယ်
taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});