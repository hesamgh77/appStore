import axios from 'axios';
import RNFetchBlob from 'rn-fetch-blob';
import { FORM_UPDATE, CREATE_FORM, SIGNUP_UPDATE, SIGNUP_SUCCESS, SIGNUP_FAIL, LOGIN_UPDATE, LOGIN_FAIL, LOGIN_SUCCESS, SIGN_OUT } from './types';
import { signup_api, all_app_url, login_api, createApp_api } from '../config';

export const formUpdate = ({ prop, value }) => {
    return {
        type: FORM_UPDATE,
        payload: { prop, value }
    };
};
export const createForm = (name, subject, description, apk_file, image, size, creator, token, navigation) => {
    const mytoken = 'JWT ' + token;
    console.log(mytoken);
    var number = size;
    number = number / 1000000;
    number = number.toFixed(2);
    number = JSON.parse(number);
    return (dispatch) => {
        RNFetchBlob.fetch('POST', createApp_api, {
            Accept: 'application/json',
            Authorization: mytoken
            //'Content-Type': 'multipart/form-data'
        },
        [
            { 
                name: 'name',
                data: name //name
            },
            {
                name: 'app_description',
                data: description //description
            },
            {
                name: 'creator',
                data: JSON.stringify(creator)
            },
            {
                name: 'subject',
                data: 'action_game'
            },
            {
                name: 'size',
                data: JSON.stringify(number)
            },
            {
                name: 'apk_file',
                filename: 'kjk.apk',
                data: RNFetchBlob.wrap(apk_file)
            },
            {
                name: 'image',
                filename: 'kjkdsjjsdkk.png',
                data: RNFetchBlob.wrap(image)
            }
        ]
        ).then((res) => { 
            navigation.navigate('Home');
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

/*
fetch('http://172.17.10.51:8000/app/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                
            },
            body: JSON.stringify({
                name: name,
                app_description: app_description,
                creator: 1,
                subject: subject,
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
*/

export const signupUpdate = ({ prop, value }) => {
    return {
        type: SIGNUP_UPDATE,
        payload: { prop, value }
    };
};
export const signup = (firstname, lastname, username, phone, email, password) => {
    return (dispatch) => {
        RNFetchBlob.fetch('POST', signup_api, {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data'
        },
        [
            {
                name: 'username',
                data: username
            },
            { 
                name: 'first_name',
                data: firstname
            },
            {
                name: 'last_name',
                data: lastname
            },
            {
                name: 'email',
                data: email
            },
            {
                name: 'mobile_number',
                data: phone
            },
            {
                name: 'password',
                data: password
            }
        ]
        ).then((res) => { 
            //console.log(res);
            //console.log(firstname);
            //console.log('correct');
            login(username, password);
            dispatch({ type: SIGNUP_SUCCESS });
        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: SIGNUP_FAIL });
        });
    };
};
export const LoginformUpdate = ({ prop, value }) => {
    console.log('55');
    return {
        type: LOGIN_UPDATE,
        payload: { prop, value }
    };
};
export const login = (username, password) => {
    return (dispatch) => {
        RNFetchBlob.fetch('POST', login_api, {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data'
        },
        [
            {
                name: 'username',
                data: username
            },
            {
                name: 'password',
                data: password
            }
        ]
        ).then((res) => { 
            console.log(res.data);
            //console.log(firstname);
            //console.log('correct');
            const obj = JSON.parse(res.data);
            dispatch({ type: LOGIN_SUCCESS, mytoken: obj['token'] });
        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: LOGIN_FAIL });
        });
    };
};
export const signout = () => {
    return {
        type: SIGN_OUT
    };
};

