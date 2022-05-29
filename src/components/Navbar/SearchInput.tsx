import React, {FC} from 'react';
import {Flex, Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {PhoneIcon, SearchIcon} from "@chakra-ui/icons";
import {User} from "@firebase/auth";

type SearchInputProps = {
    user?: User | null
}

const SearchInput: FC<SearchInputProps> = ({user}) => {
    return (
        <Flex flexGrow={1} maxWidth={user ? 'auto' : '600px'} mr={2} align={'center'}>
            <InputGroup>
                {/* eslint-disable-next-line react/no-children-prop */}
                <InputLeftElement pointerEvents={'none'} children={<SearchIcon mb={1} color={'gray.300'}/>}/>
                <Input fontSize={'10pt'} _placeholder={{color: 'gray.400'}}
                       _hover={{
                           bg: 'white',
                           border: '1px solid',
                           borderColor: 'blue.500'
                        }}
                       _focus={{
                           outline: 'none',
                           border: '1px solid',
                           borderColor: 'blue.500'
                       }}
                       height={'34px'}
                       bg={'gray.50'}
                       placeholder={'Search Reddit'}/>
            </InputGroup>
        </Flex>
    );
};

export default SearchInput;