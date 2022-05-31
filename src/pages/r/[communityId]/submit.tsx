import React from 'react';
import PageContent from "../../../components/Layout/PageContent";
import {Box, Text} from "@chakra-ui/react";
import NewPostForm from "../../../components/Posts/NewPostForm";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../../../firebase/clientApp";
import {useRecoilState, useRecoilValue} from "recoil";
import {communityState} from "../../../atoms/communitiesAtom";
import useCommunityData from "../../../hooks/useCommunityData";
import About from "../../../components/Community/About";

const SubmitPostPage = () => {
    const [user] = useAuthState(auth)
    const {communityStateValue} = useCommunityData()
    console.log('comm: ', communityStateValue)
    return (
        <PageContent>
            <>
                <Box p={'14px 0px'} borderBottom={'1px solid'} borderColor={'white'}>
                    <Text>Create a post</Text>
                </Box>
                {user && <NewPostForm user={user} communityImageURL={communityStateValue.currentCommunity?.imageURL}/>}
            </>
            <>
                {communityStateValue.currentCommunity && <About communityData={communityStateValue.currentCommunity}/>}
            </>
        </PageContent>
    )
};

export default SubmitPostPage;