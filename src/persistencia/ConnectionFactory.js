import { createConnection } from 'mysql';

function createDBConnection() {
    return createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'payfast'
    });
}

export default function() {
    return createDBConnection;
}