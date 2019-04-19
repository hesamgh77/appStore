import axios from 'axios';
import RNFetchBlob from 'rn-fetch-blob';
import { FORM_UPDATE, CREATE_FORM } from './types';


export const formUpdate = ({ prop, value }) => {
    return {
        type: FORM_UPDATE,
        payload: { prop, value }
    };
};
export const createForm = (name, app_description, subject) => {
    return (dispatch) => {
        RNFetchBlob.fetch('POST', 'http://192.168.122.1:8000/app/', {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data'
        },
        [
            { 
                name: 'name',
                data: name
            },
            {
                name: 'creator',
                data: '1'
            },
            {
                name: 'subject',
                data: 'add'
            },
            {
                name: 'download_number',
                data: '0'
            },
            {
                name: 'size',
                data: '45 mb'
            },
            {
                name: 'apk_file',
                filename: 'kjk',
                data: RNFetchBlob.wrap('content://com.android.externalstorage.documents/document/3137-3432%3Afaze3%2Ffaze3.eddx')
            }
            
        
        ]
        
        
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
