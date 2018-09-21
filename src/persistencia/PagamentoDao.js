class PagamentoDao {
    constructor(connection) {
        this._connection = connection;
    }
    salva(pagamento, callback) {
        this._connection.query('INSERT INTO pagamentos SET ?', pagamento, callback);
    }
    lista(callback) {
        this._connection.query('select * from pagamentos', callback);
    }
    buscaPorId(id, callback) {
        this._connection.query('select * from pagamentos where id = ?', [id], callback);
    }
}




export default function() {
    return PagamentoDao;
}