import React, { Component } from 'react';
import axios from 'axios';
import { FlatList, Text, View, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import { Rating } from 'react-native-ratings';
import { ScrollView } from 'react-native-gesture-handler';
import RNFetchBlob from 'rn-fetch-blob';
import { Button, CardSection, Card, Input } from './common';
import { all_app_url, base_api, download_api } from '../config';
import white_star from '../icon/white_star.png';
import yellow_star from '../icon/yellow_star.png';
import { setStar, getAllComment, update_comment_form, create_comment, add_to_bookmark, delete_all_comment, getBookmarkedApp, setRate, delete_from_bookmark } from '../actions';

class AppPage extends Component {
    state= {
        app: [],
        star: true,
        rate: 3
    };
    componentWillMount() {
        this.props.delete_all_comment();
        
        const { navigation } = this.props;
        const id = navigation.getParam('myApp', 'nothing');
        console.log(id);
        this.props.getAllComment(id);
        if (this.props.isLogin == true && typeof this.props.userProfile[0] != 'undefined') {
            this.props.setStar(this.props.userProfile[0].id, id, this.props.token);
        }
        console.log(this.props.allComment);
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
        const { navigation } = this.props;
        const appId = navigation.getParam('myApp', 'nothing');
        var profile_user = this.props.userProfile[0];
        var userId = profile_user.id;
        const mytoken = 'JWT ' + this.props.token;
        RNFetchBlob.fetch('POST', download_api, {
            Authorization: mytoken,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            
        }, 
        [
            {
                name: 'app',
                data: JSON.stringify(appId)
            },
            {
                name: 'user',
                data: JSON.stringify(userId)
            }
        ]
        )
        .then((data) => data.json())
        .then((res) => console.log(res))
        .catch((error) => console.log(error))
        ;
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
        if (this.props.isLogin == true && typeof this.props.userProfile[0] != 'undefined') {

            console.log(this.props.profileUser);
            const { navigation } = this.props;
            const appId = navigation.getParam('myApp', 'nothing');
            var profile_user = this.props.userProfile[0];
            var userId = profile_user.id;
            //console.log(profile_user);
            if (star) {
                return (
                <View>
                <TouchableOpacity onPress={() => this.props.delete_from_bookmark(userId, appId, this.props.token)}>
                <View style={styles.starViewStyle}>
                    <Image 
                        style={styles.starStyle}
                        source={yellow_star}
                    />
                </View>
                </TouchableOpacity>
                <CardSection style={styles.cardSectionStyle}>
                    <Button onPress={() => this.handleChange(this.state.app.name)}>   
                        <Text style={{ color: 'rgb(60, 179, 113)' }}>Download</Text>
                    </Button>     
                </CardSection>
                <View style={{ borderTopWidth: 1, marginTop: 35, borderColor: '#b4b4b4', paddingTop: 15 }}>
                <Text style={{ textAlign: 'center', fontSize: 23, fontWeight: '600', marginBottom: 5 }}>Rating</Text>
                    <Rating 
                        style={styles.RatingStyle}
                        type='star'
                        ratingCount={5}
                        imageSize={35}
                        color='yello'
                        showRating
                        onFinishRating={this.ratingApp}
                    />
                    <TouchableOpacity onPress={() => this.props.setRate(userId, appId, this.state.rate, this.props.token)}>
                    <Text style={{ textAlign: 'center', marginTop: 15, fontSize: 23, color: 'rgb(60, 179, 113)' }}>
                        rate!!
                    </Text>
                    </TouchableOpacity>
                <Text style={{ textAlign: 'center', fontSize: 18, marginTop: 7, marginBottom: 10 }}>{this.props.messageRate}</Text>
                </View>
                </View>
                );
            }
            return (
                <View>
                    <TouchableOpacity onPress={() => this.props.add_to_bookmark(userId, appId, this.props.token)}>
                        <View style={styles.starViewStyle}>
                            <Image 
                                style={styles.starStyle}
                                source={white_star}
                            />
                        </View>
                    </TouchableOpacity>
                    <CardSection style={styles.cardSectionStyle}>
                        <Button onPress={() => this.handleChange(this.state.app.name)}>   
                            <Text style={{ color: 'rgb(60, 179, 113)' }}>Download</Text>
                        </Button>     
                    </CardSection>
                        <View style={{ borderTopWidth: 1, marginTop: 35, borderColor: '#b4b4b4', paddingTop: 15 }}>
                        <Text style={{ textAlign: 'center', fontSize: 23, fontWeight: '600', marginBottom: 5 }}>Rating</Text>
                        <Rating 
                                style={styles.RatingStyle}
                                type='star'
                                ratingCount={5}
                                imageSize={35}
                                color='yello'
                                showRating
                                onFinishRating={this.ratingApp}
                        />
                        <TouchableOpacity onPress={() => this.props.setRate(userId, appId, this.state.rate, this.props.token)}>
                            <Text style={{ textAlign: 'center', marginTop: 15, fontSize: 23, color: 'rgb(60, 179, 113)' }}>
                                rate!!
                            </Text>
                        </TouchableOpacity>
                        <Text style={{ textAlign: 'center', fontSize: 18, marginTop: 7, marginBottom: 10 }}>{this.props.messageRate}</Text>
                        </View>                
                </View>
            );
        } else {
            return (null);
        }
    }
    ratingApp = (rating) => {
        this.setState({ rate: rating });
        console.log(this.state);
    }
    showComments() {
        return (
            <FlatList
                data={this.props.allComment}
                style={styles.commentContainer}
                numColumns='1'
                renderItem={({ item }) =>
                this.renderComment(item)
            }
            />
        );
    }
    renderComment(comment) {
        console.log(comment['user']);
        console.log(comment['comment']);
        return (
            <View style={styles.containerCommentView}>
                <Text style={styles.userNameTextStyle}>{comment['user']}</Text>
                <Text style={styles.commentTextStyle}>{comment['comment']}</Text>
            </View>
        );
    }
    renderCommentForm() {
        var profile_user = this.props.userProfile[0];
        const { navigation } = this.props;
        const appId = navigation.getParam('myApp', 'nothing');
        if (this.props.isLogin === true) {
            return (
            <View>
            <CardSection style={{ borderBottomWidth: 0 }}>
                <Input
                    label="comment"
                    placeholder="your comment"
                    value={this.props.comment}
                    onChangeText={text => this.props.update_comment_form({ prop: 'comment', value: text })}
                />
            </CardSection>
            <CardSection style={styles.cardSectionStyle}>
                <Button onPress={() => this.props.create_comment(this.props.comment, profile_user.id, appId, this.props.token)}>   
                    <Text style={{ color: 'rgb(60, 179, 113)' }}>Send</Text>
                </Button>     
            </CardSection>
            </View>
            );
        }
        return (null);
    }
    render() {
        console.log("*//***/*//");
        var url=base_api+this.state.app.image;
        console.log(this.props.allComment);
        return (
            <ScrollView>
            <View style={styles.container}>
                <View style={{ flex: 1 }}>
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
            <View style={{ borderTopWidth: 1, marginTop: 20, borderColor: '#b4b4b4', paddingTop: 15 }}>
            <Text style={{ textAlign: 'center', fontSize: 23, fontWeight: '600', marginBottom: 5 }}>Comment</Text>
            {this.renderCommentForm()}
            {this.showComments()}
            </View>
            </ScrollView>
        );
    }
}
const styles = {
    containerCommentView: {
        paddingTop: 5,
        paddingBottom: 10,
        borderColor: '#b4b411',
        marginTop: 1,
        marginLeft: 5,
        marginRight: 5
    },
    userNameTextStyle: {
        fontSize: 20,
        fontWeight: '600',
        color: 'rgb(60, 179, 113)',
        marginLeft: 15,
        marginBottom: 7
    },
    commentTextStyle: {
        fontSize: 17,
        marginLeft: 45
    },
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
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    AppNameStyle: {
        fontSize: 25,
        fontWeight: '600',
        color: 'black',
        textAlign: 'center'
    },
    DescriptionStyle: {
        fontSize: 20,
        color: 'green',
        textAlign: 'center'
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
    },
    RatingStyle: {
        justifyContent: 'center',
        alignItems: 'center'
                //paddingVertical: 30
    },
    buttonStyles: {
        alignSelf: 'none'
    },
    commentContainer: {
        marginTop: 35
    }
};
//export default AppPage;
const mapStateToProps = state => {
    return {
        isStarOn: state.bookmarkReducer.isStarOn,
        allComment: state.commentReducer.allComment,
        comment: state.commentReducer.comment,
        userProfile: state.profileUser.userProfile,
        token: state.loginUser.token,
        isLogin: state.loginUser.isLogin,
        bookmarkedApp: state.bookmarkReducer.bookmarkedApp,
        messageRate: state.commentReducer.messageRate
    };
};
export default connect(mapStateToProps, { setStar, getAllComment, update_comment_form, create_comment, add_to_bookmark, delete_all_comment, getBookmarkedApp, setRate, delete_from_bookmark })(AppPage);
