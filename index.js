const inpbox = document.getElementById("inpbox");
const listcontainer = document.getElementById("listcont");

function addtask() {
    if (inpbox.value === '') {

        alert("you must write something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inpbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = `<i class="fa-solid fa-trash"></i>`
        li.appendChild(span);
        li.querySelector("i").addEventListener("click", remove);

        function remove() {
            li.remove()
        }
    }
    inpbox.value = '';
}