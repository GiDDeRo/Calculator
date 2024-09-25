const display = document.getElementById("display");
const result = document.getElementById("equal");

result.addEventListener("click", e=> {
    try {
            display.value = eval(display.value)
    } catch (error) {
        alert("Input the right syntax")
        display.value = ""
    }
})