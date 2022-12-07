async function Saver(values, val){

    const url = (val===0 ? "https:khajaapi-backend.onrender.com/api/user" : val===1 ? `https:khajaapi-backend.onrender.com/api/user/${values.id}` :  `https:khajaapi-backend.onrender.com/api/user/${values}` )

    const conn = await fetch(url, {
        method : val===0 ? "POST" : val===1 ? "PATCH" : "DELETE",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            name : values.name,
            email: values.email,
            phone: values.phone
        })
    });

    if(conn.status === 200){
        return 1;
    }
    else if(conn.status === 500){
        return 0;
    }
    else{
        return 0;
    }
}

export default Saver;