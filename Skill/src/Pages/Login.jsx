import React, { useState } from 'react';
import '../CSS files/Login.css';

export default function Login() {
    const [userType, setUserType] = useState('student'); // 'student' or 'teacher'
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
        alert(`Logged in as ${userType} with Email: ${email}`);
        // Implement login logic based on userType here
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2 className="title">Login to SkillTrack</h2>

                <div className="toggle-container">
                    <button
                        type="button"
                        className={userType === 'student' ? 'toggle-btn active' : 'toggle-btn'}
                        onClick={() => setUserType('student')}
                    >
                        Student Login
                    </button>
                    <button
                        type="button"
                        className={userType === 'teacher' ? 'toggle-btn active' : 'toggle-btn'}
                        onClick={() => setUserType('teacher')}
                    >
                        Teacher Login
                    </button>
                </div>

                <div className="input-group">
                    <label htmlFor="email">{userType === 'student' ? 'Student Email' : 'Teacher Email'}</label>
                    <input
                        type="email"
                        id="email"
                        placeholder={`Enter your ${userType} email`}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="username"
                        required
                    />
                    <span className="input-highlight"></span>
                </div>

                <div className="input-group">
                    <label htmlFor="password">{userType === 'student' ? 'Student Password' : 'Teacher Password'}</label>
                    <input
                        type="password"
                        id="password"
                        placeholder={`Enter your ${userType} password`}
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
                    Don't have an account? <Link to="/register">Register here</Link>
                </p>
            </form>
        </div>
    );
}
