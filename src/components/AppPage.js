import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import RNFetchBlob from 'rn-fetch-blob';
import { Button, CardSection, Card } from './common';
import { all_app_url, base_api } from '../config';
import white_star from '../icon/white_star.png';
import yellow_star from '../icon/yellow_star.png';
import { setStar } from '../actions';

class AppPage extends Component {
    state= {
        app: [],
        star: true
    };
    componentWillMount() {
        this.props.setStar(true);
        const { navigation } = this.props;
        const id = navigation.getParam('myApp', 'nothing');
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
    handleChange(nameOfApp) {
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
        const new_name = RNFetchBlob.fs.dirs.SDCardDir + `/${nameOfApp}.apk`;
        RNFetchBlob
            .config(
                {
                    addAndroidDownloads: {
                        useDownloadManager: true,
                        title: `${nameOfApp}.apk`,
                        description: 'An APK that is downloading',
                        mime: 'application/apk',
                        mediaScannable: true,
                        notification: true,
                        path: new_name //add
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
    handle_star(star) {
        if (star) {
            return (
            <TouchableOpacity onPress={() => this.props.setStar(false)}>
            <View style={styles.starViewStyle}>
                <Image 
                    style={styles.starStyle}
                    source={yellow_star}
                />
            </View>
            </TouchableOpacity>
            );
        }
        return (
            <TouchableOpacity onPress={() => this.props.setStar(true)}>
            <View style={styles.starViewStyle}>
                <Image 
                    style={styles.starStyle}
                    source={white_star}
                />
            </View>
            </TouchableOpacity>
        );
    }
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
            {this.handle_star(this.props.isStarOn)}
            <CardSection style={styles.cardSectionStyle}>
                <Button onPress={() => this.handleChange(this.state.app.name)}>   
                    Download
                </Button>     
            </CardSection>
            </View>
        );
    }
}
const styles = {
    starViewStyle: {
        alignItems: 'center',
        marginTop: 20
    },
    starStyle: {
        width: 75,
        height: 75

    },
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
//export default AppPage;
const mapStateToProps = state => {
    return {
        isStarOn: state.bookmarkInfo.isStarOn
    };
};
export default connect(mapStateToProps, { setStar })(AppPage);
