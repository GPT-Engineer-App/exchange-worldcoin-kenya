import React from "react";
import { Box, Button, Container, Flex, Heading, Image, Stack, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import { FaBitcoin, FaEthereum, FaExchangeAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex direction={{ base: "column", md: "row" }} justify="space-between" align="center" my={8}>
        <VStack align="start" spacing={6}>
          <Heading as="h1" size="2xl" fontWeight="bold">
            Worldcoin Exchange Kenya
          </Heading>
          <Text fontSize="xl" color={useColorModeValue("gray.600", "gray.200")}>
            The premier peer-to-peer service for converting cryptocurrencies to Kenyan Shillings (KES) and vice versa.
          </Text>
          <Stack direction={{ base: "column", sm: "row" }} spacing={4}>
            <Button leftIcon={<FaExchangeAlt />} colorScheme="teal" size="lg">
              Get Started
            </Button>
            <Button leftIcon={<FaBitcoin />} variant="outline" colorScheme="orange" size="lg">
              Buy Bitcoin
            </Button>
            <Button leftIcon={<FaEthereum />} variant="outline" colorScheme="purple" size="lg">
              Buy Ethereum
            </Button>
          </Stack>
        </VStack>
        <Box w={{ base: "80%", md: "50%" }} mt={{ base: 12, md: 0 }}>
          <Image src="https://images.unsplash.com/photo-1707075891514-9d271023f384?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjcnlwdG9jdXJyZW5jeSUyMGV4Y2hhbmdlfGVufDB8fHx8MTcwODg3OTg0N3ww&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />
        </Box>
      </Flex>

      <Box py={12} bg={useColorModeValue("gray.50", "gray.800")} borderRadius="lg" mt={12}>
        <VStack spacing={4} textAlign="center">
          <Heading as="h2" size="lg">
            Why Choose Worldcoin Exchange Kenya?
          </Heading>
          <Text color={useColorModeValue("gray.600", "gray.200")}>We provide a secure, fast, and easy-to-use platform for all your cryptocurrency transactions.</Text>
        </VStack>
      </Box>

      <Flex direction={{ base: "column", md: "row" }} justify="center" align="center" my={8}>
        <VStack align="start" spacing={6}>
          <Heading as="h3" size="md">
            Secure Transactions
          </Heading>
          <Text fontSize="md" color={useColorModeValue("gray.600", "gray.200")}>
            We prioritize the security of your funds with state-of-the-art encryption and security protocols.
          </Text>
        </VStack>
        <VStack align="start" spacing={6} ml={{ md: 12 }}>
          <Heading as="h3" size="md">
            Competitive Rates
          </Heading>
          <Text fontSize="md" color={useColorModeValue("gray.600", "gray.200")}>
            Get the best rates in the market with our low transaction fees and zero hidden costs.
          </Text>
        </VStack>
      </Flex>

      <Flex justify="center" mt={12}>
        <Button rightIcon={<FaExchangeAlt />} colorScheme="blue" size="lg">
          Start Trading
        </Button>
      </Flex>
    </Container>
  );
};

export default Index;
