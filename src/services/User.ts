import { APIResponse } from "../models/Request";
import { BaseUser } from "../models/User";
import { authRepository } from "../repositories/auth.repository";
import { get } from "./api";

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

export const getUsers = (): Promise<APIResponse<BaseUser[]>> => {
  return get({
    url: "/users",
    headers: getHeaders(),
  });
};
