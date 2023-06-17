import React, { useState } from "react";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    // Check for empty fields
    if (
      !formData.email ||
      !formData.name ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      newErrors.fieldError = "All fields are necessary.";
    }

    // Check for password mismatch
    if (formData.password !== formData.confirmPassword) {
      newErrors.passwordMismatch = "Passwords do not match.";
      setPasswordMatch(false);
    } else {
      setPasswordMatch(true);
    }

    if (Object.keys(newErrors).length === 0) {
      // Checking if form is valid
      setSuccessMessage("Successfully Signed up!");
      console.log("Form submitted:", formData);

      // Clear input fields
      setFormData({
        email: "",
        name: "",
        password: "",
        confirmPassword: "",
      });
    } else {
      // Form has errors, update the errors state
      setErrors(newErrors);
      setSuccessMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Signup</h1>
      <div>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
      </div>

      {errors.fieldError && (
        <p id="errorField" style={{ color: "red" }}>
          {errors.fieldError}
        </p>
      )}
      {successMessage && (
        <p id="errorField" style={{ color: "green" }}>
          {successMessage}
        </p>
      )}

      {!passwordMatch && (
        <p id="pswdCheck" style={{ color: "red" }}>
          Passwords do not match.
        </p>
      )}

      <button type="submit">Signup</button>
    </form>
  );
};

export default SignupForm;
