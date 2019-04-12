import React, { Component } from 'react';
import { View, WebView } from 'react-native';
import { connect } from 'react-redux';
import { formUpdate, createForm } from '../actions';


import { Card, CardSection, Input, Button } from './common';

class RegisterAppForm extends Component {
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
                    <Button onPress={() => this.props.createForm()}>
                        Create
                    </Button>
                </CardSection>

                <WebView 
                   source={{ uri: 'https://facebook.github.io/react-native' }} 
                   style={{flex: 1}}
                />
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
