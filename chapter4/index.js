const express=require('express');

const app=express();

app.use(express.json());

app.get('/', (req, res) => {

    return res.json({
        message: 'Chapter 4'
    });
});

app.listen(3000, () => {
    console.log('listening on port 3000');
})