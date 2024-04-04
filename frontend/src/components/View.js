import React from "react";

const View = ({ data }) => {
  const { managers, customers, employees, products } = data;
  console.log(managers);
  return (
    <div>
      {customers && (
        <div>
          <h2>Customers</h2>
          <table style={{ border: "1px solid black", margin: "0 auto" }}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Products</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer, index) => (
                <tr key={index}>
                  <td>{customer.id}</td>
                  <td>{customer.name}</td>
                  <td>{customer.products.join(", ")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {employees && (
        <div>
          <h2>Employees</h2>
          <table style={{ margin: "0 auto", border: "1px solid black" }}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Position</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee, index) => (
                <tr key={index}>
                  <td>{employee.name}</td>
                  <td>{employee.age}</td>
                  <td>{employee.position}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {managers && (
        <div>
          <h2>Managers</h2>
          <table style={{ border: "1px solid black", margin: "0 auto" }}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Team</th>
              </tr>
            </thead>
            <tbody>
              {managers.map((manager, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{manager.name}</td>
                  <td>{manager.employees.join(", ")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {products && (
        <div>
          <h2>Products</h2>
          <table style={{ margin: "0 auto", border: "1px solid black" }}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>{product.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default View;
