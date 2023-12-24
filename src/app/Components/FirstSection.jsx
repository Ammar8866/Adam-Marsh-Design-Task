/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Grid, Text, Button } from "@mantine/core";
import { animateScroll as scroll } from "react-scroll";

export default function FirstSection() {
    const [helloFontSize, setHelloFontSize] = useState("90px");
    const [otherTextFontSize, setOtherTextFontSize] = useState("25px");
    const [textVisible, setTextVisible] = useState(false); 

    useEffect(() => {
        const handleResize = () => {
            setHelloFontSize(window.innerWidth <= 510 ? "70px" : "90px");
            setOtherTextFontSize(window.innerWidth <= 510 ? "20px" : "25px");
        };

        // Add event listener for window resize
        window.addEventListener("resize", handleResize);

        // Initial font size adjustment
        handleResize();

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
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

    const scrollToNextSection = () => {
        const headerHeight = 80;
        scroll.scrollTo(window.innerHeight - headerHeight, {
            duration: 800,
        });
    };

    return (
        <>
            <Grid>
                <Grid.Col span={12} style={{ height: "100vh", position: "relative", overflow: "hidden", zIndex: 1 }}>
                    <video
                        autoPlay
                        loop
                        muted
                        style={{
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}
                    >
                        <source
                            src="https://video.wixstatic.com/video/07836f_1332e0643d4f4dacb08c1f127b34f0f1/1080p/mp4/file.mp4"
                            type="video/mp4"
                        />
                    </video>

                    <Grid.Col
                        p="xl"
                        span={{ base: 12, xs: 12, sm: 12, md: 12, lg: 6 }}
                        order={{ xs: 2, md: 1 }}
                        style={{ position: "absolute", top: "70%", transform: "translateY(-50%)" }}
                    >
                        <Text
                            style={{
                                fontWeight: "700",
                                fontSize: helloFontSize,
                                color: "white",
                                lineHeight: "82px",
                                letterSpacing: "-0.5 px",
                                opacity: textVisible ? 1 : 0,
                                transform: `translateY(${textVisible ? 0 : "20px"})`,
                                transition: "opacity 0.8s ease-in-out, transform 0.8s ease-in-out",
                            }}
                        >
                            Hello
                        </Text>
                        <Text
                            style={{
                                fontWeight: "400",
                                fontSize: otherTextFontSize,
                                color: "white",
                                opacity: textVisible ? 1 : 0,
                                transform: `translateY(${textVisible ? 0 : "20px"})`,
                                transition: "opacity 0.8s ease-in-out, transform 0.8s ease-in-out",
                            }}
                        >
                            I'm Adam, a creative leader, thinker, and
                        </Text>
                        <Text
                            style={{
                                fontWeight: "400",
                                fontSize: otherTextFontSize,
                                color: "white",
                                opacity: textVisible ? 1 : 0,
                                transform: `translateY(${textVisible ? 0 : "20px"})`,
                                transition: "opacity 0.8s ease-in-out, transform 0.8s ease-in-out",
                            }}
                        >
                            maker from London; helping the world's
                        </Text>
                        <Text
                            style={{
                                fontWeight: "400",
                                fontSize: otherTextFontSize,
                                color: "white",
                                opacity: textVisible ? 1 : 0,
                                transform: `translateY(${textVisible ? 0 : "20px"})`,
                                transition: "opacity 0.8s ease-in-out, transform 0.8s ease-in-out",
                            }}
                        >
                            best brands innovate - every day
                        </Text>

                        <Button
                            mt="md"
                            variant="transparent"
                            style={{
                                color: "white",
                                cursor: "pointer",
                                fontSize: "18px",
                                opacity: textVisible ? 1 : 0,
                                transform: `translateY(${textVisible ? 0 : "20px"})`,
                                transition: "opacity 0.8s ease-in-out, transform 0.8s ease-in-out",
                            }}
                            onClick={scrollToNextSection}
                        >
                            <span style={{ marginRight: "10px", fontWeight: "800", fontSize: "22px" }}>↓</span>
                            Explore Work
                        </Button>
                    </Grid.Col>
                </Grid.Col>
            </Grid>
        </>
    );
}
