import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import { Button } from './common';


class AppPage extends Component {
    handleChange() {
        console.log('pleas');
        let dirs = RNFetchBlob.fs.dirs;
        let options = {
            fileCache: true,
            path: dirs.SDCardDir,
            addAndroidDownloads: {
              useDownloadManager: true,
              notification: true
            }
        };
        RNFetchBlob
            .config(
                {
                    //fileCache: true,
                    path: dirs.DownloadDir,
                    addAndroidDownloads: {
                      useDownloadManager: true,
                      notification: true
                    }
                }
            )
            .fetch('GET', 'http://192.168.1.102:8000/media/apk_files/bazaar.apk', {
            //some headers ..
            })
            .then((res) => {
            console.log('hessam');
            // the temp file path
            console.log('The file saved to ', res.path());
            })
            .catch((error) => console.log(error));
            }
    render() {
        const { navigation } = this.props;
        const myapp = navigation.getParam('myApp', 'nothing');
        console.log(myapp);
        return (
                <Button onPress={() => this.handleChange()}>   
                    Click Here for choosing File ...
                </Button>
           
        );
    }
}
const styles = {
    uploadTextStyle: {
        fontSize: 18

    }
};
export default AppPage;
