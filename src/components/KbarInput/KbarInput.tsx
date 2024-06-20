import React from "react";
import { useKBar } from "kbar";
import { Button, Flex, Text, useColorModeValue } from "@chakra-ui/react";

export const KbarInput = () => {
    const { query } = useKBar();

    const onClick = () => {
        query.toggle();
    };

    return (
        <Button
            onClick={onClick}
            width={{ lg: "13rem", xl: "20rem" }}
            height="4rem"
            borderWidth="2px"
            borderColor={useColorModeValue("#F56565", "#38B4C1")}
            bg={useColorModeValue("tranparent", "gray.800")}
            // opacity="0.2"
            rounded="lg"
            fontWeight="medium"
            // color={{ base: "slate.500", hover: "slate.700", dark: "slate.300", darkHover: "slate.300" }}
            _hover={{
                color: useColorModeValue("white", "black"),
                bg: useColorModeValue("black", "white"),
                borderColor: useColorModeValue("black", "white")
            }}
        >
            <Flex
                alignItems="center"
                justifyContent="space-between"
                display={{ base: "none", lg: "flex" }}
                px="3"
            >
                <Text fontSize="1.8rem">Search...</Text>
                {/* <Text>⌘K</Text> */}
            </Flex>
        </Button>
    );
};
