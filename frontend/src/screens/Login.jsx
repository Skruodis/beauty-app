import { useState } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 100vh;
`

const Container = styled.div`
  background-color: #aaa;
  width: 400px;
  border-radius: 20px;
  padding: 24px;
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  margin-bottom: 20px;
`

const Button = styled.button``

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = () => {
    if (username === 'tomas' && password === 'dviratis') {
      navigate('/dashboard')
    }
  }

  return (
    <Main>
      <Container>
        <Input value={username} onChange={(e) => setUsername(e.target.value)} />
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button onClick={handleSubmit}>
          Login
        </Button>
      </Container>
    </Main>
  );
}

export default Login;
