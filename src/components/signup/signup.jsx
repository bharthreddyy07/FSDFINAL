import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './signup.css';

const SignUpPage = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();
        if (password.length >= 8 && password === confirmPassword) {
            const nameFromEmail = email.split('@')[0]; // Get part of email before @
            localStorage.setItem("userName", nameFromEmail);
            localStorage.setItem("userEmail", email);
            localStorage.setItem("userPhone", phone);
            alert("Signup successful!");
            setError(false);
            navigate("/login"); // Use navigate instead of history.push
        } else {
            setError(true);
        }
    };

    return (
        <div className="signup-container">
            <center><h2>Sign Up</h2></center>
            <form onSubmit={handleSignUp}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <label htmlFor="phone">Phone Number:</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
                <label htmlFor="signup-email">Email:</label>
                <input
                    type="email"
                    id="signup-email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label htmlFor="signup-password">Password:</label>
                <input
                    type="password"
                    id="signup-password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <label htmlFor="confirm-password">Confirm Password:</label>
                <input
                    type="password"
                    id="confirm-password"
                    name="confirm-password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
                <center><button type="submit">Sign Up</button></center>
                {error && <p className="error-message">Passwords do not match or are less than 8 characters.</p>}
            </form>
            <p>Already have an account? <button type="button" onClick={() => navigate("/login")}>Login</button></p>
        </div>
    );
};

export default SignUpPage;
