"use client"
import React, { useState } from 'react';

const signupin = () => {
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [nationalId, setNationalId] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [gender, setGender] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSignInSubmit = (event) => {
    event.preventDefault();
    // Handle sign-in logic here
    console.log('National ID:', nationalId);
    console.log('Password:', password);
  };

  const handleSignUpSubmit = (event) => {
    event.preventDefault();
    // Handle sign-up logic here and switch to sign-in view
    console.log('National ID:', nationalId);
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    console.log('Gender:', gender);
    console.log('Phone Number:', phoneNumber);
    setIsSignedUp(true);
  };

  return (
    <div>
      {isSignedUp ? (
        <div>
          <h2>Sign In</h2>
          <form onSubmit={handleSignInSubmit}>
            <div>
              <label>National ID:</label>
              <input
                type="text"
                value={nationalId}
                onChange={(e) => setNationalId(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Sign In</button>
            <button type="submit" onClick={() => setIsSignedUp(false)}>Create Account</button>
          </form>
        </div>
      ) : (
        <div>
          <h2>Sign Up</h2>
          <form onSubmit={handleSignUpSubmit}>
            <div>
              <label>National ID:</label>
              <input
                type="text"
                value={nationalId}
                onChange={(e) => setNationalId(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Username:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Confirm Password:</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Gender:</label>
              <select value={gender} onChange={(e) => setGender(e.target.value)} required>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label>Phone Number:</label>
              <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
            <button type="submit">Sign Up</button>
            <button type="submit" onClick={() => setIsSignedUp(true)}>Already signed up?</button>
          </form>
        </div>
      )}
    </div>
  );
};


export default signupin;

