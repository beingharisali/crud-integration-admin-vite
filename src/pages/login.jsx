import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  function changeHandler(e) {
    // const name = e.target.name;
    // const value = e.target.value;
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  const navigate = useNavigate();
  async function submitHandler(e) {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/login", user);
      console.log(res);
      toast.success("User logged in successfully");
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  }
  return (
    <div className="w-50 mx-auto my-4">
      <h2>Login here</h2>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="john@gmail.com"
            name="email"
            value={user.email}
            onChange={changeHandler}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="********"
            name="password"
            value={user.password}
            onChange={changeHandler}
          />
        </Form.Group>
        <Button type="submit" variant="success">
          Login
        </Button>
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </Form>
    </div>
  );
}

export default Login;
