
function main()
{
 var resp = document.getElementById('resp');
 var a = parseFloat(document.getElementById("a").value);
 var b = parseFloat(document.getElementById("b").value);
 var texto='';

 if(document.getElementById('soma').checked)
  texto = soma(a, b);
 if(document.getElementById('subtracao').checked)
  texto = subtracao(a, b);
 if(document.getElementById('multiplicacao').checked)
  texto = multiplicacao(a, b);
 if(document.getElementById('divisao').checked)
  texto = divisao(a, b);
  if(document.getElementById('elevar').checked)
  texto = divisao(a, b);

  document.getElementById('resp').innerText = texto;
}

function main2(){
    var c = parseFloat(document.getElementById("c").value);
    var texto='';   

    texto = divisao(c);
    document.getElementById('resp2').innerText = texto;
}
function soma(x, y)
{
    var soma = (x + y)
    document.getElementById('resp').innerText = soma
    console.log(soma)

    const btnSum = document.getElementById('soma')
    btnSum.addEventListener('click',SUM)
  return (soma);
}

function subtracao(x, y)
{
    var sub = (x - y)
    document.getElementById('resp').innerText = sub
    console.log(sub)

    const btnSum = document.getElementById('subtracao')
    btnSum.addEventListener('click',sub)
  return (sub);  
}

function multiplicacao(x, y)
{
    var mult = (x * y)
    document.getElementById('resp').innerText = mult
    console.log(sub)

    const btnSum = document.getElementById('multiplicacao')
    btnSum.addEventListener('click',sub)
  return (mult);
}

function divisao(x, y)
{
    var div = (x/y)
    document.getElementById('resp').innerText = div
    console.log(sub)

    const btnSum = document.getElementById('divisao')
    btnSum.addEventListener('click',div)
  return (div);
}

function elevar(x, y)
{
    var eleva = (x**y)
    document.getElementById('resp').innerText = eleva
    console.log(sub)

    const btnSum = document.getElementById('elevar')
    btnSum.addEventListener('click',eleva)
  return (eleva);
}

function calcularEquacao(x) {
    var equacao = ((3 * x) ** 2 + 2 * x - 5)
    document.getElementById('resp2').innerText = equacao

    const btnSum = document.getElementById('elevar')
    btnSum.addEventListener('click',equacao)

    return (equacao);
  }
  

  