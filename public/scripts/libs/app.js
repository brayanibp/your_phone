function comboStatesLoad() {
    $.ajax({
        url: 'localhost:3000/API/states',
        type: 'GET',
        dataType: 'JSON',
        success: (data)=>{
            console.log(data);
        }
    });
}

function userReg() {
    $.ajax({
        url: "http://localhost:3000/register",
        type: 'POST',
        dataType: "JSON",
        data: {
            "name":name,
            "lastname":lastname,
            "city":city
        }
    });
}