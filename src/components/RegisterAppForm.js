import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import { DocumentPicker, DocumentPickerUtil } from 'react-native-document-picker';
import { formUpdate, createForm } from '../actions';

import { Card, CardSection, Input, Button } from './common';

class RegisterAppForm extends Component {
    handleChange() {
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
     
            console.log('res : ' + JSON.stringify(res));
            console.log('URI : ' + res.uri);
            console.log('Type : ' + res.type);
            console.log('File Name : ' + res.fileName);
            console.log('File Size : ' + res.fileSize);
          }
        );
      }
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="App name"
                        placeholder="Telegram"
                        value={this.props.appName}
                        onChangeText={text => this.props.formUpdate({ prop: 'appName', value: text })}
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        label="Constructors"
                        placeholder="hessam Gholami"
                        value={this.props.constructor}
                        onChangeText={text => this.props.formUpdate({ prop: 'constructor', value: text })}
                    />
                </CardSection>
                   
                <CardSection>
                    <Input 
                        label="Subject"
                        placeholder="Sport"    
                        value={this.props.subject}
                        onChangeText={text => this.props.formUpdate({ prop: 'subject', value: text })}
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        ContainerStyle={styles.DescriptionStyle}
                        label="Description"
                        placeholder="this app is use for sport"  
                        value={this.props.description}  
                        onChangeText={text => this.props.formUpdate({ prop: 'description', value: text })}
                        multiline
                        
                    />
                </CardSection>

                <CardSection>
                    <TouchableOpacity
                        onPress={this.handleChange.bind(this)}
                    >   
                        <Text>dad</Text>
                    </TouchableOpacity>
                </CardSection>

                <CardSection>
                    <Button onPress={() => this.props.createForm()}>
                        Create
                    </Button>
                </CardSection>


            </Card>

            
        );
    }
}
const styles = {
    DescriptionStyle: {
        height: 80
    }
};
const mapStateToProps = state => {
    return {
        appName: state.app.appName,
        constructor: state.app.constructor,
        subject: state.app.subject,
        description: state.app.description
    };
};
export default connect(mapStateToProps, { formUpdate, createForm })(RegisterAppForm);
