import { FORM_UPDATE, CREATE_FORM } from './types';

export const formUpdate = ({ prop, value }) => {
    return {
        type: FORM_UPDATE,
        payload: { prop, value }
    };
};
export const createForm = () => {
    return {
        type: CREATE_FORM
    };
};
