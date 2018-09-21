"use strict";

module.exports = function (app) {
    app.get('/pagamentos/pagamento', function (req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");

        console.log('request recebida');

        var connection = app.persistencia.ConnectionFactory();
        var pagamentoDao = new app.persistencia.PagamentoDao(connection);

        pagamentoDao.lista(function (err, resultado) {
            if (err) {
                res.json(err);
                console.log(err);
            } else {
                res.json(resultado);
            }
        });
    });
    app.post('/pagamentos/pagamento', function (req, res) {
        console.log("Processando um novo pagamento...");

        var pagamento = req.body;
        pagamento.data = new Date();

        var connection = app.persistencia.ConnectionFactory();
        var pagamentoDao = new app.persistencia.PagamentoDao(connection);

        pagamentoDao.salva(pagamento, function (err, resultado) {
            if (err) {
                res.json(err);
                console.log(err);
            } else {
                res.json(pagamento);
                console.log(resultado);
            }
        });
    });
};