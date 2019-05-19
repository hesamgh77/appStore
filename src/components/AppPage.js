import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import { Button, CardSection, Card } from './common';
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
    /*
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
    */
    render() {
        var url=base_api+this.state.app.image;
        console.log(url);
        console.log(this.state.app.image);
        return (
            <View>
            <View style={styles.container}>
                <View>
                    <Image 
                        style={styles.imageStyle}
                        source={{ uri: url }}
                    />
                </View>

                <View style={styles.DetailAppStyle}>
                    <Text style={styles.AppNameStyle}>{this.state.app.name}</Text>
                    <Text style={styles.DescriptionStyle}>{this.state.app.app_description}</Text>
                    <Text style={styles.SizeStyle}>{this.state.app.size} MB</Text>
                </View>
            </View>
            <CardSection style={styles.cardSectionStyle}>
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
    },
    imageStyle: {
        height: 100,
        width: 100,
        //flex: 1,
        //width: null
    },
    container: {
        flexDirection: 'row',
        marginTop: 45,
        marginLeft: 35 
    },
    DetailAppStyle: {
        //marginTop: 15,
        //marginLeft: 85,
        paddingLeft: 70,
        alignItems: 'center',
        justifyContent: 'center'
    },
    AppNameStyle: {
        fontSize: 25,
        //marginBottom: 5,
        fontWeight: '600',
        color: 'black'
    },
    DescriptionStyle: {
        fontSize: 20,
        color: 'green'
    },
    SizeStyle: {
        fontSize: 15,
        marginTop: 15,
        color: 'gray'
    },
    cardSectionStyle: {
        marginTop: 20,
        color: 'green',
        borderBottomWidth: 0
    }
};
export default AppPage;
