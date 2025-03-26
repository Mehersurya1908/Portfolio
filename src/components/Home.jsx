import { Box, Heading, Text, Button, VStack, HStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";

const MotionBox = motion(Box);

export default function Home() {
  return (
    <VStack
      minH="100vh"
      bgGradient="linear(to-br, gray.900, black)"
      justify="center"
      align="center"
      spacing={8}
      color="white"
      textAlign="center"
    >
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Heading as="h1" size="4xl">
          Hi, I'm Meher Surya 🚀
        </Heading>
      </MotionBox>

      <Text fontSize="2xl">Full Stack Developer | DevOps Engineer</Text>

      <HStack spacing={4}>
        <Link href="/projects" passHref>
          <Button colorScheme="blue" size="lg">View Projects</Button>
        </Link>
        <Link href="/resume" passHref>
          <Button colorScheme="green" size="lg">Download Resume</Button>
        </Link>
      </HStack>
    </VStack>
  );
}
