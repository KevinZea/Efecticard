import React from 'react';
import { Box, Heading, Text, Image, Flex, Button } from '@chakra-ui/react';
import logo from '../../assets/icon.png';
import person from '../../assets/1.jpg';
import { IoLogoWhatsapp } from "react-icons/io";

const About = ({ isMobile }) => {

    const phoneNumber = '573150407608';
    const defaultMessage = encodeURIComponent('Hola, me gustaría saber más sobre tus servicios.'); // Codifica el mensaje para URL

    const handleClick = () => {
        // Construye la URL de WhatsApp
        const waUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;
        // Redirecciona al usuario a WhatsApp
        window.open(waUrl, '_blank');
    };

    return (
        <Box
            w={"100%"}
            h={"100%"}
        >
            <Flex w={"100%"} h={"100%"} justifyContent={"center"} mt={10} alignItems={"center"}>
                <Heading color={"#02A676"} size={isMobile ? "xl" : "4xl"}>Efecti</Heading>
                <Image src={logo} w={isMobile && "40%"}></Image>
                <Heading color={"#02A676"} size={isMobile ? "xl" : "4xl"}>Card</Heading>
            </Flex>
            <Flex w={"100%"} p={10} justify={"space-around"} alignItems={"center"} flexDir={isMobile && "column"}>
                <Box w={isMobile ? "100%" : "55%"}>
                    <Heading color={"#02A676"} mb={5}>¿Quienes Somos?</Heading>
                    <Text color={"teal"} fontSize={20} fontWeight={"semibold"}>
                        EfectiCard es tu socio confiable en soluciones financieras rápidas y seguras.
                        Nos especializamos en convertir cupos de tarjetas de crédito en efectivo de manera ágil y confidencial.
                        Nuestra misión es proporcionar a nuestros clientes una alternativa práctica para acceder a efectivo cuando más lo necesiten,
                        manteniendo altos estándares de seguridad y transparencia.
                        En EfectiCard, nos guiamos por valores de confianza, eficiencia y ética,
                        garantizando una experiencia positiva en cada transacción. Con nuestro servicio personalizado y rápido,
                        estamos comprometidos en ser tu opción preferida para tus necesidades de efectivo.
                        Confía en EfectiCard y experimenta la diferencia en soluciones financieras efectivas y seguras.
                    </Text>
                    <Button
                        variant={"outline"}
                        colorScheme={"teal"}
                        size={"lg"}
                        gap={3}
                        mt={3}
                        onClick={handleClick}
                    >
                        Contáctanos
                        <IoLogoWhatsapp />
                    </Button>
                </Box>
                {!isMobile && (
                    <Box w={"45%"} h={"100%"}>
                        <Image src={person} w={"100%"} h={"100%"} />
                    </Box>
                )}
            </Flex>
        </Box>
    );
}

export default About;