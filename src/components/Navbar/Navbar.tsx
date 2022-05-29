import React from 'react';
import {Flex, Image} from "@chakra-ui/react";
import SearchInput from "./SearchInput";
import RightContent from "./RightContent/RightContent";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../../firebase/clientApp";
import Directory from "./Directory/Directory";

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth)
    return (
        <Flex bg={'white'} height={'44px'} padding={'6px 12px'} justify={{md: 'space-between'}}>
            <Flex mr={{base: 0, md: 2}} width={{base: '40px', md: 'auto'}} align={'center'}>
                <Image src={'/images/redditFace.svg'} height={'30px'}/>
                <Image src={'/images/redditText.svg'} height={'46px'} display={{base: 'none', md: 'unset'}}/>
            </Flex>
            {user && <Directory/>}
            <SearchInput user={user}/>
            <RightContent user={user}/>
        </Flex>
    );
};

export default Navbar;