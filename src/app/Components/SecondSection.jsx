import React from 'react';
import { Grid, Text, Image, MantineProvider } from '@mantine/core';

export default function SecondSection() {
    return (
        <MantineProvider>
            <Grid>
                <Grid.Col span={12}>
                    <div
                        style={{
                            position: 'relative',
                            width: '100%',
                            height: '100vh',
                            overflow: 'hidden',
                        }}
                    >
                        <Image
                            src="backimage.png"
                            alt="Main Image"
                            style={{
                                width: '100%',
                                height: '100vh',
                                objectFit: 'cover',

                            }}
                        />

                       
                        <Grid.Col span={{ base: 12, xs: 12, sm: 12, md: 6, lg: 4 }}>
                            <Text
                                ta="center"
                                style={{
                                    position: 'absolute',
                                    top: '70px',
                                    left: '30px',
                                    color: 'white',
                                    fontSize: '22px',

                                }}
                            >
                                Leading visual experience design
                            </Text>
                            <Text
                                ta="center"
                                style={{
                                    position: 'absolute',
                                    top: '110px',
                                    left: '30px',
                                    color: 'white',
                                    fontSize: '22px',

                                }}
                            >
                                for the Natwest Group apps, used
                            </Text>
                            <Text
                                ta="center"
                                style={{
                                    position: 'absolute',
                                    top: '150px',
                                    left: '30px',
                                    color: 'white',
                                    fontSize: '22px',

                                }}
                            >
                                4.2 billion times annually.
                            </Text>
                        </Grid.Col>

                        <Grid.Col span={{ base: 12, xs: 12, sm: 12, md: 6, lg: 4 }}>
                            <Image
                                src="arrow.png"
                                alt="Overlay Image"
                                style={{
                                    position: 'absolute',
                                    top: '510px',
                                    left: '30px',
                                    width: '3%',
                                    height: 'auto',
                                    borderRadius: '8px',
                                    opacity: 0.99,
                                    cursor: 'pointer',
                                }}
                                onClick={() => window.location.href = '/Contact'}
                            />
                        </Grid.Col>

                       
                        <Grid.Col span={{ base: 12, xs: 12, sm: 12, md: 12, lg: 4 }}>
                            <Image
                                src="childimage.png"
                                alt="Overlay Image"
                                style={{
                                    position: 'absolute',
                                    top: '250px',
                                    right: '70px',
                                    width: '65%',
                                    height: 'auto',
                                    borderRadius: '8px',
                                    opacity: 0.99,
                                    cursor: 'pointer',
                                }}
                                onClick={() => window.location.href = '/Contact'}
                            />
                        </Grid.Col>

                    </div>
                </Grid.Col>
            </Grid>
        </MantineProvider>
    );
}
