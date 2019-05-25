import RNFetchBlob from 'rn-fetch-blob';
import { FORM_UPDATE,
    CREATE_FORM,
    SIGNUP_UPDATE,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    LOGIN_UPDATE,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    SIGN_OUT,
    GET_ALL_APP,
    UPDATE_PROFILE,
    UPDATE_HOME_PAGE,
    REMOVE_ERROR_LOGIN,
    LOGIN_LOADING,
    SIGNUP_REMOVE_MESSAGE,
    REMOVE_CREATEAPP_MESSAGE,
    ENABLE_LOADING,
    DISABLE_LOADING
} from './types';
import { signup_api, all_app_url, login_api, createApp_api, get_profile_api } from '../config';

export const formUpdate = ({ prop, value }) => {
    return {
        type: FORM_UPDATE,
        payload: { prop, value }
    };
};
export const createForm = (name, subject, description, apk_file, image, size, creator, token) => {
    const mytoken = 'JWT ' + token;
    console.log(mytoken);
    var number = size;
    number = number / 1000000;
    number = number.toFixed(2);
    number = JSON.parse(number);
    console.log(subject);
    return (dispatch) => {
        dispatch({ type: REMOVE_CREATEAPP_MESSAGE });
        dispatch({ type: ENABLE_LOADING });
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
            console.log(res);
            //update_home_page();
            dispatch({ type: DISABLE_LOADING });
            dispatch({ type: CREATE_FORM });
            fetch(all_app_url, {
                method: 'GET',
            })
            .then((response) => response.json())
            .then((data) => {
                //console.log('data', data);
                dispatch({ type: GET_ALL_APP, payload: data });
            })
            .catch((error) => {
            console.error(error);
            });
        })
        .catch((err) => {
            dispatch({ type: DISABLE_LOADING });
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
        const real_username = username.toLowerCase();
        dispatch({ type: SIGNUP_REMOVE_MESSAGE });
        RNFetchBlob.fetch('POST', signup_api, {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data'
        },
        [
            {
                name: 'username',
                data: real_username
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
            console.log(res);
            console.log(res.data);
            console.log(res.respInfo);
            console.log(res.respInfo.status);
            if (res.respInfo.state == 201){
                dispatch({ type: SIGNUP_SUCCESS });
            } else {
                dispatch({ type: SIGNUP_FAIL });
            }
            const obj = JSON.parse(res.data);
            
            //console.log('correct');
            //login(username, password);
        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: SIGNUP_FAIL });
        });
    };
};
export const LoginformUpdate = ({ prop, value }) => {
    return {
        type: LOGIN_UPDATE,
        payload: { prop, value }
    };
};
export const login = (username, password, navigation) => {
    return (dispatch) => {
        dispatch({ type: REMOVE_ERROR_LOGIN });
        dispatch({ type: LOGIN_FAIL, payload: 'remove_emptyError' });
        if (username.length == 0 || password.length == 0){
            if (username.length == 0) {
                dispatch({ type: LOGIN_FAIL, payload: 'empty_username' });
            }
            if (password.length == 0) {
                dispatch({ type: LOGIN_FAIL, payload: 'empty_password' });
        }
        } else {
            dispatch({ type: LOGIN_LOADING });
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
                //console.log(res.data);
                const obj = JSON.parse(res.data);
                console.log('*****');
                console.log(obj);
                //console.log(obj['non_field_errors']);
                if (typeof obj['non_field_errors'] !== "undefined") {
                    console.log('Errrrrrrrrrrrrrrrrrror');
                    dispatch({ type: LOGIN_FAIL, payload: 'invalid' });
                } else {
                    console.log('adj');
                    navigation.goBack();
                    navigation.navigate('Home');
                    dispatch({ type: REMOVE_ERROR_LOGIN });
                    dispatch({ type: LOGIN_SUCCESS, mytoken: obj['token'] });
                    RNFetchBlob.fetch('GET', get_profile_api, {
                        Accept: 'application/json',
                        Authorization: 'JWT '+ obj['token']
                    })
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data);
                        dispatch({ type: UPDATE_PROFILE, payload: data });
                    })
                    .catch((err) => {
                        dispatch({ type: LOGIN_FAIL });
                    });
                }
            })
            .catch((err) => {
                console.log(err);
                dispatch({ type: LOGIN_FAIL });
            });
    }
    };
};
export const signout = () => {
    return {
        type: SIGN_OUT
    };
};
export const getAllApp = () => {
    console.log('start of action');
    return (dispatch) => {
        fetch(all_app_url, {
            method: 'GET',
        })
        .then((response) => response.json())
        .then((data) => {
            //console.log('data', data);
            dispatch({ type: GET_ALL_APP, payload: data });
        })
        .catch((error) => {
        console.error(error);
        });
    };
};
export const update_home_page = () => {
    return { type: UPDATE_HOME_PAGE };
};
export const remove_update_message = () => {
    return { type: SIGNUP_REMOVE_MESSAGE };
};
export const remove_createApp_message = () => {
    return { type: REMOVE_CREATEAPP_MESSAGE };
};
