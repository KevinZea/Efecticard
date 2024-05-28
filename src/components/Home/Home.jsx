import React from "react";
import { Box, HStack, Heading, Text, Image, Flex } from "@chakra-ui/react";
import { BsCreditCard2FrontFill } from "react-icons/bs";
import { FaMoneyBillWave } from "react-icons/fa6";

const Home = ({isMobile}) => {

    return (
        <Box
            w={"100%"}
            p={10}
            pt={0}
        >
            <Flex gap={isMobile ? 1 : 10} w={isMobile && "100%"}>
                <Box w={isMobile ? "50%" : "35%"}>
                    <Heading fontSize={isMobile ? 20 : 100} color={"#02A676"}>
                        Efecticard
                    </Heading>
                    <Box w={isMobile ? "50%" : "100%"} h={3} bg={"yellow"} borderBottomRadius={"full"}></Box>
                </Box>
                <Flex alignItems={"center"} w={isMobile && "20%"}>
                    <Heading fontSize={isMobile ? 30 : 70} color={"#003820"}>
                        CAMBIA
                    </Heading>
                </Flex>
            </Flex>

            <Flex gap={isMobile ? 3 : 10} w={"100%"}>
                <BsCreditCard2FrontFill color="#02A676" size={isMobile ? 50 : 220}/>
                <Box w={isMobile ? "60%" : "100%"}>
                    <Text color={"#003820"} fontSize={isMobile ? 30 : 70} fontWeight={"bold"}>EL CUPO DE</Text>
                    <Text display={"flex"} fontSize={isMobile ? 30 : 70} fontWeight={"bold"} color={"#003820"} gap={5}
                    >TUS 
                    <Heading fontSize={isMobile ? 20 : 100} color={"#02A676"}>TARJETAS</Heading> POR</Text>
                </Box>
            </Flex>
            <Flex gap={5} alignItems={isMobile ? "start" : "end"}>
                <Heading color={"#02A676"} fontSize={isMobile ? 20 : 100}>DINERO</Heading>
                <Text fontSize={isMobile ? 20 : 70} color={"#003820"} fontWeight={"bold"}>EN EFECTIVO</Text>
                <FaMoneyBillWave fontSize={isMobile ? 50 : 100} color="#02A676"/>
            </Flex>

        </Box>
    );
}

export default Home;