import { useState } from 'react';
import Button from '../../ui/Button';
import Form from '../../ui/Form';
import Input from '../../ui/Input';
import SpinnerMini from '../../ui/SpinnerMini';
import FormRowVertical from '../../ui/FormRowVertical';
import { useLogin } from './useLogin';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isPending } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail('');
          setPassword('');
        },
      }
    );
  }

  function handleDemoLogin() {
    setEmail('test@test.com');
    setPassword('!2345678');
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isPending}
        />
      </FormRowVertical>
      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isPending}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button size="large" disabled={isPending}>
          {!isPending ? 'Log in' : <SpinnerMini />}
        </Button>
      </FormRowVertical>

      {/* demo credentials section */}
      <FormRowVertical>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '1rem',
            borderRadius: '8px',
            border: '1px solid #bae6fd',
            marginTop: '1rem',
          }}
        >
          <p
            style={{
              margin: '0 0 0.5rem 0',
              fontWeight: '600',
              color: '#0369a1',
            }}
          >
            Demo Account
          </p>
          <p style={{ margin: '0.25rem 0', fontSize: '0.875rem' }}>
            <strong>Email:</strong> test@test.com
          </p>
          <p style={{ margin: '0.25rem 0 0.75rem 0', fontSize: '0.875rem' }}>
            <strong>Password:</strong> !2345678
          </p>

          <Button size="large" disabled={isPending} onClick={handleDemoLogin}>
            {!isPending ? 'Use Demo Account' : <SpinnerMini />}
          </Button>
        </div>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
