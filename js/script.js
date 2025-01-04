const senha = document.querySelector("#inSenha");
// const opSenha = document.querySelector("#opSenha");
// const btResent = document.querySelector("#btReset");
// const btCopy = document.querySelector("#btCopy");

const lengInput = document.querySelector("#numCaracters")
const infoLeng = document.querySelector(".leng")

const btDeminuir = document.querySelector("#deminuirCaracters")
const btAlmentar = document.querySelector("#almentarCaracters")

const elementsPass = () => {
    const charType = []

    const letterMaior = document.getElementById("letterMaior")
    const letterMenor = document.getElementById("letterMenor")
    const numbers = document.getElementById("number")
    const caractersEspeciais = document.getElementById("caractersEspeciais")
    

    if(letterMaior && letterMaior.checked) {
        charType.push("ABCÇDEFGHIJKLMNOPQRSTUVWXYZ")
    }
    if(letterMenor && letterMenor.checked) {
        charType.push("ABCÇDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase())
    }
    if(numbers && numbers.checked) {
        charType.push("1234565789")
    }
    if(caractersEspeciais  && caractersEspeciais.checked) {
        charType.push("!#$%&()*+/<=>?@{|}")
    }
    
    caractersElement(charType)
    generetPassowrd(charType)
}

const caractersElement = (charType) => {
    const chatValue =  Math.floor(Math.random() * charType.length)

    console.log(charType[chatValue][Math.floor(Math.random() * charType[chatValue].length)] )
}

const generetPassowrd = () => {
    const length = lengInput.value
    let passLength = ""
   
    while(passLength.length < length) {
        passLength += charType
    }
    
    return passLength
}


    //Elemento Input - bolinha valor
infoLeng.textContent = lengInput.value
lengInput.addEventListener("change", () => {
    infoLeng.textContent = lengInput.value
})




btDeminuir.addEventListener("click", () => {
   console.log(elementsPass(generetPassowrd()))
})

btAlmentar.addEventListener("click", () => {
    generetPassowrd()
})