import React, { Component } from 'react';
import { TouchableOpacity, Text, View, Picker } from 'react-native';
import { connect } from 'react-redux';
import { DocumentPicker, DocumentPickerUtil } from 'react-native-document-picker';
import { formUpdate, createForm, remove_createApp_message } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';
/*
<CardSection>
                    <Input 
                        label="Subject"
                        placeholder="Sport"    
                        value={this.props.subject}
                        onChangeText={text => this.props.formUpdate({ prop: 'subject', value: text })}
                    />
                </CardSection>
*/
class RegisterAppForm extends Component {
    state = { 
        imageName: 'Click Here for choosing Image ...',
        fileName: 'Click Here for choosing File ...',
        appname_error: '',
        description_error: '',
        imageUri_error: '',
        fileUri_error: ''
    }
    handleImageFileChange() {
         //Opening Document Picker
         DocumentPicker.show(
            {
              filetype: [DocumentPickerUtil.allFiles()],
              //All type of Files DocumentPickerUtil.allFiles()
              //Only PDF DocumentPickerUtil.pdf()
              //Audio DocumentPickerUtil.audio()
              //Plain Text DocumentPickerUtil.plainText()
            },
            (error, res) => {
              this.setState({ imageUri: res.uri });
              this.setState({ imageType: res.type });
              this.setState({ imageName: res.fileName });
              this.setState({ imageSize: res.fileSize });
              this.props.formUpdate({ prop:'image_file', value: res.uri });
              this.props.formUpdate({ prop:'imageName', value: res.fileName });
              console.log('res : ' + JSON.stringify(res));
              console.log('URI : ' + res.uri);
              console.log('Type : ' + res.type);
              console.log('File Name : ' + res.fileName);
              console.log('File Size : ' + res.fileSize);
            }
          );
    }
    handleApkFileChange() {
        //Opening Document Picker
        DocumentPicker.show(
          {
            filetype: [DocumentPickerUtil.allFiles()],
            //All type of Files DocumentPickerUtil.allFiles()
            //Only PDF DocumentPickerUtil.pdf()
            //Audio DocumentPickerUtil.audio()
            //Plain Text DocumentPickerUtil.plainText()
          },
          (error, res) => {
            this.setState({ fileUri: res.uri });
            this.setState({ fileType: res.type });
            this.setState({ fileName: res.fileName });
            this.setState({ fileSize: res.fileSize });
            this.props.formUpdate({ prop: 'apk_file', value: res.uri });
            this.props.formUpdate({ prop: 'file_size', value: res.fileSize });
            this.props.formUpdate({ prop: 'fileName', value: res.fileName });
            console.log('res : ' + JSON.stringify(res));
            console.log(this.props);
            console.log('URI : ' + res.uri);
            console.log('Type : ' + res.type);
            console.log('File Name : ' + res.fileName);
            console.log('File Size : ' + res.fileSize);
          }
        );
        /*
        RNFetchBlob.fetch('POST', 'http://www.example.com/upload-form', {}, [
            { name: 'avatar-foo', filename: 'avatar-foo.png', type: 'image/foo', data: RNFetchBlob.wrap(this.state.fileUri) }]
            ).then((resp) => {
                console.log(resp);
          }).catch((err) => {
                console.log(err);
          });
          */ 
    }
    
