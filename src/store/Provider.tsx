"use client";

// Third party imports
import { Provider } from "react-redux";

// User imports
import store from "./store";

// Creating component to prevent the entire layout to become client component
export default function ReduxProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <Provider store={store}>{children}</Provider>;
}
