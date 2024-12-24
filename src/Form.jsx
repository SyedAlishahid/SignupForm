import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';
import BadgeTwoToneIcon from '@mui/icons-material/BadgeTwoTone';
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';

function Form() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [login, setLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  function inputsHandler() {
    return {
      username: userName,
      Email: email,
      Password: password,
    };
  }

  function userNameHandler(e) {
    setUserName(e.target.value);
  }

  function emailHandler(e) {
    setEmail(e.target.value);
  }

  function passwordHandler(e) {
    setPassword(e.target.value);
  }

  function loginButton(e) {
    e.preventDefault();
    setIsSubmitted(true);

    if (userName === "" || email === "" || password === "") {
      console.error("Enter valid info");
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } else {
      const data = inputsHandler();
      console.log(data);
      setUserName("");
      setEmail("");
      setPassword("");
      setIsSubmitted(false);
    }
  }

  function changeHandler() {
    setLogin(!login);
    setIsSubmitted(false);
  }

  function togglePasswordVisibility() {
    setShowPassword(!showPassword);
  }

  return (
    <div
      style={{
        backgroundImage: "linear-gradient(to right, #3b82f6, #1e40af)"
      }}
      className="min-h-screen"
    >
      <form onSubmit={loginButton} className="rounded-lg p-8 shadow-lg">
        <div className="flex flex-col justify-center items-center w-full h-screen">
          <div className="border-4 border-blue-600 p-20 bg-white rounded-lg">
            <h1 className="text-4xl text-center font-bold text-blue-600 mb-4">
              {login ? 'Login' : 'Sign Up'}
            </h1>
            <button
              type="button"
              onClick={changeHandler}
              className={`text-xl font-semibold h-16 w-40 rounded-lg m-4 transition duration-300 ease-in-out ${login ? 'bg-gray-200 hover:bg-gray-300 text-black' : 'bg-blue-700 hover:bg-blue-500 text-white'}`}
            >
              {login ? 'Sign Up' : 'Login'}
            </button>
            <button
              type="button"
              onClick={changeHandler}
              className={`border-[1px] border-gray-200 text-xl font-semibold h-16 w-40 rounded-lg m-4 transition duration-300 ease-in-out ${login ? 'bg-blue-700 hover:bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300 text-black'}`}
            >
              {login ? 'Login' : 'Sign Up'}
            </button>

            <div className="border-b-black border-2 mb-4"></div>
            <div className="grid mb-4">
              {!login && (
                <TextField
                  onChange={userNameHandler}
                  value={userName}
                  id="outlined-basic"
                  label="First Name"
                  variant="outlined"
                  type="text"
                  sx={{ borderRadius: '2rem', marginTop: '0.5rem' }}
                  fullWidth
                  InputProps={{
                    startAdornment: <BadgeTwoToneIcon sx={{ color: '#3b82f6' }} />
                  }}
                />
              )}
              <TextField
                onChange={emailHandler}
                value={email}
                id="outlined-basic"
                label="Email"
                variant="outlined"
                type="text"
                sx={{ borderRadius: '2rem', marginTop: '0.5rem' }}
                fullWidth
                InputProps={{
                  startAdornment: <EmailTwoToneIcon sx={{ color: '#3b82f6' }} />
                }}
              />
              <TextField
                onChange={passwordHandler}
                value={password}
                id="outlined-basic"
                label="Password"
                variant="outlined"
                type={showPassword ? "text" : "password"}
                sx={{ borderRadius: '2rem', marginTop: '0.5rem' }}
                fullWidth
                InputProps={{
                  startAdornment: (
                    <div
                      onClick={togglePasswordVisibility}
                      style={{ cursor: 'pointer' }}
                    >
                      {showPassword ? <LockOpenTwoToneIcon sx={{ color: '#3b82f6' }} /> : <LockTwoToneIcon sx={{ color: '#3b82f6' }} />}
                    </div>
                  )
                }}
              />
            </div>
            <p className="transition duration-300 ease-in-out text-gray-700 mb-4">
              Forgot Password?{' '}
              <span className="font-semibold cursor-pointer transition duration-600 ease-in-out hover:underline hover:text-blue-500">
                Click here
              </span>
            </p>
            {isSubmitted && (userName === '' || email === '' || password === '') ? (
              <p className="text-red-500">Enter Correct Info.</p>
            ) : null}
            <div className="flex rounded-lg justify-center items-center">
              <button
                type="submit"
                className={`font-medium text-lg h-12 w-28 bg-blue-700 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out m-4 ${login ? 'bg-blue-400' : 'bg-gray-200'
                  }`}
              >
                {login ? 'Login' : 'Sign Up'}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
