function calcular() {
    document.getElementById("main").style.borderRadius = "30px 30px 0 0";
    document.getElementById("main2").style.display = "block";
    document.getElementById("main3").style.display = "block";
    document.getElementById("tabelavalores").innerHTML = "<thead>" +
                    "<td>Sequência</td>" +
                    "<td>Mês</td>" +
                    "<td>Total investido</td>" +
                    "<td>Valor ganho</td>" +
                    "<td>Acumulado</td>" +
                "</thead>";
    const meses = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro",];
    let inicial = parseFloat(document.getElementById("inicial").value);
    let mensal = parseFloat(document.getElementById("mensal").value);
    let taxa = parseFloat(document.getElementById("taxa").value);
    let periodo = parseFloat(document.getElementById("periodo").value);
    let total = inicial + mensal
    let totalinvestido = inicial
    let totaljuros = 0
    let mudarcor = true
    let styleVar = " style='background-color: white' "
    if (document.getElementById("valorperiodo").value == 2) {
        periodo = periodo * 12;
    }

        for(i = 1; i <= periodo; i++) {
            totalinvestido += mensal;
            inicial += mensal;
            total = inicial * (1+(taxa/100));
            document.getElementById("tabelavalores").innerHTML += 
            "<tr" + styleVar + ">" +
                "<td>" + i + "</td>" +
                "<td>" + meses[(i-1) % 12] + "</td>" +
                "<td> R$ " + totalinvestido + "</td>" +
                "<td> R$ " + Math.round((total - inicial)) + "</td>" +
                "<td> R$ " + Math.round(total) + "</td>" +
            "</tr>";
            if (mudarcor == true) {
                styleVar = " style='background-color: lightblue' "
                mudarcor = false;
            } else {
                mudarcor = true;
                styleVar = " style='background-color: white' "
            }
            totaljuros += (total - inicial);    
            inicial = total;
        }
    document.getElementById("valor-juros").innerHTML = "R$" + Math.round(totaljuros);
    document.getElementById("valor-investido").innerHTML = "R$" + Math.round(totalinvestido);
    document.getElementById("valor-final").innerHTML = "R$" + Math.round(total);
}