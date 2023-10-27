export type UserSignInPayload = {
  username: string;
  password: string;
};

export type BaseUser = {
  id: number;
  username: string;
  name: string;
  token: string;
};
