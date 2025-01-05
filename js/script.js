const senha = document.querySelector("#inSenha");
const opSenha = document.querySelector("#opSenha");
// const btResent = document.querySelector("#btReset");
// const btCopy = document.querySelector("#btCopy");

const lengInput = document.querySelector("#numCaracters")
const infoLeng = document.querySelector(".leng")

const btDeminuir = document.querySelector("#deminuirCaracters")
const btAlmentar = document.querySelector("#almentarCaracters")

const letterMaior = document.getElementById("letterMaior")
const letterMenor = document.getElementById("letterMenor")
const numbers = document.getElementById("number")
const caractersEspeciais = document.getElementById("caractersEspeciais")

function elementsPass() {
    const charType = []

    const letterCase = ("ABCÇDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase())
    const letterUppcase = ("ABCÇDEFGHIJKLMNOPQRSTUVWXYZ")
    const num = ("1234565789");
    const symboll = ("!#$%&()*+/<=>?@{|}");
    
    if(letterMaior && letterMaior.checked) {
        charType.push(letterUppcase)
    }
    if(letterMenor && letterMenor.checked) {
        charType.push(letterCase)
    }
    if(numbers && numbers.checked) {
        charType.push(num)
    }
    if(caractersEspeciais  && caractersEspeciais.checked) {
         charType.push(symboll)
    }

    return charType
}
    
const caractersElement = (charType) => {
    const chatValue =  Math.floor(Math.random() * charType.length)
    
    return charType[chatValue][Math.floor(Math.random() * charType[chatValue].length)]  

}

const getPasswordSize = () => {
    const numSize = lengInput.value

    if( numSize <= 5) {
        opSenha.textContent = "muito fraca"
    }else if ( numSize >= 6 && numSize <= 8){
        opSenha.textContent = "fraca"
    }else if (numSize >= 9 && numSize <=14) {
        opSenha.textContent = "forte"
    } else {
        opSenha.textContent = "muito forte"
    }
}
    
const generetPassword = (charType) => {
    const size = lengInput.value
    let passLength = ""        
    
    while( passLength.length < size) {
        passLength += caractersElement(charType)
    }

    senha.innerHTML = `${passLength}`
}


        //Elemento Input - bolinha valor
infoLeng.textContent = lengInput.value
lengInput.addEventListener("change", () => {
    infoLeng.textContent = lengInput.value
    getPasswordSize()
})
    


btDeminuir.addEventListener("click", () => {
   generetPassword(elementsPass())
 })
 
 btAlmentar.addEventListener("click", () => {
    // getPasswordSize()
 })