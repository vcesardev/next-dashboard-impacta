import { useRouter } from "next/router";
import { APIResponse } from "../models/Request";
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

export const logoutUser = (): void => {
  alert("Sessão expirada, faça login novamente.");
  authRepository.removeLoggedUser();
};

export const getUsers = (): Promise<APIResponse<BaseUser[]>> =>
  get({
    url: "/users",
    headers: getHeaders(),
  });

export const getUser = (userId: string): Promise<APIResponse<BaseUser>> =>
  get({
    url: `/users/${userId}`,
    headers: getHeaders(),
  });

export const postUser = (
  data: UserCreatePayload
): Promise<APIResponse<BaseUser>> =>
  post({ url: "/users", headers: getHeaders(), data });

export const editUser = (
  data: UserEditPayload,
  userId: string
): Promise<APIResponse<BaseUser>> =>
  put({ url: `/users/${userId}`, headers: getHeaders(), data });

export const deleteUser = (userId: string): Promise<APIResponse<boolean>> =>
  del({ url: `/users/${userId}`, headers: getHeaders() });
