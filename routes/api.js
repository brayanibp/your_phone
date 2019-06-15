const API_DIR = 'Api';

module.exports =(app)=>{
    app.get(`/${API_DIR}/phones`,(req,res)=>{
        res.json(data);
    });
}