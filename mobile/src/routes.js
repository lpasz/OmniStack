import {
    createAppContainer,
    createSwitchNavigator
} from 'react-navigate';

import Login from './pages/Login';
import List from './pages/List';
import Book from './pages/Book';


const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        List,
        Book
    })
);

export default Routes; 