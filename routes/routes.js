module.exports =(app)=>{
    app.get('/', (req,res)=>{
        sess = req.session;
        if (sess.user) {
            res.render('Home', { user: sess.user });
        } else {
            res.render('Home');
        }
    });

    app.get('/logIn', (req,res)=>{
        res.render('Login');
    });

    app.post('/logIn', (req,res)=>{
        sess = req.session;
        const email = req.body.email;
        const password = req.body.password;
        connection.connect(()=>{
            const query = `SELECT * FROM users WHERE email = ? AND password = ?`;
            connection.query(query,[email,password],(err,result,fields)=>{
                if (err) throw err;
                if (result) {
                    sess.user = result[0];
                    res.redirect('/');
                }
            });
        });
    });
    
    app.get('/logUp', (req,res)=>{
        res.render('Logup');
    });

    app.post('/logUp', (req,res)=>{
        res.redirect('/logIn');
    });

    app.get('*',(req,res)=>{
        res.render('NotFound');
    });
}