import React from 'react';
import {
    Box, Heading, Text, Flex,
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
} from '@chakra-ui/react';
import { FaFacebook } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = ({isMobile}) => {

    return (
        <Box
            w={"100%"}
            h={"100%"}
            bg={"#02A676"}
            color={"white"}
            p={isMobile ? 5 : 20}
            display={"flex"}
            justifyContent={"space-around"}
            gap={isMobile && 5}
        >
            <Box w={isMobile ? "50%" : "30%"}>
                <Heading>EfectiCard</Heading>
                <Text mt={3}>
                    En EfectiCard,
                    estamos comprometidos en brindar soluciones financieras efectivas y seguras.
                    ¡Confía en nosotros para tus necesidades de efectivo y experimenta la diferencia!
                </Text>
                <Flex gap={5} mt={3} fontSize={20}>
                    <FaFacebook />
                    <FaWhatsapp />
                    <FaInstagram />
                </Flex>
            </Box>

            <Box w={isMobile ? "50%" : "30%"}>
                <Heading>Menu</Heading>
                <UnorderedList mt={3}>
                    <ListItem>Inicio</ListItem>
                    <ListItem>¿Quienes somos?</ListItem>
                    <ListItem>Prestamos</ListItem>
                    <ListItem>Contacto</ListItem>
                </UnorderedList>
            </Box>

        </Box>
    );
}

export default Footer;