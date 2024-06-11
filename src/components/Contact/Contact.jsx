import React from 'react';
import { Box, Text, Link, Image, Stack, Icon, useColorModeValue, VStack, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';
import contact from "../../assets/contact.jpg";

const phoneNumber = '573150407608';
const phoneNumberTwo = '3150407608';
const defaultMessage = encodeURIComponent('Hola, me gustaría saber más sobre tus servicios.');
const waUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

const ContactSection = () => {
    const bg = useColorModeValue('green.200', 'green.700');
    const hoverBg = useColorModeValue('green.300', 'green.800');

    return (
        <Box bgGradient="linear(to-r, green.200, green.300)" p={6} rounded="lg" shadow="2xl">
            <VStack spacing={5} align="center" textAlign="center">
                <Image
                    borderRadius="full"
                    boxSize="120px"
                    src={contact}
                    alt="Contact Image"
                />
                <Text fontSize="2xl" fontWeight="bold">¡Estamos aquí para ayudarte!</Text>
                <Text fontSize="md">Puedes contactarnos directamente o enviarnos un mensaje vía WhatsApp.</Text>
                <Stack direction={['column', 'row']} spacing={4}>
                    <Link href={`tel:${phoneNumberTwo}`} isExternal display="flex" alignItems="center" p={3} bg={bg} rounded="md" _hover={{ bg: hoverBg }}>
                        <Icon as={FaPhone} mr={2} w={6} h={6} />
                        +57 315 040 76 08
                    </Link>
                    <Link href={waUrl} isExternal display="flex" alignItems="center" p={3} bg={bg} rounded="md" _hover={{ bg: hoverBg }}>
                        <Icon as={FaWhatsapp} mr={2} w={6} h={6} />
                        Envíanos un mensaje
                    </Link>
                </Stack>
                {/* <FormControl>
                    <FormLabel>Envía un mensaje rápido</FormLabel>
                    <Input placeholder="Tu email" />
                    <Input placeholder="Tu mensaje" my={2} />
                    <Button colorScheme="green" variant="solid">Enviar</Button>
                </FormControl> */}
            </VStack>
        </Box>
    );
};

export default ContactSection;
