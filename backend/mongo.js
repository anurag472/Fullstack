const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/dummy', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    role: String,
});

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    category: String,
});

const managerSchema = new mongoose.Schema({
    name: String,
    employees: [String]
});

const employeeSchema = new mongoose.Schema({
    name: String,
    age: Number,
    position: String
});

const customerSchema = new mongoose.Schema({
    id: Number,
    name: String,
    products: [String]
});

const Customer = mongoose.model('Customer', customerSchema);
const Employee = mongoose.model('Employee', employeeSchema);
const Manager = mongoose.model('Manager', managerSchema);
const User = mongoose.model('User', userSchema);
const Product = mongoose.model('Product', productSchema);

module.exports = { User, Product, Manager, Employee, Customer };