const express= require('express');
const app= express();

app.use(express.json());

const courses=[
    {id:1, name: 'course1'},
    {id:2, name: 'course2'},
    {id:3, name: 'course3'},
];

app.get('/',(req,res)=>{
res.send('hiiiiiiii');
});

app.get('/express/courses',(req,res)=>{
res.send('1341556667 ');
});

app.post('/express/courses', (req,res)=>{
    const course={
        id: courses.length+1,
        name:req.body.name
    };
    courses.push(course);
    res.send(course);
    });

app.put('/express/code/:id', (req,res)=>{
    const course=courses.find(c=> c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('The course with the given ID was not found');


const result= validateCourse(req.body);
const {error} = validateCourse(req.body);

if(error){
    res.status(400).send(error.details[0].message);
    return;
}
course.name= req.body.name;
res.send(course);
});

function validateCourse(course){
    const schema={
        name:Joi.string().min(3).required()

    };
    const result= Joi.validate(course, schema);
}


app.delete('/express/code', (req,res)=>{

})





app.listen(3000,()=> console.log ('successfully i connected'));
  