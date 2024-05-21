const express = require ('express');
const app = express();
const port = 8000;


app.get('/', (req, res) => { //a "/" a helyet jelöli tehát ha a főoldalon vagyunk akkor az fog megjelenni hogy "szonja éhes", ha /msg akkor localhost:8000/msg és az arra beállított szöveg fog megjelnni
    res.send('szonja éhes')
});

app.get('/pelda', (req, res) => { 
    res.json({üzenet: 'meki'})
});

app.listen(port, () => {
    console.log(`Listening: localhost: ${port}`)
});  