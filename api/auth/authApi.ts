import { IAuth } from "@/interfaces/IAuth";
import serverInstance from "@/utils/axios";

export const loginUser = async (
  email: string,
  password: string
): Promise<IAuth> => {
  const response = await serverInstance.post<IAuth>("loginTechnical", {
    email,
    password,
  });
  return response.data;
};
