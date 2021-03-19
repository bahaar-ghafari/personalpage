export interface LoginPayload {
  username: string;
  password: string;
}
//res
export interface LoginRes {
  data: number;
  status: number;
}
export interface VerifyRes {
  accessToken: string;
  refreshToken: string;
  tokenOptions: {
    httpOnly: boolean;
    secure: boolean;
    domain: string;
    sameSite: boolean;
  };
}
export interface VerifyPayload {
     username:string,code:string
}

type PayloadType = LoginPayload | VerifyPayload
type ResType = VerifyRes | LoginRes
export type {
     ResType,PayloadType
}