import React from 'react';
import { Button, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { DASHBOARD } from "../../lib/routers";
import { useLogout } from '../../hooks/auth';

export default function Navbar() {
  const {logout, isLoading} = useLogout();
  return (
    <Flex
      shadow="sm"
      pos="fixed"
      width="full"
      borderTop="6px solid"
      borderTopColor="teal.400"
      height="16"
      zIndex="3"
      justify="space-between"
      bg="white"
    >
      <Flex px="4" w="full" align="center" maxW="1200px">
        <Link color="teal" as={RouterLink} to={DASHBOARD} fontWeight="bold">
          Home
        </Link>
      </Flex>

      <Flex align="center" pr="4"> {/* Added a new Flex container */}
        <Button
          colorScheme="teal"
          size="sm"
          onClick={logout}
          isLoading={isLoading}
        >
          Logout
        </Button>
      </Flex>
    </Flex>
  );
}




