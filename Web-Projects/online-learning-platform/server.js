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
mongoose.connect('mongodb://localhost:27017/online-learning-platform', { useNewUrlParser: true, useUnifiedTopology: true });

// Define schema and model
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  date: { type: Date, default: Date.now }
});

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  lessons: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Lesson' }],
  date: { type: Date, default: Date.now }
});

const lessonSchema = new mongoose.Schema({
  title: String,
  content: String,
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
  date: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);
const Course = mongoose.model('Course', courseSchema);
const Lesson = mongoose.model('Lesson', lessonSchema);

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

app.post('/api/courses', async (req, res) => {
  const { token, title, description } = req.body;
  try {
    const decoded = jwt.verify(token, jwtSecret);
    const newCourse = new Course({ title, description });
    await newCourse.save();
    res.json(newCourse);
  } catch (err) {
    res.status(401).json({ message: 'Unauthorized' });
  }
});

app.get('/api/courses', async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
});

app.post('/api/lessons', async (req, res) => {
  const { token, title, content, courseId } = req.body;
  try {
    const decoded = jwt.verify(token, jwtSecret);
    const newLesson = new Lesson({ title, content, course: courseId });
    await newLesson.save();
    const course = await Course.findById(courseId);
    course.lessons.push(newLesson._id);
    await course.save();
    res.json(newLesson);
  } catch (err) {
    res.status(401).json({ message: 'Unauthorized' });
  }
});

app.get('/api/courses/:id', async (req, res) => {
  const course = await Course.findById(req.params.id).populate('lessons');
  res.json(course);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
