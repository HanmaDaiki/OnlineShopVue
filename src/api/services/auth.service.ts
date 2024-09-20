import type { IApi } from '../../types/api/api-types';

export default (api: IApi) => {
    api.auth = {
        login(data) {
            return api.request.post('/auth/login', data);
        },
    };
};