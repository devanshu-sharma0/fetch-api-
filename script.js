function callapi(num){
    fetch(`https://reqres.in/api/users/${num}`)
    .then((res)=>{
        if (res.ok)
        return res.json();
        else{
            throw Error("error");
    }
})
    .then((data)=>{
        console.log("data" ,data);
        document.getElementById("name").innerHTML= data.data.first_name + data.data.last_name;
        let img = document.getElementById("image");
        console.log('img ' , img);
        img.setAttribute("src", data.data.avatar);
    })
    .catch(err=>{
        console.log("error" , err);
        document.getElementById("name").innerHTML= 'no such data found';
})
}
    function numberchange(){
        let num = document.getElementById("number-id").value; 
        callapi(num);
}