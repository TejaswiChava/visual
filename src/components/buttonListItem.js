//libs
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import PropTypes from 'prop-types';

class ButtonItem extends Component{
  constructor(props){
      super(props);
      this.state={
          selectedindex:0,
          selectedButton: false
      }
  }  
  get item (){
    return this.props.item
  }

  selectionOnPress = (item) => {
    this.props.onSelectionItem(item);
    this.state.selectedButton = (item.selectedButton == 1) ? this.setState({selectedButton: true}) : this.setState({selectedButton: false});
   }
  render () {
      return (
         <View>
             <TouchableHighlight style={ this.state.selectedButton ? styles.buttonPress : styles.button }  onPress={() => this.selectionOnPress(this.item)}>
                 <Text style={styles.buttonText}>{this.item.title}</Text>
             </TouchableHighlight>
        </View> 
      )
  }

}
ButtonItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        status: PropTypes.bool.isRequired,
        selectedButton: PropTypes.bool.isRequired
    }).isRequired,
    onSelectionItem: PropTypes.func
};
export default ButtonItem;

const styles = StyleSheet.create({
    button:{
        marginRight:120,
        marginLeft:120,
        marginTop:10,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'#ececec',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#ececec'
      },
      buttonText:{
        color:'#000',
        textAlign:'center',
    },
    buttonPress:{
        marginRight:120,
        marginLeft:120,
        marginTop:10,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'#ffa364',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#ffa364'
      }
});