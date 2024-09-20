import { IApi } from "../../types/api/api-types";

export default (api: IApi) => {
    api.user = {
        getUser() {
            const token = localStorage.getItem('token');

            if (!token) {
                throw new Error('Unauthorized');
            }

            return api.request.get('/users/1');
        },
    };
};