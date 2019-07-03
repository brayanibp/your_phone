const API_DIR = '/API';

module.exports =(app)=>{
    app.get(`${API_DIR}/phones`,(req,res)=>{
        connection.query('SELECT * FROM phones INNER JOIN phone_description ON phones.id = phone_description.phone_id',(err,result)=>{
            if (err) throw err;
            res.json(result);
        });
    });

    app.get(`${API_DIR}/states`,(req,res)=>{
        connection.connect(()=>{
            connection.query('SELECT * FROM states',(err,result)=>{
                if (err) throw err;
                res.json(result);
            });
            connection.end();
        });
    });

    app.post(`${API_DIR}/state/:id`,(req,res)=>{
        post_data = req.body.id;
        console.log(post_data);
        connection.connect(()=>{
            let q = `SELECT * FROM states WHERE id=${post_data}`;
            connection.query(q,(err,result)=>{
                if (err) throw err;
                res.json(result);
            });
            connection.end();
        });
    });
}