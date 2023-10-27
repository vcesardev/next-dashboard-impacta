import { APIResponse } from "../models/Request";
import { BaseUser, UserSignInPayload } from "../models/User";
import { authRepository } from "../repositories/auth.repository";
import { post } from "./api";

export const isUnauthorized = (error: any) => {
  return error.message === "Unauthorized";
};

export const getLoggedUser = () => {
  return authRepository.getLoggedUser();
};

export const logoutUser = () => {
  return authRepository.removeLoggedUser();
};

export const postLogin = (
  data: UserSignInPayload
): Promise<APIResponse<BaseUser>> => post({ data: data, url: "/auth/login" });
