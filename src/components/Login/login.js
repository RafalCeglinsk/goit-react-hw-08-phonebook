import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Button } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';

import { login } from 'redux/reducers/auth/operations';

export default function Login() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      login({
        password,
        email,
      })
    );
  };
  return (
    <div className="LoginContainer">
      <form onSubmit={handleSubmit}>
        <div>
          <h2>E-mail: </h2>
          <input
            type="text"
            name="email"
            value={email}
            placeholder="Enter your E-mail"
            onChange={e => setEmail(e.target.value)}
            required
          />{' '}
        </div>
        <div>
          {' '}
          <h2>Password:</h2>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={e => setPassword(e.target.value)}
            required
          />{' '}
        </div>
        <Button type="submit" variant="contained" startIcon={<LoginIcon />}>
          Login
        </Button>
        <div></div>
      </form>
    </div>
  );
}
