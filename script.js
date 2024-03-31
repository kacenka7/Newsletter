
const elForm = document.querySelector("#registrace")

elForm.addEventListener("input", (event) => {

    const pole = document.querySelector("input")
    const email = document.querySelector("#email")


    if(event.target.value.length > 1 && (email.value.includes("@"))) {
    pole.classList.remove("ramecek")
    
    }
    else {
        pole.classList.add("ramecek")
    }

})

elForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const email = document.querySelector("#email")
    elForm.textContent = `Hříšná duše ${email.value} byla zaregistrována`

})





