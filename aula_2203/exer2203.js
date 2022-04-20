/*Exercicío 1
crie 3 variáveis atribua valores aleatório, calcule a média dos números informados e exiba na tela */
var a = 5;
var b = 30;
var c = 40;
var media;
media = (a+b+c)/3;
console.log("Exercicío 1");
console.log("média dos números é: " + media);

/*Exercicío 2
Crie 2 váriaveis atribua valores aleatorios e verifique qual é o maior e exiba na tela */
console.log("Exercicío 2");
var a = 10;
var b = 20;
if (a > b) {
    console.log("o número maior é: " + a );
} else {
    console.log("o número maior é: " + b);
}
/*Exercicío 3
Faça um programa que calcule a tabuada de um número */
console.log("Exercicío 3");
var x = 10;
var tab;
for(var i=1; i<=10;i++){
    tab = x * i;
    console.log(x + ' x ' + i + ' = ' + tab);
    
}
/*Exercicío 4
*/
console.log("Exercicío 4");
for(var i=1; i<=10;i++){
    console.log(i + ' x ' + 1 + ' = ' + 1 * i);
    console.log("");
    console.log(i + ' x ' + 2 + ' = ' + 2 * i);
    console.log("");
    console.log(i + ' x ' + 3 + ' = ' + 3 * i);
    console.log("");
    console.log(i + ' x ' + 4 + ' = ' + 4 * i);
    console.log("");
    console.log(i + ' x ' + 5 + ' = ' + 5 * i);
    console.log("");
    console.log(i + ' x ' + 6 + ' = ' + 6 * i);
    console.log("");
    console.log(i + ' x ' + 7 + ' = ' + 7 * i);
    console.log("");
    console.log(i + ' x ' + 8 + ' = ' + 8 * i);
    console.log("");
    console.log(i + ' x ' + 9 + ' = ' + 9 * i);
    console.log("");
    console.log(i + ' x ' + 10 + ' = ' + 10 * i);
    console.log("-------------------------------------------------------------")
} 

/* Faça um programa que calcule o preçode um produto, calcule e mostre o novo preço sabendo-se que o preço atual é R$1500 e este sofreu um desconto de 10%.
*/