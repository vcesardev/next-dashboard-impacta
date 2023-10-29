import { APIResponse } from "../models/Request";
import { BaseRole, RoleCreatePayload, RoleEditPayload } from "../models/Roles";
import { BaseUser, UserCreatePayload, UserEditPayload } from "../models/User";
import { authRepository } from "../repositories/auth.repository";
import { get, post, put, del } from "./api";

const getHeaders = (): any => {
  const user = authRepository.getLoggedUser();
  if (!user) {
    throw new Error("Unauthorized");
  }

  const headers = {
    Authorization: `Bearer ${user?.token}`,
    "Content-Type": "application/json",
  };

  return headers;
};

export const getRoles = (): Promise<APIResponse<BaseRole[]>> =>
  get({
    url: "/roles",
    headers: getHeaders(),
  });

export const addRole = (
  data: RoleCreatePayload
): Promise<APIResponse<BaseRole>> =>
  post({ url: "/roles", headers: getHeaders(), data });

export const editRole = (
  data: RoleEditPayload
): Promise<APIResponse<BaseRole>> =>
  put({ url: "/roles", headers: getHeaders(), data });

export const deleteRole = (roleId: string): Promise<APIResponse<boolean>> =>
  del({ url: `/roles/${roleId}`, headers: getHeaders() });
