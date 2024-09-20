/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Auth, User} from './services';
import type { AxiosInstance } from 'axios';

export interface IApi {
    auth: Auth;
    user: User;
    request: AxiosInstance;
}

export type Module = {
    default: (api: IApi) => any;
};