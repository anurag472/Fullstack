const express = require("express");
const cors = require("cors");
const app = express();
const User = require("./mongo");
const manager = require("./data/manager");
const products = require("./data/products");
const employees = require("./data/employees");
const users = require("./data/users");

app.use(cors());
app.use(express.json());

const dataByRole = {
  admin: { manager, employees, products, users },
  user: { products },
  manager: { products, employees, users },
  employee: { products, users }
};

app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username, password });
    if (user) {
      res.json({ success: true, message: "Login successful", role: user.toJSON().role});
    } else {
      res.json({ success: false, message: "Invalid username or password" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

app.get("/home", async (req, res) => {
  const { role } = req.query;
  res.json({ data: dataByRole[role] })
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
