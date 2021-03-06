import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen113207Navigator from '../features/BlankScreen113207/navigator';
import BlankScreen013206Navigator from '../features/BlankScreen013206/navigator';
import BlankScreen213205Navigator from '../features/BlankScreen213205/navigator';
import BlankScreen013204Navigator from '../features/BlankScreen013204/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen113207: { screen: BlankScreen113207Navigator },
BlankScreen013206: { screen: BlankScreen013206Navigator },
BlankScreen213205: { screen: BlankScreen213205Navigator },
BlankScreen013204: { screen: BlankScreen013204Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
