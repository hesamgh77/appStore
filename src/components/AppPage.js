import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import { Button, CardSection } from './common';
import { all_app_url, base_api } from '../config';

class AppPage extends Component {
    state= {
        app: []
    };
    componentWillMount() {
        const { navigation } = this.props;
        const id = navigation.getParam('myApp', 'nothing');
        console.log(id);
        const app_url = all_app_url + id + '/';
        fetch(app_url, {
            method: 'GET'
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('data', data);
            this.setState({ app: data });
        })
        .catch((error) => {
        console.error(error);
        console.log(state.app);
        });
    }
    handleChange() {
        console.log('pleas');
        let dirs = RNFetchBlob.fs.dirs;
        //filePath = `${dirs.DownloadDir}/${filename}.${type}`
        /*let options = {
            fileCache: true,
            path: dirs.SDCardDir,
            addAndroidDownloads: {
              useDownloadManager: true,
              notification: true
            }
        };
        */
        const url = base_api + this.state.app.apk_file;
        console.log(url);       
        RNFetchBlob
            .config(
                {
                    addAndroidDownloads: {
                        useDownloadManager: true,
                        title: 'bazar.apk',
                        description: 'An APK that will be installed',
                        mime: 'application/apk',
                        mediaScannable: true,
                        notification: true,
                        path: RNFetchBlob.fs.dirs.SDCardDir + "/hesam" //add
                        }
                    /*addAndroidDownloads: {
                      useDownloadManager: true,
                      notification: true
                    }
                    */
                    /*addAndroidDownloads: {
                        //fileCache: true,
                        useDownloadManager: true,
                        notification: true,
                        mime: 'application/apk',
                        path: dirs.SDCardDir + '/pppath-to-fileeedaldklklda.apk'
                    }
                    addAndroidDownloads: {
                        useDownloadManager: true,
                        notification: true,
                    },*/
                }
            )
            .fetch('GET', url, {
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
        return (
                <View>
                    <Text>{this.state.app.name}</Text>
                    <Text>{this.state.app.app_description}</Text>
                    <Text>{this.state.app.subject}</Text>
                    <Text>{this.state.app.size}</Text>
                    <Text>{this.state.app.download_number}</Text>
                    <CardSection>
                        <Button onPress={() => this.handleChange()}>   
                            Download
                        </Button>     
                    </CardSection>
                                   
                </View>

           
        );
    }
}
const styles = {
    uploadTextStyle: {
        fontSize: 18

    }
};
export default AppPage;
