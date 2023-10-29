export type BaseRole = {
  id: number;
  name: string;
  description: string;
};

export type RoleCreatePayload = {
  name: string;
  description: string;
};

export type RoleEditPayload = RoleCreatePayload;
