import React from 'react';
import { Box, Text, SimpleGrid, Badge, Icon, useColorModeValue } from '@chakra-ui/react';
import { FaCreditCard, FaGasPump, FaPercentage } from 'react-icons/fa';
import { MdOutlineAttachMoney } from 'react-icons/md';

const data = [
    {
        name: 'Tarjeta Exito',
        commission: '7% más de 1M, 8% menos de 1M',
        icon: FaCreditCard
    },
    {
        name: 'Falabella',
        commission: '7% más de 1M, 8% menos de 1M',
        icon: FaCreditCard
    },
    {
        name: 'Carulla',
        commission: '7% más de 1M, 8% menos de 1M',
        icon: FaCreditCard
    },
    {
        name: 'Olimpica',
        commission: '7% más de 1M, 8% menos de 1M',
        icon: FaCreditCard
    },
    {
        name: 'Condensa',
        commission: '7% más de 1M, 8% menos de 1M',
        icon: FaCreditCard
    },
    {
        name: 'Alkosto',
        commission: '7% más de 1M, 8% menos de 1M',
        icon: FaCreditCard
    },
    {
        name: 'Colsubsidio',
        commission: '7% más de 1M, 8% menos de 1M',
        icon: FaCreditCard
    },
    {
        name: 'Cupo Vanti Gas Natural',
        commission: '20% en todos los casos',
        icon: FaGasPump
    },
    {
        name: 'Sistecredito',
        commission: '20% más de 1M',
        icon: MdOutlineAttachMoney
    },
];

const NotesComponent = ({ isMobile }) => {
    const bgColor = useColorModeValue("green.100", "green.700");
    const fontSize = isMobile ? 'sm' : 'md';
    const paddingSize = isMobile ? 3 : 4;
    const iconSize = isMobile ? 5 : 6;

    // Use different column settings based on isMobile prop
    const columnsSetting = isMobile ? { base: 2 } : { sm: 1, md: 2, lg: 3 };

    return (
        <SimpleGrid columns={columnsSetting} spacing={5} p={5} backgroundColor="green.50" border="2px" borderColor="green.300" borderRadius="lg">
            {data.map((item, index) => (
                <Box key={index} p={paddingSize} shadow="lg" borderWidth="2px" borderColor="green.400" borderRadius="md" backgroundColor={bgColor}>
                    <Icon as={item.icon} w={iconSize} h={iconSize} color="green.600" />
                    <Text fontSize={fontSize} fontWeight="bold" ml={2} display="inline-block">{item.name}</Text>
                    <Text mt={2} fontSize={fontSize}>Comisión:
                        <br />
                        {/* <Badge colorScheme="green"> */}
                            <Icon as={FaPercentage} mr={1} />
                            {item.commission}
                        {/* </Badge> */}
                    </Text>
                </Box>
            ))}
        </SimpleGrid>
    );
};

export default NotesComponent;
