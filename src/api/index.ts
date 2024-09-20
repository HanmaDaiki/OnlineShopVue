import axios from 'axios';
import { IApi, Module} from '../types/api/api-types';
import { Auth, User } from '../types/api/services';

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

const registerApi = (api: IApi) => {
    const services = import.meta.glob<Module>('./services/*.service.ts', {
        eager: true,
    });

    Object.entries<Module>(services).forEach(([_path, definition]) => {
        definition.default(api);
    });
};

export class Api implements IApi {
    constructor() {
        registerApi(this);
    }

    auth = <Auth>{};
    user = <User>{};
    request = instance;
};

export default new Api();