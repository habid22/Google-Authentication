import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import {router} from "./lib/route"



export default function App() {
  return (<ChakraProvider>
    <RouterProvider router={router}/>
      </ChakraProvider>
  );
}