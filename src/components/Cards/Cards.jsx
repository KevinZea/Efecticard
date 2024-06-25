import React, { useState } from 'react';
import { Box, Image, Text, VStack, Button, Heading } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { IoLogoWhatsapp } from "react-icons/io";


import codensa from '../../assets/codensa.jpg';
import vanti from '../../assets/vanti.jpg';
import exito from '../../assets/exito.jpg';
import sistecredito from '../../assets/sistecredito.png';
import alkosto from '../../assets/alkosto.png';
import colsubsidio from '../../assets/colsubsidio.jpg';
import jumbo from '../../assets/jumbo.png';
import falabella from '../../assets/falabella.png';
import olimpica from '../../assets/olimpica.png';
import carulla from '../../assets/carulla.jpg';
import sodexo from '../../assets/sodexo.png';
import bigpass from '../../assets/bigpass.png';

import { IoStar } from "react-icons/io5";

const cards = [
    {
        image: codensa,
        title: 'Codensa',
        description: 'Con tu tarjeta Codensa puedes asegurar tu dinero 100% en efectivo.'
    },
    {
        image: vanti,
        title: 'Vanti',
        description: 'Con tu tarjeta Vanti puedes asegurar tu dinero 100% en efectivo.'
    },
    {
        image: exito,
        title: 'Exito',
        description: 'Con tu tarjeta Exito puedes asegurar tu dinero 100% en efectivo.'
    },
    {
        image: sistecredito,
        title: 'Sistecredito',
        description: 'Con tu Sitecredito puedes asegurar tu dinero 100% en efectivo.'
    },
    {
        image: alkosto,
        title: 'Alkosto',
        description: 'Con tu tarjeta Alkosto puedes asegurar tu dinero 100% en efectivo.'
    },
    {
        image: colsubsidio,
        title: 'Colsubsidio',
        description: 'Con tu tarjeta Colsubsidio puedes asegurar tu dinero 100% en efectivo.'
    },
    {
        image: jumbo,
        title: 'Jumbo',
        description: 'Con tu tarjeta Jumbo puedes asegurar tu dinero 100% en efectivo.'
    },
    {
        image: falabella,
        title: 'Falabella',
        description: 'Con tu tarjeta Falabella puedes asegurar tu dinero 100% en efectivo.'
    },
    {
        image: olimpica,
        title: 'Olimpica',
        description: 'Con tu tarjeta Olimpica puedes asegurar tu dinero 100% en efectivo.'
    },
    {
        image: carulla,
        title: 'Carulla',
        description: 'Con tu tarjeta Carulla puedes asegurar tu dinero 100% en efectivo.'
    },
    {
        image: sodexo,
        title: 'Sodexo',
        description: 'Con tus Bonos Sodexo puedes asegurar tu dinero 100% en efectivo.'
    },
    {
        image: bigpass,
        title: 'Bigpass',
        description: 'Con tus Bonos Bigpass puedes asegurar tu dinero 100% en efectivo.'
    }
];

const CardSlider = ({ isMobile }) => {
    const [swiperRef, setSwiperRef] = useState(null);

    let appendNumber = cards.length;
    let prependNumber = 1;

    const prepend2 = () => {
        swiperRef.prependSlide([
            `<div class="swiper-slide">Slide ${--prependNumber}</div>`,
            `<div class="swiper-slide">Slide ${--prependNumber}</div>`,
        ]);
    };

    const prepend = () => {
        swiperRef.prependSlide(`<div class="swiper-slide">Slide ${--prependNumber}</div>`);
    };

    const append = () => {
        swiperRef.appendSlide(`<div class="swiper-slide">Slide ${++appendNumber}</div>`);
    };

    const append2 = () => {
        swiperRef.appendSlide([
            `<div class="swiper-slide">Slide ${++appendNumber}</div>`,
            `<div class="swiper-slide">Slide ${++appendNumber}</div>`,
        ]);
    };

    const phoneNumber = '573150407608';
    const defaultMessage = encodeURIComponent('Hola, me gustaría saber más sobre tus servicios.'); // Codifica el mensaje para URL

    const handleClick = () => {
        // Construye la URL de WhatsApp
        const waUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;
        // Redirecciona al usuario a WhatsApp
        window.open(waUrl, '_blank');
    };

    return (
        <Box w={"100%"} display={"flex"} justifyContent={"center"} flexDirection={"column"} alignItems={"center"}>
            <Heading color={"#02A676"} size={"4xl"}>Recibimos</Heading>
            <Swiper
                onSwiper={setSwiperRef}
                slidesPerView={3}
                centeredSlides={true}
                spaceBetween={30}
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                style={{ width: isMobile ? "100%" : '70%', height: '100%' }}
            >
                {cards.map((card, index) => (
                    <SwiperSlide key={index}>
                        <VStack p="4" bg="white" boxShadow="md" borderRadius="lg" m={10} w={isMobile && 150} >
                            <Image src={card.image} borderRadius="lg" />
                            <Text fontSize="xl" fontWeight="bold">{card.title}</Text>
                            <Text display={"flex"} gap={2}>
                                <IoStar color='orange' fontSize={35} />
                                {card.description}
                            </Text>
                            <Button
                                variant={"outline"}
                                colorScheme={"teal"}
                                size={isMobile ? "xs" : "lg"}
                                gap={3}
                                mt={3}
                                onClick={handleClick}
                            >
                                Contáctanos
                                <IoLogoWhatsapp />
                            </Button>
                        </VStack>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
};

export default CardSlider;
