module.exports = function(app) {
    app.get('/pagamentos', (req, res) => {
        console.log('request recebida');
        res.send('OK');
    });
    app.post('/pagamentos/pagamento', (req, res) => {
        let pagamento = req.body;
        console.log(pagamento);
        res.send("Pagamento recebido");
    })
}