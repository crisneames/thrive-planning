import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <h1 className='text-center font-face-gm'>THRĪV Plan Login</h1>
      <Card style={{ width: '30rem', margin: '0 auto' }}>
        <form>
          <div className='form-group px-2 font-face-gm'>
            <label><b>Username</b></label>
            <input
              className='form-control'
              placeholder='Enter username'
              type='text'
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              name='username'
            />
          </div>
          <div className='form-group pb-4 px-2 font-face-gm'>
            <label><b>Password</b></label>
            <input
              className='form-control'
              placeholder='Enter password'
              type='password'
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              name='password'
            />
          </div>
          <div className='text-center pb-2 font-face-gm'>
            <Button style={{width: '26rem'}} type='submit' href="/thrivplan">Login</Button>
          </div>
          <p className="forgot-password text-right px-1 pb-1 font-face-gm">
            Forgot <a href="#">password?</a>
          </p>
        </form>
      </Card>
    </>
  );
};

export default Login;
