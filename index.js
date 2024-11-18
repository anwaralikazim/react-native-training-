/**
 * @format
 */
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import LoginScreen from './StudentClearanceListManagementFYP/LoginScreen';
//import Canteen from './StudentClearanceListManagementFYP/CanteenRecord';
import ClearanceScreen from './StudentClearanceListManagementFYP/Applyforclearance';
import ClearanceStatus from './StudentClearanceListManagementFYP/ClearanceRequest';
//import Test from './StudentClearanceListManagementFYP/Test';
//import AppNavigator from './StudentClearanceListManagementFYP/AppNavigation';
import Main from'./.vscode/MiniStoreApp/dashboard';
import Canteen from './StudentClearanceListManagementFYP/CanteenRecord';
import AppNavigator from './StudentClearanceListManagementFYP/AppNavigation';
import PhotoCopierRecords from './StudentClearanceListManagementFYP/PhotoCopies';
import AccountDetails from './StudentClearanceListManagementFYP/AccountDetail';
import DataCellScreen from './StudentClearanceListManagementFYP/DataCell';
import WelcomeScreen from './StudentClearanceListManagementFYP/WelcomeScreen';
import PendingStudent from './StudentClearanceListManagementFYP/PendingStudent';
import ClearStudent from './StudentClearanceListManagementFYP/ClearStudent';
import LibraryRecords from './StudentClearanceListManagementFYP/Library';
import LabRecord from './StudentClearanceListManagementFYP/LabRecord';


AppRegistry.registerComponent(appName, () =>LabRecord);

