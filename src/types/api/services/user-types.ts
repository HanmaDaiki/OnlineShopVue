import { AxiosPromise } from "axios";

export type User = {
    getUser: () => AxiosPromise<Record<string, string>>;
}