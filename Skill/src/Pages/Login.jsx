import React, { useState } from 'react';
import '../CSS files/Login.css';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError('Please fill in all fields');
            return;
        }
        setError('');
        // Handle login logic here
        alert(`Logged in with Email: ${email}`);
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2 className="title">Login to SkillTrack</h2>

                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="username"
                        required
                    />
                    <span className="input-highlight"></span>
                </div>

                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="current-password"
                        required
                    />
                    <span className="input-highlight"></span>
                </div>

                {error && <p className="error-msg">{error}</p>}

                <button type="submit" className="login-btn">Sign In</button>
                <p className="footer-text">
                    Don't have an account? <a href="/register">Register here</a>
                </p>
            </form>
        </div>
    );
}
