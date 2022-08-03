import {CommonActions} from '@react-navigation/native';

let navigator;

const setTopLevelNavigator = navigationRef => {
  navigator = navigationRef;
  console.log(navigator);
};

const navigate = (route, params) => {
  navigator.dispatch(
    CommonActions.navigate(route, {
      ...params,
    }),
  );
};

const goBack = () => {
  navigator.dispatch(CommonActions.goBack());
};

export default {setTopLevelNavigator, navigate, goBack};
