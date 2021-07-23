var app = new Vue({
  el: "#app",
  methods: {
    calculoTotal(pessoa, mes) {
      let calculoTotal = 0;
      for(conta in this.pessoas[pessoa].contas){
        calculoTotal += parseFloat(this.pessoas[pessoa].contas[conta].gastoAnual[mes]);
      }
      return calculoTotal;
    }
  },
  data: {
    money: {
      decimal: ',',
      thousands: '.',
      prefix: 'R$ ',
      precision: 2,
      masked: false /* doesn't work with directive */
    },
    meses: [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ],
    pessoas: [
      {
        nome: "Ricardo",
        rendaMensal: 1300,
        cor: "rgb(96, 232, 118)",

        contas: [
          {
            nomeBanco: "Nubank",
            gastoAnual: [
              111.80, 100, 100, 200, 300, 400, 500, 100.89, 11, 22, 44, 10.50,
            ],
          },
          {
            nomeBanco: "Inter",
            gastoAnual: [
              110, 100, 100, 200, 300, 400, 500, 100.89, 11, 22, 44, 10.50,
            ],
          },
          {
            nomeBanco: "Outros gastos",
            gastoAnual: [
              110, 100, 100, 200, 300, 400, 500, 100.89, 11, 22, 44, 10.50,
            ],
          },
        ],
      },
      {
        nome: "Juliana",
        rendaMensal: 600,
        cor: "pink",

        contas: [
          {
            nomeBanco: "Nubank",
            gastoAnual: [
              110, 100, 100, 200, 300, 400, 500, 100.89, 11, 22, 44, 10.50,
            ],
          },
          {
            nomeBanco: "Inter",
            gastoAnual: [
              110, 100, 100, 200, 300, 400, 500, 100.89, 11, 22, 44, 10.50,
            ],
          },
          {
            nomeBanco: "Outros gastos",
            gastoAnual: [
              110, 100, 100, 200, 300, 400, 500, 100.89, 11, 22, 44, 10.50,
            ],
          },
        ],
      },
    ],
  },
});
