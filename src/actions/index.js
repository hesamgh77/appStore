import RNFetchBlob from 'rn-fetch-blob';
import axios from 'axios';
import { FORM_UPDATE,  //appReducer.js
    CREATE_FORM,
    REMOVE_CREATEAPP_MESSAGE,
    ENABLE_LOADING,
    DISABLE_LOADING, 

    SIGNUP_UPDATE,  //userReducer.js
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    SIGNUP_REMOVE_MESSAGE,

    LOGIN_UPDATE,   //loginReducer.js
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    SIGN_OUT,
    REMOVE_ERROR_LOGIN,
    LOGIN_LOADING,
    
    GET_ALL_APP,   //allAppReducer.js
    UPDATE_PROFILE,
    UPDATE_HOME_PAGE,
    GET_POPULAR_APP,

    ONSTAR,
    OFFSTAR,

    GET_ALL_COMMENT,
    COMMENT_FORM_UPDATE,
    UPDATE_COMMENTS,
    CREATE_COMMENT,
    DELETE_ALL_COMMENT,

    GET_ALL_BOOKMARKED,
    ADD_TO_BOOKMARK
} from './types';
import { signup_api, all_app_url, login_api, createApp_api, get_profile_api, comment_api, bookmark_api, download_api } from '../config';

////////////////////////////////////////////////////////////////////////////////////

//*Creating App */ appReducer.js
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
                data: subject
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
};
export const remove_createApp_message = () => {
    return { type: REMOVE_CREATEAPP_MESSAGE };
};
//////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////
//* SignUp  ///userReducer.js
export const signupUpdate = ({ prop, value }) => {
    return {
        type: SIGNUP_UPDATE,
        payload: { prop, value }
    };
};
export const remove_update_message = () => {
    return { type: SIGNUP_REMOVE_MESSAGE };
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
            /*
            console.log(res);
            console.log(res.data);
            console.log(res.respInfo);
            console.log(res.respInfo.status);
            */
            if (res.respInfo.state == 201){
                dispatch({ type: SIGNUP_SUCCESS });
            } else {
                dispatch({ type: SIGNUP_FAIL });
            }
            const obj = JSON.parse(res.data);
        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: SIGNUP_FAIL });
        });
    };
};
/////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////*Login / loginReducer.js
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
                const obj = JSON.parse(res.data);
                if (typeof obj['non_field_errors'] !== "undefined") {
                    console.log('Errrrrrrrrrrrrrrrrrror');
                    dispatch({ type: LOGIN_FAIL, payload: 'invalid' });
                } else {
                    console.log('adj');
                
                    dispatch({ type: REMOVE_ERROR_LOGIN });
                    dispatch({ type: LOGIN_SUCCESS, mytoken: obj['token'] });
                    navigation.goBack();
                    navigation.navigate('Home');
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
///////////////////////////////////////////////////////////////////////////////////////////////

//*Showing homePage // AllAppReducer.js
export const getAllApp = () => {
    console.log('start of action');
    return (dispatch) => {
        fetch(all_app_url, {
            method: 'GET',
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('data', data);
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

export const getPopularApp = () => {
    return (dispatch) => {
        RNFetchBlob.fetch('GET', download_api, {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        })
        .then((data) => data.json())
        .then((res) => {
            console.log("*******");
            console.log(res); 
            dispatch({ type: GET_POPULAR_APP, payload: res });
        })
        .catch((error) => console.log(error));
    };
};
//////////////////////////////////////////////////////////////////////////////////////////////
///////////////////CommentReducer.js & AppPage.js
export const getAllComment = (idApp) => {
    console.log('1');
    var hasComment = false;
    return (dispatch) => {
        //var xhr = new XMLHttpRequest();
        //xhr.open('GET', comment_api, true);
        //xhr.send({ app: 5 });
        var url = comment_api + idApp;
        console.log(url);
        RNFetchBlob.fetch('GET', url, {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
        )
        .then((response) => {
            if (response.respInfo.status == 200) {
                hasComment = true;
            }
            
            //console.log(response.respInfo.status);
            return response.json();
        })
        .then((res) => { 
            console.log('data', res);
            if (hasComment == true) {
                dispatch({ type: GET_ALL_COMMENT, payload: res });
            }            
        })
        .catch((error) => {
            console.log(error);
        });
    };
};
export const update_comment_form = ({ prop, value }) => {
    return {
        type: COMMENT_FORM_UPDATE,
        payload: { prop, value }
    };
};
export const update_comments = () => {
    return { type: UPDATE_COMMENTS };
};
export const create_comment = (commentText, userId, appId, token) => {
    const mytoken = 'JWT ' + token;
    //console.log("**********");
    //console.log(commentText, userId, appId, token);
    //console.log("**********");
    var hasComment = false;
    return (dispatch) => {
        RNFetchBlob.fetch('POST', comment_api, {
            Accept: 'application/json',
            Authorization: mytoken
        },
        [
        {
            name: 'comment',
            data: commentText
        },
        {
            name: 'user',
            data: JSON.stringify(userId)
        },
        {
            name: 'app',
            data: JSON.stringify(appId)
        }
        ]
        )
        .then((res) => {
            dispatch({ type: CREATE_COMMENT });
            console.log(res);
            var url = comment_api + appId;
            console.log(url);
            RNFetchBlob.fetch('GET', url, {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
            )
            .then((response) => {
                if (response.respInfo.status == 200) {
                    hasComment = true;
                }
                
                //console.log(response.respInfo.status);
                return response.json();
            })
            .then((res) => { 
                console.log('data', res);
                if (hasComment == true) {
                    dispatch({ type: GET_ALL_COMMENT, payload: res });
                }            
            })
            .catch((error) => {
                console.log(error);
            });  
        })
        ;
    };
};
export const delete_all_comment = () => {
    return { type: DELETE_ALL_COMMENT };
};
/////////////////////////////*Bookmark // bookmarkReducer.js
export const setStar = (isStarOn) => {
    if (isStarOn) {
        return { type: ONSTAR };
    } else {
        return { type: OFFSTAR };
    }
};
export const getBookmarkedApp = (userId, token) => {
    var url = bookmark_api + userId;
    const mytoken = 'JWT ' + token;
    return (dispatch) => {
    RNFetchBlob.fetch('GET', url, {
        Authorization: mytoken,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    })
    .then((data) => data.json())
    .then((res) => {
        dispatch({ type: GET_ALL_BOOKMARKED, payload: res });
        console.log(res);
    })
    .catch((err) => console.log(err));
    };
};
export const add_to_bookmark = (userId, appId, token) => {
    const mytoken = 'JWT ' + token;
    return (dispatch) => {
        RNFetchBlob.fetch('POST', bookmark_api, {
            Authorization: mytoken,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        [
            {
                name: 'user',
                data: JSON.stringify(userId)
            },
            {
                name: 'app',
                data: JSON.stringify(appId)
            }
        ])
        .then((data) => data.json())
        .then((res) => {
            dispatch({ type: ONSTAR });
            console.log(res);
        })
        .catch((error) => {
            console.log(error);
        });
    };    
};
