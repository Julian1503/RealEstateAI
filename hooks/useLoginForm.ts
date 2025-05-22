import { useState } from 'react';
import { useRouter } from 'next/router';

// Define types for the login form
interface LoginFormState {
  email: string;
  password: string;
  error: string | null;
  isLoading: boolean;
}

interface LoginFormActions {
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  clearError: () => void;
}

/**
 * Custom hook to manage login form state and logic
 * This separates business logic from the UI component
 */
export const useLoginForm = (): LoginFormState & LoginFormActions => {
  const router = useRouter();
  const [formState, setFormState] = useState<LoginFormState>({
    email: '',
    password: '',
    error: null,
    isLoading: false
  });

  const setEmail = (email: string) => {
    setFormState(prev => ({ ...prev, email }));
  };

  const setPassword = (password: string) => {
    setFormState(prev => ({ ...prev, password }));
  };

  const clearError = () => {
    setFormState(prev => ({ ...prev, error: null }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Clear any previous errors
    clearError();

    // Set loading state
    setFormState(prev => ({ ...prev, isLoading: true }));

    try {
      // Call the authentication service
      const result = await loginUserService({
        email: formState.email,
        password: formState.password
      });

      // Handle successful login
      console.log('Login successful', result);

      // In a real app, you might store the user in context or state management
      // Then redirect to dashboard or home page
      router.push('/dashboard');

    } catch (error) {
      // Handle login error
      setFormState(prev => ({
        ...prev,
        error: error instanceof Error ? error.message : 'An unknown error occurred'
      }));
    } finally {
      // Reset loading state
      setFormState(prev => ({ ...prev, isLoading: false }));
    }
  };

  return {
    ...formState,
    setEmail,
    setPassword,
    handleSubmit,
    clearError
  };
};