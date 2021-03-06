//libs
import { createStackNavigator } from 'react-navigation';
//app
import Display from './display';
import Application from './application';


const App = createStackNavigator({
    Home: { screen: Application , navigationOptions:{
        title:'Home'
    }},
    Display: {screen: Display , navigationOptions: {
        title:'Slide Show',
        headerLeft: Platform.OS === 'android' ? null : '' 
    }}

});
export default App;