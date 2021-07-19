/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type AuthStackParamList = {
  Register: undefined;
  Login: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
  TabThree: undefined;
  Account: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type TabThreeParamList = {
  TabThreeScreen: undefined;
};

export type AccountParamList = {
  AccountScreen: undefined;
};

export type AuthData = {
  token: string;
  email: string;
};

export type AuthContextData = {
  authData?: AuthData;
  loading: boolean;
  // TODO rename to storeLoginToken?
  setLoginToken(token: string, email: string): Promise<void>;
  removeLoginToken(): void;
};
