// Requires
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json());

//Connect with mongoDB database
mongoose.connect('mongodb://localhost/portfolio');

//Create a project model
const projectSchema = new mongoose.Schema({
    title: String,
    description: String,
    creationDate: {type: Date, default: Date.now}
});

const Project = mongoose.model('Project', projectSchema);

//Create a route that lists all of the projects
app.get('/projects', async(req, res)=> {
    const projects = await Project.find();
    res.send(projects);
});

// Create route to add new project
app.post('/projects', async (req, res) => {
    const { title, description } = req.body;
    const project = new Project({ title, description });
    await project.save();
    res.send(project);
})


// Initialize server in 3000 port
app.listen(3000, () => {
    console.log('Server initialized on 3000 port')
});