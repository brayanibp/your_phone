module.exports =(app)=>{
    app.get('/', (req,res)=>{
        res.send('Hi there');
    });

    app.get('/logIn', (req,res)=>{
        res.send('You are loging on our website');
    });

    app.post('/logIn', (req,res)=>{
        console.log(req.body);
    });
    
    app.get('/logUp', (req,res)=>{
        res.send('You are loging up on our website');
    });

    app.get('*',(req,res)=>{
        res.send('ERROR 404 NOT FOUND');
    });
}