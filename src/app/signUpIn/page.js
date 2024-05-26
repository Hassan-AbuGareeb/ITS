"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'
import Link from 'next/link';

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
    <div className='bg-gradient-to-r from-cyan-500 to-emerald-500 pb-[700px]'>
      {isSignedUp ? (
        <div className='flex flex-col justify-center items-center'>
          <h2 className='font-extrabold text-5xl mt-10'>Sign In</h2>
          <form onSubmit={handleSignInSubmit} className='text-2xl font-bold'>
            <div className='mt-5 '>
              <label className='mr-3'>National ID </label>
              <input
                type="text"
                value={nationalId}
                onChange={(e) => setNationalId(e.target.value)}
                required
              />
            </div>
            <div className='mt-5'>
              <label className='mr-3'>Password </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Link href='/patientInfo'><button className='mt-5 bg-teal-700 p-4 rounded-2xl hover:bg-teal-300' type="submit">Sign In</button></Link>
            <div className='mt-5'>
              <span className='text-lg'>doesn't have an account?</span>
              <button className='underline text-lg ml-3' type="submit" onClick={() => setIsSignedUp(false)}>Create Account</button>
            </div>
          </form>
        </div>
      ) : (
        <div className='flex flex-col justify-center items-center'>
          <h2 className='font-extrabold text-5xl mt-10 mb-10'>Sign Up</h2>
          <form className='flex flex-col gap-5 text-xl font-bold' onSubmit={handleSignUpSubmit}>
            <div>
              <label className='mr-3'>National ID</label>
              <input
                type="text"
                value={nationalId}
                onChange={(e) => setNationalId(e.target.value)}
                required
              />
            </div>
            <div>
              <label className='mr-3'>Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <label className='mr-3'>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <label className='mr-3'>Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <label className='mr-3'>Gender</label>
              <select value={gender} onChange={(e) => setGender(e.target.value)} required>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div>
              <label className='mr-3'>Phone Number</label>
              <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
            <Link href='/patientInfo'><button className='mt-5 bg-teal-700 p-4 rounded-2xl hover:bg-teal-300' type="submit">Sign Up</button></Link>
            <div>
              <span className='text-lg'>Already signed up?</span>
              <button className='underline text-lg ml-3' type="submit" onClick={() => setIsSignedUp(true)}>sign in</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};


export default signupin;

