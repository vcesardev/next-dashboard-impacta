export type UserSignInPayload = {
  username: string;
  password: string;
};

export type BaseUser = {
  id: number;
  username: string;
  name: string;
  roles: string;
  token: string;
};

export type UserCreatePayload = {
  name: string;
  username: string;
  roles: string;
  password: string;
  confirmPassword?: string;
};

export type UserEditPayload = {
  name?: string;
  username?: string;
  roles?: string;
  password?: string;
  confirmPassword?: string;
};
