// This will hold registered users in memory
export type User = {
  id: string; // Registration ID
  name: string;
  email: string;
  password: string;
};

export const users: User[] = [];
