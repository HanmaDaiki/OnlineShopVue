import { AxiosPromise } from "axios";
import { LoginDto } from "../../../dto/LoginDto";

export type Auth = {
    login: (data: LoginDto) => AxiosPromise<Record<string, string>>;
}