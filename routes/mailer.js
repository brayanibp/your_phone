const nodemailer = require('nodemailer');
module.exports =app=> {
    app.post('/mailer',(req,res)=>{
        console.log(req.body);
        const email = req.body.email;
        let recovery_user = {};
        connection.connect(()=>{
            const query = 'SELECT * FROM users WHERE email = ?';
            connection.query(query,[email],async (err,result)=>{
                if (err) {
                    console.log(err);
                } else if (result.length > 0) {
                    recovery_user = await result[0];
                    console.log(recovery_user);
                    //Definimos el Transporter
                    const transporter = nodemailer.createTransport({
                        //service: 'Gmail',
                        host: "smtp.gmail.com",
                        secureConnection: false,
                        port: 587,
                        requiresAuth: true,
                        domains: ["gmail.com", "googlemail.com"],
                        auth: {
                           user: 'yourphonedatcom@gmail.com',
                           pass: '12345P**'
                        },
                        connectionTimeout: 2 * 60 * 1000 //2MIN
                    });
                    // Definimos el email
                    const mailOptions = {
                        from: 'yourphonedatcom@gmail.com',
                        to: recovery_user.email,
                        subject: 'Clave de Recuperación',
                        html: `<tr><td>Hey ${recovery_user.first_name} te informamos que tu ultima contraseña utilizada fue <b>${recovery_user.password}</b></td></tr>
                               <tr><td>--YourPhone.com</td></tr>`
                    };
            
                    // Enviamos el email
                    transporter.sendMail(mailOptions,(err,inf)=>{
                        if (err) {
                            console.log(err);
                            res.render('Recovery', {message: "Sorry, We got an Error"});
                        } else {
                            console.log(inf);
                            console.log(nodemailer.getTestMessageUrl(info));
                            res.render('Recovery', {message: "Your Password it's going to you"});
                        }
                    });
                }
            });
        });
    });
}