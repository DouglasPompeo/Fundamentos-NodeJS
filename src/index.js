const express = require ('express');

const app = express();

app.get("/courses",(request,response)=>{
return response.json(["Curso 1","Curso 2 ","Curso 3"]);
});

app.post("/courses",(request,response)=>{
    return response.json(["Curso 1","Curso 2 ","Curso 3","Curso4"]);
});

app.put("/courses/:id",(request,response)=>{
    return response.json(["Curso 6","Curso 2 ","Curso 3","Curso4"]); 
})

app.patch("/courses/:id",(request,response)=>{
    return response.json(["Curso 1","Curso 2 ","Curso 3","Curso4"]);
})

app.delete("/courses/:id",(request,response)=>{
    return response.json(["Curso 1","Curso 2 ","Curso4"]);
})
//localhost:2002
app.listen(2002); 