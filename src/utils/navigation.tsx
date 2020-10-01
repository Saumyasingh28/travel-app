import { NavigationActions, SwitchActions } from 'react-navigation';
const config: any = {};
export const navigate = (path: any) => {
  if (config.navigator) {
    config.navigator.dispatch(NavigationActions.navigate({ routeName: path }));
  }
};
// sets the navigator reference
export const setNavigator = (nav: any) => {
  if (nav) {
    config.navigator = nav;
  }
};
export const jumpToSwitchNavigatorStack = (screen: any) => {
  if (config.navigator) {
    config.navigator.dispatch(SwitchActions.jumpTo({ routeName: screen }));
  }
};
