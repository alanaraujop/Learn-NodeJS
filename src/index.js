import Config from './config/custom-express';
var app = Config();

app.listen(3000, () => {
    console.log("Get ok");
});