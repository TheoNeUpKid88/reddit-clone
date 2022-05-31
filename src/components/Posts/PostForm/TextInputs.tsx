import React, {FC} from 'react';
import {Button, Flex, Input, Stack, Textarea} from "@chakra-ui/react";

type TextInputsProps = {
    textInputs: {
        title: string;
        body: string;
    };
    onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    handleCreate: () => void;
    loading: boolean;
}

const TextInputs: FC<TextInputsProps> = ({textInputs, handleCreate, onChange, loading}) => {
    return (
        <Stack spacing={3} width={'100%'}>
            <Input
                name={'title'}
                value={textInputs.title}
                onChange={onChange}
                fontSize={'10pt'}
                borderRadius={4}
                placeholder={'Title'}
                _placeholder={{color: 'gray.500'}}
                _focus={{outline: 'none', bg: 'white', border: '1px solid', borderColor: 'black'}}
            />
            <Textarea
                value={textInputs.body}
                onChange={onChange}
                name={'body'}
                fontSize={'10pt'}
                height={'100px'}
                borderRadius={4}
                placeholder={'Text (optional)'}
                _placeholder={{color: 'gray.500'}}
                _focus={{outline: 'none', bg: 'white', border: '1px solid', borderColor: 'black'}}
            />
            <Flex justify={'flex-end'}>
                <Button
                    isLoading={loading}
                    disabled={!textInputs.title}
                    height={'34px'}
                    padding={'0px 30px'}
                    onClick={handleCreate}
                >Post</Button>
            </Flex>
        </Stack>
    )
};

export default TextInputs;