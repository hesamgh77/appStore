import axios from 'axios';
import { FORM_UPDATE, CREATE_FORM } from './types';

export const formUpdate = ({ prop, value }) => {
    return {
        type: FORM_UPDATE,
        payload: { prop, value }
    };
};
export const createForm = (name) => {
    return (dispatch) => {
        fetch('http://192.168.43.195:8000/app/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                
            },
            body: JSON.stringify({
                name: 'chrome',
                app_description: 'chating',
                creator: 1,
                subject: 'social network',
                download_number: 0,
                size: '37 mb',
                apk_file: null,
                image: null
                //apk_file: null,
                //image: null  
            })
        }
        ).then((res) => { 
            console.log(name);
            console.log(res);
            dispatch({ type: CREATE_FORM });
        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: CREATE_FORM });
        });
    };
    
    //return {
      //  type: CREATE_FORM
    //};
};
/*
 return (dispatch) => {
        axios.post('http://192.168.43.195:8000/app/',
        { 'name': name }
        ).then((res) => { 
            console.log(res);
            dispatch({ type: CREATE_FORM });
        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: CREATE_FORM });
        });
    };
*/
