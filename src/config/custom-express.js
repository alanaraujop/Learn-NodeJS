import express from 'express';
import consign from 'consign';
import { json } from 'body-parser';

export default function Config() {
    var app = express();

    app.use(json());

    consign()
        .include('./src/controllers')
        .then('./src/persistencia')
        .into(app);
    return app;
}