const h2Element = document.getElementById("titulo");
// console.log(h2Element.textContent);
const texto = "pedrinho";
h2Element.addEventListener("click" , ()=>{
        //Math função matemática...
        //Os metódos floor, round e ceil eles arredondam os números passados.
        //O método randon retorna um número entre 0 e 1. Ex: 0.1233.
        let r = "";
        let g = "";
        let b = "";
    
        r =  Math.round(Math.random()*255);
        g =  Math.round(Math.random()*255);
        b =  Math.round(Math.random()*255);
    
        this.textContent = "NOVO TÍTULO";
        //deixando o texto em uma cor random toda vez que ele for clicaco
        // h2Element.setAttribute("style","color:rgb("+r+","+g+","+b+");");
        h2Element.setAttribute("style",`color:rgb(${r},${g},${b});`);

});