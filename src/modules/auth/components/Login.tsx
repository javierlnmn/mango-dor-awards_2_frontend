import logo from '@/assets/logo.png';
import { useLogin } from '@/modules/auth/queries/authQueries';
import type { LoginFormData } from '@/modules/auth/types/login';
import Button from '@/ui/Button';
import Input from '@/ui/Input';
import { Spotlight } from '@/ui/Spotlight';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<LoginFormData>({
    username: '',
    password: '',
  });
  const [errors, setErrors] = useState<Partial<LoginFormData>>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const field = e.target.name;
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value,
    }));
    if (errors[field as keyof LoginFormData]) {
      setErrors(prev => ({
        ...prev,
        [field]: undefined,
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<LoginFormData> = {};

    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const { loginMutation } = useLogin();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    loginMutation.mutateAsync(formData, {
      onSuccess: () => {
        navigate('/');
        setIsLoading(false);
      },
      onError: () => {
        setErrors({
          username: 'Invalid username or password',
          password: 'Invalid username or password',
        });
        setIsLoading(false);
      },
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 to-neutral-950 flex items-center justify-center relative overflow-hidden">
      <Spotlight
        gradientFirstClass="bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,_hsla(30,100%,85%,.08)_0,_hsla(30,100%,55%,.03)_50%,_hsla(30,100%,45%,0)_80%)]"
        gradientSecondClass="bg-[radial-gradient(50%_50%_at_50%_50%,_hsla(30,100%,85%,.06)_0,_hsla(30,100%,55%,.02)_80%,_transparent_100%)]"
        gradientThirdClass="bg-[radial-gradient(50%_50%_at_50%_50%,_hsla(30,100%,85%,.04)_0,_hsla(30,100%,45%,.01)_80%,_transparent_100%)]"
        translateY={-200}
        width={600}
      />

      <div className="w-full max-w-md px-6">
        <div className="text-center mb-8">
          <img
            src={logo}
            alt="Mango D'Or Awards"
            className="mx-auto h-20 w-auto mb-4"
          />
          <p className="text-white/60">Sign in to your account</p>
        </div>

        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl">
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <Input
              label="Username"
              name="username"
              type="text"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleInputChange}
              error={errors.username}
              disabled={isLoading}
            />

            <Input
              label="Password"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange}
              error={errors.password}
              disabled={isLoading}
            />

            <Button
              type="submit"
              style="glass"
              size="lg"
              className="w-full mt-4 py-3"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Signing in...
                </div>
              ) : (
                'Sign In'
              )}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <a
              href="#"
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              Forgot your password?
            </a>
          </div>
        </div>

        <div className="text-center mt-6">
          <p className="text-white/60">
            Don't have an account?{' '}
            <a
              href="#"
              className="text-orange-400 hover:text-orange-300 transition-colors font-medium"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
