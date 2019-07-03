const API_DIR = '/API';

module.exports =(app)=>{
    app.get(`${API_DIR}/phones`,(req,res)=>{
        const q = `SELECT phones.id AS phone_id,
                          phones.image_url AS phone_image, 
                          CONCAT(trademarks.name, ' ', phones.model) AS phone_name, 
                          phones.price AS phone_price, 
                          phones.inventory_quantity AS inventory 
                   FROM phones 
                   INNER JOIN trademarks 
                   ON phones.trademark_id = trademarks.id`;
        connection.query(q,(err,result)=>{
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