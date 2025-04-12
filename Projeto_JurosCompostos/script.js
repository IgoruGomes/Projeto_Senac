function calcular() {
    document.getElementById("tabelavalores").innerHTML = "<thead>" +
                    "<td>Sequência</td>" +
                    "<td>Mês</td>" +
                    "<td>Valor ganho</td>" +
                    "<td>Acumulado</td>" +
                "</thead>";
    const meses = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro",];
    let inicial = parseFloat(document.getElementById("inicial").value);
    let mensal = parseFloat(document.getElementById("mensal").value);
    let taxa = parseFloat(document.getElementById("taxa").value);
    let periodo = parseFloat(document.getElementById("periodo").value);
    let total = inicial + mensal
    if (document.getElementById("valorperiodo").value == 2) {
        periodo = periodo * 12;
    }

        for(i = 1; i <= periodo; i++) {
            inicial += mensal;
            document.getElementById("tabelavalores").innerHTML += 
            "<tr>" +
                "<td>" + i + "</td>" +
                "<td>" + meses[(i-1) % 12] + "</td>" +
                "<td>" + Math.round((total - inicial)) + "</td>" +
                "<td>" + Math.round(inicial) + "</td>" +
            "</tr>";
            total = inicial * (1+(taxa/100));
            inicial = total;
        }
}
