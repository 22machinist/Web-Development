const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const port = process.env.PORT || 3000;
const jwtSecret = 'secretKey'; // Use a more secure key in production

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/project-management-tool', { useNewUrlParser: true, useUnifiedTopology: true });

// Define schema and model
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  date: { type: Date, default: Date.now }
});

const projectSchema = new mongoose.Schema({
  name: String,
  description: String,
  tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }],
  date: { type: Date, default: Date.now }
});

const taskSchema = new mongoose.Schema({
  name: String,
  description: String,
  status: { type: String, default: 'Pending' },
  project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
  date: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);
const Project = mongoose.model('Project', projectSchema);
const Task = mongoose.model('Task', taskSchema);

// Routes
app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ username, password: hashedPassword });
  await newUser.save();
  res.json({ message: 'User registered successfully' });
});

app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }
  const token = jwt.sign({ userId: user._id }, jwtSecret);
  res.json({ token });
});

app.post('/api/projects', async (req, res) => {
  const { token, name, description } = req.body;
  try {
    const decoded = jwt.verify(token, jwtSecret);
    const newProject = new Project({ name, description });
    await newProject.save();
    res.json(newProject);
  } catch (err) {
    res.status(401).json({ message: 'Unauthorized' });
  }
});

app.get('/api/projects', async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

app.post('/api/tasks', async (req, res) => {
  const { token, name, description, projectId } = req.body;
  try {
    const decoded = jwt.verify(token, jwtSecret);
    const newTask = new Task({ name, description, project: projectId });
    await newTask.save();
    const project = await Project.findById(projectId);
    project.tasks.push(newTask._id);
    await project.save();
    res.json(newTask);
  } catch (err) {
    res.status(401).json({ message: 'Unauthorized' });
  }
});

app.get('/api/projects/:id', async (req, res) => {
  const project = await Project.findById(req.params.id).populate('tasks');
  res.json(project);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
