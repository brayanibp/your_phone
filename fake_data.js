const faker = require('faker');
const limit = 500;
let arr = []
for (let i = 0; i<=limit; i++) {
    arr.push({
        name: `${faker.name.findName()} Phone`
    });
}

for(i in arr) {
    console.log(arr[i].name);
}

// module.exports = {
//     dataInit: ()=>{ 
//         connection.connect(()=>{
//             const query = `INSERT INTO phones(name, description, model, trademark_id, price, inventory_quantity) VALUES ?`;
//             connection.query(query,[arr],(err,result)=>{
//                 if (err) throw err;
//                 console.log(result);
//             });
//         });
//     }
// }