import React from "react";
import Register from './pages/register';
import { NativeBaseProvider } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <Register />
      teste
    </NativeBaseProvider>
  );
}