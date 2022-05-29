import React from 'react';
import {BsArrowUpRightCircle, BsChatDots} from 'react-icons/bs'
import {GrAdd} from 'react-icons/gr'
import {
    IoFilterCircleOutline,
    IoNotificationsOutline,
    IoVideocamOutline
} from 'react-icons/io5'
import {Flex} from "@chakra-ui/react";
import {Icon} from "@chakra-ui/icons";

const Icons = () => {
    return (
       <Flex>
           <Flex
               display={{base: 'none', md: 'flex'}}
               align={'center'}
               borderRight={'1px solid'}
               borderColor={'gray.200'}
           >
               <Flex
                   mr={1.5}
                   ml={1.5}
                   padding={1}
                   cursor={'pointer'}
                   borderRadius={4}
                   _hover={{bg: 'gray.200'}}
               >
                   <Icon fontSize={20} as={BsArrowUpRightCircle}/>
               </Flex>
               <Flex
                   mr={1.5}
                   ml={1.5}
                   padding={1}
                   cursor={'pointer'}
                   borderRadius={4}
                   _hover={{bg: 'gray.200'}}
               >
                   <Icon fontSize={22} as={IoFilterCircleOutline}/>
               </Flex>
               <Flex
                   mr={1.5}
                   ml={1.5}
                   padding={1}
                   cursor={'pointer'}
                   borderRadius={4}
                   _hover={{bg: 'gray.200'}}
               >
                   <Icon fontSize={22} as={IoVideocamOutline}/>
               </Flex>
           </Flex>
           <>
               <Flex
                   mr={1.5}
                   ml={1.5}
                   padding={1}
                   cursor={'pointer'}
                   borderRadius={4}
                   _hover={{bg: 'gray.200'}}
               >
                   <Icon fontSize={20} as={BsChatDots}/>
               </Flex>
               <Flex
                   mr={1.5}
                   ml={1.5}
                   padding={1}
                   cursor={'pointer'}
                   borderRadius={4}
                   _hover={{bg: 'gray.200'}}
               >
                   <Icon fontSize={20} as={IoNotificationsOutline}/>
               </Flex>
               <Flex
                   display={{base: 'none', md: 'flex'}}
                   mr={1.5}
                   ml={1.5}
                   padding={1}
                   cursor={'pointer'}
                   borderRadius={4}
                   _hover={{bg: 'gray.200'}}
               >
                   <Icon fontSize={20} as={GrAdd}/>
               </Flex>
           </>
       </Flex>
    );
};

export default Icons;