// console.group("mensagens de erro, criadas pelo dev"); agrupa e ja aparece na tela
console.groupCollapsed("mensagens de erro, criadas pelo dev"); // agrupa e fica escondido
console.log("Escrevendo no console");
console.error("Erro: criando erro");
console.warn("Mensagem de aviso, não intefere no funcionamento do javaScript");
let n = 12;
if (n>10) {
    console.error("numero não pode ser maior que 10");
}
console.assert(n<=10, "numero não pode ser maior que 10");
console.groupEnd();

console.table([
    [1,2,3], // primeira linha
    [2,4,6] // segunda linha
]);

console.table(
    [
        {name: "Marco",idade:29},
        {name: "Renata",idade:41},
    ]
);