// ================== SANA + SOAT ==================
function updateTime() {
    const now = new Date();

    const months = [
        "yanvar", "fevral", "mart", "aprel", "may", "iyun",
        "iyul", "avgust", "sentyabr", "oktyabr", "noyabr", "dekabr"
    ];

    const day = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();

    const date = `${day} ${month}, ${year}`;

    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    const time = `${h}:${m}:${s}`;

    document.getElementById("date").textContent = date;
    document.getElementById("clock").textContent = time;
}

setInterval(updateTime, 1000);
updateTime();


// ================== TODO ==================

const input = document.getElementById("todoInput");
const btn = document.getElementById("addBtn");
const list = document.getElementById("todoList");

// localStorage dan olish
let todos = JSON.parse(localStorage.getItem("todos")) || [];

// chiqarish
function render() {
    list.innerHTML = "";

    todos.forEach(todo => {
        const li = document.createElement("li");

        const text = document.createElement("span");
        text.textContent = todo.text;

        const time = document.createElement("span");
        time.textContent = todo.time;

        li.appendChild(text);
        li.appendChild(time);

        list.appendChild(li);
    });
}

// sana + vaqt olish funksiyasi
function getTime() {
    const now = new Date();

    const months = [
        "yanvar", "fevral", "mart", "aprel", "may", "iyun",
        "iyul", "avgust", "sentyabr", "oktyabr", "noyabr", "dekabr"
    ];

    const day = now.getDate();
    const month = months[now.getMonth()];

    let h = now.getHours();
    let m = now.getMinutes();

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;

    return `${day} ${month} ${h}:${m}`;
}

// qo‘shish
function addTodo() {
    const value = input.value.trim();
    if (value === "") return;

    const newTodo = {
        text: value,
        time: getTime()
    };

    // localStorage
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));

    console.log("LocalStorage:", todos);

    render();
    input.value = "";
}

// events
btn.addEventListener("click", addTodo);

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") addTodo();
});

// sahifa ochilganda
render();