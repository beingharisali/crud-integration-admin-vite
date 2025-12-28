import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function ForgetPassword() {
  const [user, setUser] = useState({
    email: "",
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
      const res = await axios.post(
        "http://localhost:8000/forget-password",
        user
      );
      console.log(res);
      toast.success("Email sent successfully");
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  }
  return (
    <div className="w-50 mx-auto my-4">
      <h2>Forget Password</h2>
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
        <Button type="submit" variant="success">
          Send Email
        </Button>
      </Form>
    </div>
  );
}

export default ForgetPassword;
