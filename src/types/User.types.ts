export interface User {
  name: string;
  role: string;
  avatar?: string;
}

export type UserRole = 'admin' | 'operator' | 'user';
