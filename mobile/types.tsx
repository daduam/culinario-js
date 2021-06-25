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
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
  TabThree: undefined;
  TabFour: undefined;
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

export type TabFourParamList = {
  TabFourScreen: undefined;
};

export type AuthData = {
  token: string;
  email: string;
  name?: string;
};

export type AuthContextData = {
  authData?: AuthData;
  loading: boolean;
  login(): Promise<void>;
  logout(): void;
};
