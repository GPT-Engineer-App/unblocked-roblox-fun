import { Container, Text, VStack, Button, IconButton, useToast } from "@chakra-ui/react";
import { FaUnlock } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleUnlockClick = () => {
    toast({
      title: "Roblox Unblocked!",
      description: "You have successfully unblocked Roblox.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Unblock Roblox</Text>
        <Text>Click the button below to unblock Roblox.</Text>
        <IconButton aria-label="Unblock Roblox" icon={<FaUnlock />} size="lg" onClick={handleUnlockClick} />
      </VStack>
    </Container>
  );
};

export default Index;
