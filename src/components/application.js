//libs
import React, { Component } from 'react';
import {  View ,StyleSheet} from 'react-native';
import ButtonsList from './buttonsList';
import { Container, Footer, FooterTab, Button, Icon, Text, Content } from 'native-base';

class Application extends Component {
    static navigationOptions = {
      title: 'Home'
    }
    constructor(props){
        super(props);
    }
   
  render() {
    const items = [
        { id: 1, title: "Dogs", status: false, selectedButton:false},
        { id: 2, title: "Cats", status: false, selectedButton:false},
        { id: 3, title: "LandScapes" , status: false,selectedButton:false},
        { id: 4,title: "Nature", status: false,selectedButton:false}
    ];
 
    return (
      <Container>
      <Content style={styles.view}>
        <ButtonsList items={items} navigation={this.props.navigation}/>
      </Content>
          <Footer>
            <FooterTab>
              <Button vertical>
                <Icon name="apps" />
                <Text>Apps</Text>
              </Button>
              <Button vertical>
                <Icon name="camera" />
                <Text>Camera</Text>
              </Button>
              <Button vertical active>
                <Icon active name="navigate" />
                <Text>Navigate</Text>
              </Button>
              <Button vertical>
                <Icon name="person" />
                <Text>Contact</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
    );
  }
}
 

 
export default Application;

const styles = StyleSheet.create({
  view :{
    height: 100,
    flex: 1
  }
});

