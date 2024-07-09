import { Box, Flex } from '@mantine/core';

import { Trans } from '../../components';

const Home = () => (
    <Box
        style={{
            height: '100vh',
            width: '100%',
        }}
    >
        <Flex
            align="center"
            direction="column"
            justify="center"
            style={{
                height: '100%',
            }}
        >
            <h1>
                <Trans
                    fallback="Starter Kit"
                    id="title.app"
                />
            </h1>
        </Flex>
    </Box>
);

export default Home;
