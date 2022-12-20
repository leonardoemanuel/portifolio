let idade =document.getElementById('idade')
let ano = new Date()
let anoAtual=ano.getFullYear()
let mes=new Date()
let mesAtual=mes.getMonth()
if(mesAtual == 10 || mesAtual==11){
    idade.innerHTML=anoAtual - 2005
}else{
    idade.innerHTML=(anoAtual -2005)-1
}



