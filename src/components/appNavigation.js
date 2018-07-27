//libs
import { createStackNavigator } from 'react-navigation';
//app
import Display from './display';
import Application from './application';


const App = createStackNavigator({
    Home: { screen: Application },
    Display: {screen: Display}

});
export default App;