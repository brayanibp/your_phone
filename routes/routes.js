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
        res.render('Login', {message: false});
    });

    app.post('/logIn', (req,res)=>{
        sess = req.session;
        const email = req.body.email;
        const password = req.body.password;
        connection.connect(()=>{
            const query = `SELECT * FROM users WHERE email = ? AND password = ?`;
            connection.query(query,[email,password],(err,result)=>{
                if (err) throw err;
                if (result.length > 0) {
                    sess.user = result[0];
                    res.redirect('/');
                } else {
                    res.render('Login', {message: "Please Verify your Email or Password."});
                }
            });
        });
    });
    
    app.get('/logUp', (req,res)=>{
        console.log(req);
        res.render('Logup', {message: false});
    });

    app.post('/logUp', (req,res)=>{
        const user = {
            first_name: req.body.name,
            last_name: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
            credit_card: req.body.credit_card,
            birth_day: req.body.birth_day
        };
        const cpassword = req.body.cpassword;
        if (user.first_name == '' || user.last_name == '' || user.email == '' || user.password == '' || user.credit_card == '' || user.birth_day == '') {
            res.render('Logup', {message: "Please Fill all the Blanks."});
        } else if (user.password != cpassword) {
            res.render('Logup', {message: "Please Verify your Password."});
        } else {
            connection.connect(()=>{
                const query = 'INSERT INTO users SET ?';
                re = connection.query(query,user,(err, result)=>{
                    if (err) {
                        if (err.code == 'ER_DUP_ENTRY')
                        res.render('Logup', {message: "We already have that User Registered. Try Log In..."});
                    } else {
                        res.redirect('/logIn');
                    }
                });
            });
        }
    });

    app.get('/logOut', (req,res)=>{
        sess = req.session;
        sess.destroy();
        res.redirect('/');
    });

    app.get('*',(req,res)=>{
        res.render('NotFound');
    });
}