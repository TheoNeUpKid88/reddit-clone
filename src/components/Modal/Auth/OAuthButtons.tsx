import React, {FC} from 'react';
import {Button, Flex, Image, Text} from "@chakra-ui/react";
import {useSignInWithGoogle} from "react-firebase-hooks/auth";
import {auth} from "../../../firebase/clientApp";

const OAuthButtons: FC = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)
    return (
        <Flex
            direction={'column'}
            width={'100%'}
            mb={4}
        >
            <Button isLoading={loading} onClick={() => signInWithGoogle()} variant={'oauth'} mb={2}>
                <Image
                    src={'/images/googlelogo.png'}
                    height={'20px'}
                    mr={4}
                />
                Continue with Google
            </Button>
            <Button variant={'oauth'}>Some Other Provider</Button>
            {error && <Text>{error.message}</Text>}
        </Flex>
    );
};

export default OAuthButtons;