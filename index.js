const express = require('express');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.urlencoded({extended:false}))
app.get('/',(req,res)=>{
    res.send('I am learing Node.js')
})
app.get('/Aryan',(req,res)=>{
    const AryanDetails = {
        name:'Aryan Dhakad',
        batch:'JJ',
        techname:'MERN'
    }

    res.json(AryanDetails)

    
})

app.get('/Users',(req,res)=>{
    const USERS = [{"id":1,"email":"george.bluth@reqres.in","first_name":"George","last_name":"Bluth","avatar":"https://reqres.in/img/faces/1-image.jpg"},{"id":2,"email":"janet.weaver@reqres.in","first_name":"Janet","last_name":"Weaver","avatar":"https://reqres.in/img/faces/2-image.jpg"},{"id":3,"email":"emma.wong@reqres.in","first_name":"Emma","last_name":"Wong","avatar":"https://reqres.in/img/faces/3-image.jpg"},{"id":4,"email":"eve.holt@reqres.in","first_name":"Eve","last_name":"Holt","avatar":"https://reqres.in/img/faces/4-image.jpg"},{"id":5,"email":"charles.morris@reqres.in","first_name":"Charles","last_name":"Morris","avatar":"https://reqres.in/img/faces/5-image.jpg"},{"id":6,"email":"tracey.ramos@reqres.in","first_name":"Tracey","last_name":"Ramos","avatar":"https://reqres.in/img/faces/6-image.jpg"}]

    res.json(USERS)

    
})
app.get('/Users/odd',(req,res)=>{
    const USERS = [{"id":1,"email":"george.bluth@reqres.in","first_name":"George","last_name":"Bluth","avatar":"https://reqres.in/img/faces/1-image.jpg"},{"id":2,"email":"janet.weaver@reqres.in","first_name":"Janet","last_name":"Weaver","avatar":"https://reqres.in/img/faces/2-image.jpg"},{"id":3,"email":"emma.wong@reqres.in","first_name":"Emma","last_name":"Wong","avatar":"https://reqres.in/img/faces/3-image.jpg"},{"id":4,"email":"eve.holt@reqres.in","first_name":"Eve","last_name":"Holt","avatar":"https://reqres.in/img/faces/4-image.jpg"},{"id":5,"email":"charles.morris@reqres.in","first_name":"Charles","last_name":"Morris","avatar":"https://reqres.in/img/faces/5-image.jpg"},{"id":6,"email":"tracey.ramos@reqres.in","first_name":"Tracey","last_name":"Ramos","avatar":"https://reqres.in/img/faces/6-image.jpg"}]

    res.json(USERS.filter(user=>user.id % 2 !=0))

    
})
app.get('/About',(req,res)=>{
    res.sendFile(__dirname + '/about.html')
})





app.get('/Register',(req,res)=>{
    res.sendFile(__dirname + '/register.html')
})

// app.get('/api/Register',(req,res)=>{
//     res.sendFile(__dirname + '/about.html')
// })


app.post('/api/Register',(req,res)=>{
    const {Firstname, Secondname} = req.body
    res.send(Firstname + ' ' + Secondname)
})









app.get('/download-logo',(req,res)=>{
    res.download(__dirname + '/logos_whatsapp-icon.png')
})







app.listen(3000, ()=>{
    console.log('Server running successfully on http://localhost:3000')
})