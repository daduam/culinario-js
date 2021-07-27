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
  Feeds: undefined;
  Favorites: undefined;
  ShoppingList: undefined;
  Account: undefined;
};

export type FeedsParamList = {
  FeedsScreen: undefined;
};

export type FavoritesParamList = {
  FavoritesScreen: undefined;
};

export type ShoppingListParamList = {
  ShoppingListScreen: undefined;
};

export type AccountParamList = {
  AccountScreen: undefined;
  ChefInformation: undefined;
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
  removeLoginToken(): Promise<void>;
};
