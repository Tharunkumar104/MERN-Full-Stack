import React, { useState } from 'react';
import '../CSS files/Signin.css';

export default function Signin() {
    const [userType, setUserType] = useState('student'); // 'student' or 'teacher'
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !password || !confirmPassword) {
            setError('Please fill in all fields');
            return;
        }
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        setError('');
        alert(`Registered as ${userType} with Email: ${email}`);
        // Add backend connection logic here
    };

    return (
        <div className="signin-container">
            <form className="signin-form" onSubmit={handleSubmit}>
                <h2 className="title">Register your Account</h2>

                <div className="toggle-container">
                    <button
                        type="button"
                        className={userType === 'student' ? 'toggle-btn active' : 'toggle-btn'}
                        onClick={() => setUserType('student')}
                    >
                        Student Signup
                    </button>
                    <button
                        type="button"
                        className={userType === 'teacher' ? 'toggle-btn active' : 'toggle-btn'}
                        onClick={() => setUserType('teacher')}
                    >
                        Teacher Signup
                    </button>
                </div>

                <div className="input-group">
                    <label htmlFor="name">{userType === 'student' ? 'Student Name' : 'Teacher Name'}</label>
                    <input
                        type="text"
                        id="name"
                        placeholder={`Enter your ${userType} name`}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <span className="input-highlight"></span>
                </div>

                <div className="input-group">
                    <label htmlFor="email">{userType === 'student' ? 'Student Email' : 'Teacher Email'}</label>
                    <input
                        type="email"
                        id="email"
                        placeholder={`Enter your ${userType} email`}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                        required
                    />
                    <span className="input-highlight"></span>
                </div>

                <div className="input-group">
                    <label htmlFor="confirmPassword">{userType === 'student' ? 'Confirm Password' : 'Confirm Password'}</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    <span className="input-highlight"></span>
                </div>

                {error && <p className="error-msg">{error}</p>}

                <button type="submit" className="signin-btn">Register</button>

            </form>
        </div>
    );
}
