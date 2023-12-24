/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { Grid, Paper, Text, Button, Group, Drawer, Divider, Center } from "@mantine/core";
import { TiThMenu } from "react-icons/ti";

const links = [
    { link: "/", label: "Projects" },
    { link: "/About", label: "About" },
    { link: "/Contact", label: "Get in Touch" },
];

export default function Header() {
    const [hoveredButton, setHoveredButton] = useState(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isMobile, setIsMobile] = useState(false);
    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const [headerBackground, setHeaderBackground] = useState("transparent");
    const [textVisible, setTextVisible] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1240);
        };

        const handleScroll = () => {
            // Change the background color when scrolling down
            if (window.scrollY > 0) {
                setHeaderBackground("black");
            } else {
                setHeaderBackground("transparent");
            }
        };

        // Add event listeners
        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleScroll);

        // Initial check
        handleResize();

        // Clean up the event listeners when the component unmounts
        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        // Set text visibility after 100ms to allow for initial rendering
        const visibilityTimeout = setTimeout(() => {
            setTextVisible(true);
        }, 100);

        // Clear the timeout on component unmount
        return () => clearTimeout(visibilityTimeout);
    }, []);

    const items = links.map((link) => (
        <Button
            key={link.label}
            component="a"
            href={link.link}
            radius="sm"
            style={{
                textDecoration: "none",
                opacity: textVisible ? 1 : 0,
                transform: `translateY(${textVisible ? 0 : "20px"})`,
                transition: "opacity 0.8s ease-in-out, transform 0.8s ease-in-out",
                fontSize: "17px",
                fontWeight: 500,
                marginRight: "1rem",
                backgroundColor:
                    hoveredButton === link.label ? "#333232" : "transparent",
                color: hoveredButton === link.label ? "white" : "white",
            }}
            onMouseEnter={() => setHoveredButton(link.label)}
            onMouseLeave={() => setHoveredButton(null)}
        >
            {link.label}
        </Button>
    ));

    const headerStyle = {
        background: headerBackground,
        transition: "background-color 0.3s ease-in-out",
    };

    // Define your WhatsApp number
    const whatsappNumber = "+923164568147";

    // Function to open WhatsApp Web
    const openWhatsApp = () => {
        const url = `https://web.whatsapp.com/send?phone=${whatsappNumber}`;
        window.open(url, "_blank");
    };

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Media query style for small screens
    const smallScreenStyle = {
        fontSize: windowWidth <= 490 ? "26px" : "32px",
    };

    return (
        <>
            <Paper
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1000,
                    ...headerStyle,
                }}
            >
                <Grid p="md">
                    <Grid.Col span={8} style={{ display: "flex" }}>
                        <Text
                            mr="md"
                            style={{
                                fontWeight: "400",
                                opacity: textVisible ? 1 : 0,
                                transform: `translateY(${textVisible ? 0 : "20px"})`,
                                transition: "opacity 0.8s ease-in-out, transform 0.8s ease-in-out",
                                color: "white",
                                cursor: "pointer",
                                letterSpacing: "-0.1px",
                                ...smallScreenStyle,
                            }}
                            onClick={() => window.location.href = '/'}
                        >
                            ADAM MARSH
                        </Text>

                        {isMobile ? (
                            <Button

                                mt="4px"
                                onClick={() => setDrawerOpen(!isDrawerOpen)}
                                style={{
                                    backgroundColor: "transparent",
                                    color: "white",
                                    border: "none",
                                    cursor: "pointer",
                                }}
                            >
                                <TiThMenu size="26px" style={{ color: "white" }} />
                            </Button>
                        ) : (
                            <Group gap={1} visibleFrom="xs">
                                {items}
                            </Group>
                        )}

                    </Grid.Col>

                    <Grid.Col span={4} style={{ display: "flex", justifyContent: "right" }}>
                        <Button
                            mr="sm"
                            style={{
                                border: "1px solid white",
                                height: "50px",
                                backgroundColor: hoveredButton === links.label ? "#333232" : "transparent",
                                color: hoveredButton === links.label ? "white" : "white",
                                cursor: "pointer",
                                display: windowWidth <= 600 ? 'none' : 'flex',
                                alignItems: "center",
                                opacity: textVisible ? 1 : 0,
                                transform: `translateY(${textVisible ? 0 : "20px"})`,
                                transition: "opacity 0.8s ease-in-out, transform 0.8s ease-in-out",
                            }}
                            onMouseEnter={() => setHoveredButton(links.label)}
                            onMouseLeave={() => setHoveredButton(null)}
                            onClick={() => window.location.href = '/About'}
                        >
                            Ideas + Experiments
                        </Button>
                    </Grid.Col>
                </Grid>
            </Paper>

            {/* Render the Drawer only if isMobile is true */}
            {isMobile && (
                <Drawer
                    position="right"
                    opened={isDrawerOpen}
                    onClose={() => setDrawerOpen(false)}
                >
                    <Grid gutter="xs" mt="5rem">
                        {links.map((link, index) => (
                            <React.Fragment key={link.label}>
                                <Grid.Col span={12}>
                                    <Center>
                                        <Button
                                            m="lg"
                                            component="a"
                                            href={link.link}
                                            size="sm"
                                            radius="sm"
                                            style={{
                                                textDecoration: "none",
                                                fontSize: "18px",
                                                fontWeight: 500,
                                                backgroundColor: "transparent",
                                                color: "black",
                                            }}
                                        >
                                            {link.label}
                                        </Button>
                                    </Center>
                                </Grid.Col>
                                {index !== links.length - 1 && (
                                    <Grid.Col span={12}>
                                        <Divider />
                                    </Grid.Col>
                                )}
                            </React.Fragment>
                        ))}

                        <Grid.Col span={12}>
                            <Divider mb="xl" />
                            <Center>
                                <img
                                    onClick={openWhatsApp}
                                    src="/whatsapp.png"
                                    alt="WhatsApp Icon"
                                    style={{
                                        width: "35px",
                                        height: "35px",
                                    }}
                                />
                            </Center>
                        </Grid.Col>

                    </Grid>
                </Drawer>
            )}
        </>
    );
}
