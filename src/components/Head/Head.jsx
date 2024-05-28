import React from 'react';
import { Box, HStack, Heading, Text, Image } from '@chakra-ui/react';
import logo from '../../assets/logo.png';

const navItems = ["Inicio", "¿Quienes somos?", "Prestamos", "Contacto"];

const Head = ({ isMobile, refs }) => {
    console.log(refs);
    const scrollToSection = (ref) => {
        window.scrollTo({
            top: ref.current.offsetTop,
            behavior: 'smooth'
        });
    };

    // Asumimos que refs es un objeto como { inicioRef, quienesSomosRef, prestamosRef, contactoRef }
    const refsArray = [ refs.homeRef, refs.aboutRef, refs.sliderRef, refs.cardsRef];

    return (
        <Box w={"100%"} h={"100%"}>
            <HStack p={5} bg={"white"} gap={isMobile ? 3 : 20} w={"100%"}>
                {!isMobile && (
                    <Box w={"25%"}>
                        <Image src={logo} w={20} h={20} />
                    </Box>
                )}
                {navItems.map((item, index) => (
                    <Box w={isMobile ? "25%" : "10%"} key={index} onClick={() => scrollToSection(refsArray[index])}>
                        <Box
                            color={"#005A5B"}
                            fontSize={15}
                            p={2}
                            border={"1px solid teal"}
                            borderRadius={10}
                            fontWeight={"bold"}
                            display={"flex"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            _hover={{
                                borderColor: "green",
                                transition: "0.5s",
                                cursor: "pointer",
                                color: "green",
                                transform: "scale(1.1)"
                            }}
                        >
                            <Text>{item}</Text>
                        </Box>
                        <Box mt={3} w={"100%"} h={1} bg={"yellow"} borderBottomRadius={20} />
                    </Box>
                ))}
            </HStack>
        </Box>
    );
}

export default Head;
