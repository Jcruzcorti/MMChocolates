// Inicio de Javascript


const  pi = document.getElementsByClassName("pi")

for (const f of pi) {
    const newPi = `<strong> ${f.innerText} </strong>`
    console.log(newPi);
    f.innerHTML = newPi
}