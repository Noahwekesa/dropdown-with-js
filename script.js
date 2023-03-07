const dropdownbtn = document.querySelector(".dropdown--button");
const dropdownmenu = document.querySelector(".dropdown--menu");

dropdownbtn.addEventListener("click", () => {
    //get drop down menu
    dropdownmenu.classList.toggle('hide');
    //remove hide class
})

//hide the window whenever you click on the dropdown options
window.addEventListener("click", (e) => {
    if (e.target !== dropdownbtn){
        dropdownmenu.classList.add(".hide");
}
})