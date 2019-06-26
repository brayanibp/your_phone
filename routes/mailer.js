// email sender function
module.exports =app=> {
    app.get('/mailer',(req,res)=>{
        // Definimos el transporter
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
               user: 'brayanbernal0710@gmail.com',
               pass: 'Br4y4n1sa.'
            }
        });
        // Definimos el email
        const mailOptions = {
            from: 'Your Phone',
            to: 'brayanbernal@gmail.com',
            subject: 'Clave de Recuperación',
            text: '123456789'
        };

        // Enviamos el email
        transporter.sendMail(mailOptions, function(error, info){
            if (error){
                console.log(error);
                res.send(500, err.message);
            } else {
                console.log("Email sent");
                res.status(200).jsonp(req.body);
            }
        });
    });
}