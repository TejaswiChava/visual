//lib
import React, { Component } from 'react'
import {
StyleSheet,
View,
ListView,
TextInput,
TouchableOpacity,
TouchableHighlight,
AsyncStorage,
Image,Alert
} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import Slideshow from '../lib/slideShow';
import PropTypes from 'prop-types';


export default class Display extends Component {
  static navigationOptions = {
    title: 'Display'
  }
  constructor(props) {
    super(props);

    this.state = {
      position: 1,
      interval: null,
      dataSource: [
   
      ],
    };
  }

  componentWillMount() {
    const {navigation} = this.props;
    const Images = navigation.getParam('images');
    this.setState({dataSource: Images})
    this.setState({
      interval: setInterval(() => {
        this.setState({
          position: this.state.position === (this.state.dataSource.length -1)? 0 : this.state.position + 1
        });
      }, 2000)
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  render() {
    

    return (
      <Container>
        <Content>
          <Slideshow 
              dataSource={this.state.dataSource}
              position={this.state.position}
              onPositionChanged={position => this.setState({ position })} />
          </Content>
      
      </Container>
    );
  }
}