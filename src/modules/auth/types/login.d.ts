export interface LoginFormData {
  username: string;
  password: string;
}

export interface LoginResponse {
  refresh: string;
  access: string;
  user: {
    id: number;
    username: string;
    first_name: string;
    last_name: string;
    date_joined: string;
    last_login: string;
  };
}
