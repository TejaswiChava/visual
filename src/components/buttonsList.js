// libs
import React, { Component } from 'react';
import { View,ListView, StyleSheet, Text,Button,Alert } from 'react-native';
import { Container, Footer, FooterTab, Icon, Content } from 'native-base';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

// app
import {getcatsimages,getdogsimages,getlandscapesimages,getnatureimages,getimages} from '../actions/actions';
import ButtonListItem from './buttonListItem';


class ButtonsList extends Component {
    
    constructor(props) {
        super(props);
        this.dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.rows = this.props.items.map(item => {
            return { id: item.id, title: item.title,status: item.status,selectedButton:item.selectedButton};
         });
  
         // global properties
         this.state = {
             dataSource: this.dataSource.cloneWithRows(this.rows),
             ButtonStateHolder: true,
             items: [],
             images:[]
         };
    }
    // componentWillMount (){
    //     this.props.getimages();
    // }

    onSelectionItem(item) {
       
         if(item.status == 0){
            item.selectedButton = 1
            item.status = 1 
            for(let i = 0; i < this.props.items.length ; i++ ){
                if(item.id == this.props.items[i].id){
                    this.state.items.push(this.props.items[i])
                }
                this.setState({ButtonStateHolder:false});
            }
           }
        else {
            item.selectedButton =0;
            item.status = 0

            const index = this.state.items.findIndex(x => x.id == item.id);
            this.state.items.splice(index, 1);
        }
     
        if(this.state.items.length <=0)
            {
                this.setState({ButtonStateHolder:true});
            }

        for(let i = 0; i < this.state.items.length; i++){

            switch(this.state.items[i].title){
                case 'dogs' : this.props.getdogsimages();
                break;
                case 'cats' : this.props.getcatsimages();
                break;
                case 'landscapes' : this.props.getlandscapesimages();
                break;
                case 'nature' : this.props.getnatureimages();
                break;
                default : 'null'
                 break;
                }
            } 
        }
    startButton() {
        
    var tempState = [];
    this.state.items.map((key) => {key.title

        switch(key.title){
            case 'dogs': tempState = tempState.concat(this.props.dogsimages);

            break;
            case 'cats': tempState = tempState.concat(this.props.catsimages);
            break;
            case 'landscapes': tempState = tempState.concat(this.props.landscapeimages);
            break;
            case 'nature': tempState = tempState.concat(this.props.natureimages);
            break;
            default : 
            break;
            }
    })
    // Alert.alert(tempState);
    this.props.navigation.navigate('Display',{images: tempState});
   
    }
    renderRow (item, sectionID, rowID) {
        return (<ButtonListItem item={item} onSelectionItem = {(item)=> this.onSelectionItem(item)}/>);
    }
    render() {
        return(
            <Container>
                <Content>
                    <View >
                        <ListView dataSource={this.state.dataSource}
                            renderRow={(item, sid, rid ) => this.renderRow(item, sid, rid)} />
                    </View>
                    <View style={styles.view}>
                     <Button title='START' onPress={() => this.startButton()} disabled= {this.state.ButtonStateHolder} />
                    </View>

                </Content>

            </Container>
          
        )
    }
}
ButtonsList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        status: PropTypes.bool.isRequired,
        selectedButton: PropTypes.bool.isRequired
    })).isRequired,
    navigation: PropTypes.object.isRequired,
};
function mapStateToProps(state){
    return{
        dogsimages:state.dogsimages,
        catsimages:state.catsimages,
        landscapeimages:state.landscapeimages,
        natureimages:state.natureimages
    }
}
export default connect(mapStateToProps,{getcatsimages,getdogsimages,getlandscapesimages,getnatureimages,getimages})(ButtonsList);


const styles = StyleSheet.create({
    view :{
        flex: 1,
        marginTop:300,
        marginRight:120,
        marginLeft:120,
        backgroundColor:'#ececec',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#ececec'
      
    }
  });
  