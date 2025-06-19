// Community Savings Group Manager Backend - Refactored for clarity and consistency

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const JWT_SECRET = 'your_jwt_secret_key'; // Replace with a secure key in production

// In-memory data stores
let users = [];
let groups = [];
let meetings = [];
let contributions = [];
let loans = [];
const financialEducationMaterials = [
  "1. Saving Tips: Always save a portion of your income.",
  "2. Budgeting: Track your income and expenses.",
  "3. Responsible Borrowing: Only borrow what you can repay."
];

// Add roles to users for role-based access control

// Helper function to authenticate user by JWT token
function authenticate(req, res, next) {
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  const token = authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = users.find(u => u.username === decoded.username);
    if (!user) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
}

// User registration
app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;
  if (users.find(u => u.username === username)) {
    return res.status(400).json({ error: 'Username already exists' });
  }
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ username, password: hashedPassword, profile: {} });
    res.json({ message: 'Registration successful' });
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  console.log(`Login attempt: username=${username}, password=${password}`);
  const user = users.find(u => u.username === username);
  if (!user) {
    console.log('Login failed: Invalid credentials');
    return res.status(400).json({ error: 'Invalid credentials' });
  }
  try {
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      console.log('Login failed: Invalid credentials');
      return res.status(400).json({ error: 'Invalid credentials' });
    }
    const token = jwt.sign({ username: user.username }, JWT_SECRET, { expiresIn: '1h' });
    console.log('Login successful');
    res.json({ message: 'Login successful', token });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get user profile
app.get('/api/profile', authenticate, (req, res) => {
  res.json({ profile: req.user.profile });
});

// Update user profile
app.put('/api/profile', authenticate, (req, res) => {
  req.user.profile = req.body.profile;
  res.json({ message: 'Profile updated' });
});

// Create group
app.post('/api/groups', authenticate, (req, res) => {
  const group = { id: groups.length + 1, name: req.body.name, members: [req.user.username] };
  groups.push(group);
  res.json(group);
});

// Get user groups
app.get('/api/groups', authenticate, (req, res) => {
  const userGroups = groups.filter(g => g.members.includes(req.user.username));
  res.json(userGroups);
});

// Schedule meeting
app.post('/api/meetings', authenticate, (req, res) => {
  const meeting = { id: meetings.length + 1, user: req.user.username, datetime: req.body.datetime, agenda: req.body.agenda };
  meetings.push(meeting);
  res.json(meeting);
});

// Get user meetings
app.get('/api/meetings', authenticate, (req, res) => {
  const userMeetings = meetings.filter(m => m.user === req.user.username);
  res.json(userMeetings);
});

// Make contribution
app.post('/api/contributions', authenticate, (req, res) => {
  const contribution = { id: contributions.length + 1, user: req.user.username, amount: req.body.amount, date: new Date() };
  contributions.push(contribution);
  res.json(contribution);
});

// Get user contributions
app.get('/api/contributions', authenticate, (req, res) => {
  const userContributions = contributions.filter(c => c.user === req.user.username);
  res.json(userContributions);
});

// Request loan
app.post('/api/loans', authenticate, (req, res) => {
  const loan = { id: loans.length + 1, user: req.user.username, amount: req.body.amount, status: 'pending' };
  loans.push(loan);
  res.json(loan);
});

// Get user loans
app.get('/api/loans', authenticate, (req, res) => {
  const userLoans = loans.filter(l => l.user === req.user.username);
  res.json(userLoans);
});

// Get financial education materials
app.get('/api/education', (req, res) => {
  res.json(financialEducationMaterials);
});

app.listen(port, () => {
  console.log(`Community Savings Group Manager backend running at http://localhost:${port}`);
});
