const img = document.querySelector(".img")

const senha = document.querySelector("#inSenha");
const opSenha = document.querySelector("#opSenha");
const btResent = document.querySelector("#btReset");
const btCopy = document.querySelector("#copySenha");

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
        opSenha.style.backgroundColor="#FF7800"
        img.style.backgroundImage = "url('../img/muitoFraca.png')"
    }else if ( numSize >= 5 && numSize <= 7){
        opSenha.textContent = "fraca"
        opSenha.style.backgroundColor="#FFB370"
        img.style.backgroundImage = "url('../img/fraca.png')"
    }else if (numSize >= 8 && numSize <=10) {
        opSenha.textContent = "Boa"
        opSenha.style.backgroundColor="#FFDDBF"
        img.style.backgroundImage = "url('../img/boa.png')"
        
    } else if (numSize >= 11 && numSize <= 15){
        opSenha.textContent = "forte"
        opSenha.style.backgroundColor="#D5F2A5"
        img.style.backgroundImage = "url('../img/forte.png')"
    }else {
        opSenha.textContent = "Muito forte"
        opSenha.style.backgroundColor="#9AE437"
        img.style.backgroundImage = "url('../img/muitoForte.png')"
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
    lengInput.addEventListener("input", () => {
    infoLeng.textContent = lengInput.value
    getPasswordSize(generetPassword(elementsPass()))
})

    //COMEÇAR GERANDO UMA SONHA
getPasswordSize(generetPassword(elementsPass()))

btDeminuir.addEventListener("click", () => {
   const mais = lengInput.value

   let novLength = ""
   for(i = 0; i < mais; i++) {
    novLength = mais[i] - 1
   }
   infoLeng.textContent = novLength
   
 })
 
btAlmentar.addEventListener("click", () => {
    // getPasswordSize()
 })
 
btResent.addEventListener("click", (e) => {
    e.preventDefault()
    getPasswordSize(generetPassword(elementsPass()))
})
btCopy.addEventListener("click", () => {
    navigator.clipboard.writeText(senha.textContent).then(() => {
        alert("Senha copiada")
    })
})