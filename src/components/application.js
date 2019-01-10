//libs
import React, { Component } from 'react';
import {  View ,StyleSheet} from 'react-native';
import ButtonsList from './buttonsList';
import { Container, Footer, FooterTab, Button, Icon, Text, Content } from 'native-base';
import {connect} from 'react-redux';

// app
import {getimages, loadInit, loadSuccess} from '../actions/actions';

class Application extends Component {
    static navigationOptions = {
      title: 'Home'
    }
    constructor(props){
        super(props);
        this.state = {
          buttons:[],
          isLoading:Boolean,
        }
    }
  //   getInitialState(){
  //    this.props.getimages();
  //    return{
  //     const: this.props.buttons
  //    }
  // }
     componentWillMount(){
       this.props.loadInit();
      this.props.getimages();
      console.log(`CHECKING ${this.props.buttons}`)
    }
    componentDidMount(){
      //this.props.loadSuccess();
    }
   
  render() {
    
  //   const items = [
  //     { id: 1, title: "Dogs", status: false, selectedButton:false},
  //     { id: 2, title: "Cats", status: false, selectedButton:false},
  //     { id: 3, title: "LandScapes" , status: false,selectedButton:false},
  //     { id: 4,title: "Nature", status: false,selectedButton:false}
  // ];

    let isLoading = this.state.isLoading;
    
    const {buttons} = this.props
    if(buttons)
      {
        isLoading = this.props.isLoading;
      }
  
    return (
      
      !isLoading && 
      <Container>
        <Content style={styles.view}>
          <ButtonsList items={buttons} navigation={this.props.navigation}/>
        </Content>
        </Container>
    );
  }
}
 
function mapStateToProps(state){
  console.log(`mapState to Props Loading ${state.isLoading} and buttons list ${state.buttons}`);
  return{
    buttons: state.buttons,
    isLoading: state.isLoading
  }
}


 
export default connect(mapStateToProps,{getimages, loadInit})(Application);

const styles = StyleSheet.create({
  view :{
    height: 100,
    flex: 1
  }
});

