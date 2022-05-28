import React from 'react';
import {Flex, Image} from "@chakra-ui/react";

const Navbar = () => {
    return (
        <Flex bg={'white'} height={'44px'} padding={'16px 12px'}>
            <Flex align={'center'}>
                <Image src={'/images/redditFace.svg'} height={'30px'}/>
                <Image src={'/images/redditText.svg'} height={'46px'} display={{base: 'none', md: 'unset'}}/>
            </Flex>
            Navbar
        </Flex>
    );
};

export default Navbar;