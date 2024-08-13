export const validateInput = (username: string, password: string): string | null => {
  if (!username || !password) return 'Both fields are required.';
  if (username.length < 3 || username.length > 20) return 'Username must be between 3 to 20 characters.';
  if (password.length < 3 || password.length > 20) return 'Password must be between 3 to 20 characters.';
  if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) return 'Password must contain at least one uppercase letter, one lowercase letter, and one number.';
  return null;
};
