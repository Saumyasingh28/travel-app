import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import AuthNavigator from './AuthFlowNavigation';
import TabNavigator from './TabNavigator';

const RootNavigator = createAppContainer(
  createSwitchNavigator(
    {
      AuthFlow: AuthNavigator,
      TabNavigator: TabNavigator,
    },
    {
      initialRouteName: 'AuthFlow',
    },
  ),
);

export default RootNavigator;
