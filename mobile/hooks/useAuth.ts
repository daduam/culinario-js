import * as React from "react";

import { AuthContext } from "../contexts/Auth";
import { AuthContextData } from "../types";

export const useAuth = (): AuthContextData => {
  const context = React.useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
