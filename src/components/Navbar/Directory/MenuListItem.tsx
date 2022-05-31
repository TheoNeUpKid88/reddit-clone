import React, {FC} from 'react';
import {IconType} from "react-icons";
import {MenuItem} from "@chakra-ui/menu";
import {Flex, Icon, Image} from "@chakra-ui/react";
import useDirectory from "../../../hooks/useDirectory";

type MenuListItem = {
    displayText: string;
    link: string;
    icon: IconType;
    iconColor: string;
    imageURL?: string;
}

const MenuListItem: FC<MenuListItem> = ({link, icon, iconColor, displayText, imageURL}) => {
    const {onSelectMenuItem} = useDirectory()
    return (
        <MenuItem
            width={'100%'}
            fontSize={'10pt'}
            _hover={{bg: 'gray.100'}}
            onClick={() => onSelectMenuItem({displayText, link, icon, iconColor, imageURL})}
        >
            <Flex align={'center'}>
                {imageURL ? (
                    <Image src={imageURL} borderRadius={'full'} boxSize={'18px'} mr={2}/>
                ) : (
                    <Icon as={icon} fontSize={20} mr={2} color={iconColor}/>
                )}
                {displayText}
            </Flex>
        </MenuItem>
    )
};

export default MenuListItem;