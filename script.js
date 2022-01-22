let idade =document.getElementById('idade')
let ano = new Date()
let anoAtual=ano.getFullYear()
let mes=new Date()
let mesAtual=mes.getMonth()
if(mesAtual==10){
    idade.innerText=`${anoAtual-2005}`
}
