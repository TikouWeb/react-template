import { LoginForm } from '@/components/features/login/login-form';

import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/auth/login')({
  component: Login,
});

export default function Login() {
  return (
    <div className='flex h-screen w-full items-center justify-center px-4'>
      <LoginForm />
    </div>
  );
}
