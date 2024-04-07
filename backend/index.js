const express = require("express");
const cors = require("cors");
const app = express();
const { User, Product, Employee, Customer, Manager } = require("./mongo");

app.use(cors());
app.use(express.json());

const dataByRole = async () => {
  try {
    const [managers, employees, products, customers] = await Promise.all([
      getAllManagers(),
      getAllEmployees(),
      getAllProducts(),
      getAllCustomers()
    ]);

    return {
      admin: {
        managers: managers,
        employees: employees,
        products: products,
        customers: customers
      },
      user: {
        products: products
      },
      manager: {
        products: products,
        employees: employees,
        customers: customers
      },
      employee: {
        products: products,
        customers: customers
      }
    };
  } catch (error) {
    console.error('Error fetching data by role:', error);
    throw error;
  }
};

async function getAllProducts() {
  try {
    const products = await Product.find();
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}

async function getAllManagers() {
  try {
    const managers = await Manager.find();
    return managers;
  } catch (error) {
    console.error('Error fetching managers:', error);
    throw error;
  }
}

async function getAllEmployees() {
  try {
    const employees = await Employee.find();
    return employees;
  } catch (error) {
    console.error('Error fetching employees:', error);
    throw error;
  }
}

async function getAllCustomers() {
  try {
    const customers = await Customer.find();
    return customers;
  } catch (error) {
    console.error('Error fetching customers:', error);
    throw error;
  }
}

app.get("/home", async (req, res) => {
  const { role } = req.query;
  try {
    const data = await dataByRole();
    res.json(data[role]);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

app.post("/api/login", async (req, res) => {
  let { username, password } = req.body;
  username = username.toLowerCase();
  password = password.toLowerCase();

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

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
