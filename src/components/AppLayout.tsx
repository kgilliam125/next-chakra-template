import { ChakraProvider, HStack, Text, Link } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Footer } from "./Footer";
import Navbar from "./Navbar";
import NextLink from "next/link";

interface LayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: LayoutProps) {
  return (
    <ChakraProvider>
      <main>
        <Navbar />
        {children}
        <Footer>
          <HStack>
            <Text>
              Created with ❤️
            </Text>
          </HStack>
        </Footer>
      </main>
    </ChakraProvider>
  );
}
