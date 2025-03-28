import { ChakraProvider } from "@chakra-ui/react";
import '@/styles/globals.css';  // Keep global styles if you have them

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
