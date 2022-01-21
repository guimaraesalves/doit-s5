import { ChakraProvider } from "@chakra-ui/provider";
import { ReactNode } from "react";

import {theme} from "../styles/theme";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => (
  <ChakraProvider theme={theme}>{children}</ChakraProvider>
);