    checkField = () => {
        let value = 1;
        const nameApp_regular_exp = /^(?=.*[A-Za-z])[A-Za-z]{3,9}$/;
        const description_regular_exp = /^[A-Za-z\d\s]{3,75}$/;
        const file_regular_exp = /.*(apk)$/;
        const image_regular_exp = /.*(jpeg|jpg)$/;
        
        if (nameApp_regular_exp.test(this.props.appName)) {
            this.setState({ appname_error: '' });
        } else {
            this.setState({ appname_error: 'it should be 3 to 9 character' });
            value = 0;
        }
        if (description_regular_exp.test(this.props.description)) {
            this.setState({ description_error: '' });
        } else {
            this.setState({ description_error: 'it should be 3 to 75 character' });
            value = 0;
        }
        if (file_regular_exp.test(this.props.fileName)) {
            this.setState({ fileUri_error: '' });
        } else {
            this.setState({ fileUri_error: 'just apk file' });   
            value = 0;
        }
        if (image_regular_exp.test(this.props.imageName)) {
            this.setState({ imageUri_error: '' });   
        } else {
            this.setState({ imageUri_error: 'just image' });   
            value = 0;
        }

        if (value == 1) {
            return true;
        } else {
            return false;
        }
    }
    renderSpinner() {
        if (this.props.loading) {
            return <Spinner size='large' />;
        }
        return (
            <Button onPress={() => {
                this.props.remove_createApp_message();
                if (this.checkField()) {
                    this.props.createForm(this.props.appName, this.props.subject, this.props.description, this.state.fileUri, this.state.imageUri, this.state.fileSize, this.props.id_user, this.props.token);
                }
            }}
            >
                <Text style={{ color: '#3cb371' }}>Create</Text>
            </Button>
        );
    }
    renderMessage() {
        if (this.props.isSuccess === true) { 
            return (<Text style={{ color: 'green', fontSize: 20 }}>success</Text>);
            //this.props.navigation.goBack();  
        }
        if (this.props.isSuccess === false) {
            return (
                <Text style={{ color: 'red', fontSize: 20 }}>failed</Text>
            );
        }
    }
    render() {
        return (
            <View>
                <CardSection>
                    <Input
                        label="App name"
                        placeholder="Telegram"
                        value={this.props.appName}
                        onChangeText={text => this.props.formUpdate({ prop: 'appName', value: text })}
                    />
                </CardSection>
                <Text style={styles.errorTextStyles}>{this.state.appname_error}</Text>
                <CardSection>
                    <Input 
                        ContainerStyle={styles.DescriptionStyle}
                        label="Description"
                        placeholder="this app use for sport"  
                        value={this.props.description}  
                        onChangeText={text => this.props.formUpdate({ prop: 'description', value: text })}
                        multiline
                        
                    />
                </CardSection>
                <Text style={styles.errorTextStyles}>{this.state.description_error}</Text>
                <CardSection >
                    <Text style={styles.pickerTextStyle}>Subject</Text>
                    <Picker
                        style={{ flex: 2 }}
                        selectedValue={this.props.subject}
                        onValueChange={value => this.props.formUpdate({ prop: 'subject', value: value })}
                    >
                        <Picker.Item label="action_game" value="action_game" />
                        <Picker.Item label="puzzle_game" value="puzzle_game" />
                        <Picker.Item label="driver_game" value="driver_game" />
                        <Picker.Item label="score_game" value="score_game" />
                        <Picker.Item label="sports_game" value="sports_game" />
                        <Picker.Item label="strategic_game" value="strategic_game" />
                        <Picker.Item label="weather_app" value="weather_app" />
                        <Picker.Item label="education_app" value="education_app" />
                        <Picker.Item label="tools_app" value="tools_app" />
                        <Picker.Item label="cooking_app" value="cooking_app" />
                        <Picker.Item label="lifestyle_app" value="lifestyle_app" />
                        <Picker.Item label="health_app" value="health_app" />
                        <Picker.Item label="social_app" value="social_app" />
                        <Picker.Item label="network_app" value="network_app" />
                        <Picker.Item label="media_app" value="media_app" />

                    </Picker>
                </CardSection>

                <CardSection style={{ height: 60 }}>
                    <View style={styles.uploadViewStyle}>
                        <TouchableOpacity
                            onPress={this.handleApkFileChange.bind(this)}
                        >   
                            <Text style={styles.uploadTextStyle}>{this.props.fileName}</Text>
                        </TouchableOpacity>
                    </View>
                </CardSection>
                <Text style={styles.errorTextStyles}>{this.state.fileUri_error}</Text>

                <CardSection style={{height: 60, borderBottomWidth: 0 }}>
                    <View style={styles.uploadViewStyle}>
                        <TouchableOpacity
                            onPress={this.handleImageFileChange.bind(this)}
                        >   
                            <Text style={styles.uploadTextStyle}>{this.props.imageName}</Text>
                        </TouchableOpacity>
                    </View>
                </CardSection>
                <Text style={styles.errorTextStyles}>{this.state.imageUri_error}</Text>
                <View style={{ alignItems: 'center' }}>
                    {this.renderMessage()}
                </View>
                <CardSection style={{ borderBottomWidth: 0 }} >
                        {this.renderSpinner()}
                </CardSection>
            </View>  
        );
    }
}
const styles = {
    DescriptionStyle: {
        height: 80
    },
    uploadViewStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    uploadTextStyle: {
        fontSize: 18

    },
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20,
        color: 'black',
        marginTop: 10,
        flex: 1
    },
    errorTextStyles: {
        fontSize: 15,
        //fontWeight: '500',
        color: 'red',
        textAlign: 'center'
    }
};
const mapStateToProps = state => {
    return {
        appName: state.app.appName,
        constructor: state.app.constructor,
        subject: state.app.subject,
        description: state.app.description,
        token: state.loginUser.token,
        apk_file: state.app.apk_file,
        image_file: state.app.image_file,
        file_size: state.app.file_size,
        id_user: state.profileUser.userProfile[0].id,
        imageName: state.app.imageName,
        fileName: state.app.fileName,
        isSuccess: state.app.isSuccess,
        loading: state.app.loading
    };
};
export default connect(mapStateToProps, { formUpdate, createForm, remove_createApp_message })(RegisterAppForm);
