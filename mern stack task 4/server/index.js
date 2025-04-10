import express from 'express';
import cors from 'cors';

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Welcome route
app.get('/welcome', (_req, res) => {
    res.json({ message: "Welcome to Express!" });
});

// In-memory users array
const users = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" }
];

// GET all users
app.get('/users', (_req, res) => {
    res.json(users);
});

// POST new user
app.post('/users', (req, res) => {
    const { name, email } = req.body;
    
    if (!name || !email) {
        return res.status(400).json({ error: "Name and email are required" });
    }

    const newUser = {
        id: users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1,
        name,
        email
    };

    users.push(newUser);
    return res.status(201).json(newUser);
});

// PUT update user
app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;

    const userIndex = users.findIndex(user => user.id === parseInt(id, 10));

    if (userIndex === -1) {
        return res.status(404).json({ error: "User not found" });
    }

    users[userIndex] = {
        ...users[userIndex],
        name: name || users[userIndex].name,
        email: email || users[userIndex].email
    };

    return res.json(users[userIndex]);
});

// DELETE user
app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    
    const userIndex = users.findIndex(user => user.id === parseInt(id, 10));

    if (userIndex === -1) {
        return res.status(404).json({ error: "User not found" });
    }

    const deletedUser = users[userIndex];
    users.splice(userIndex, 1);

    return res.json(deletedUser);
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); 