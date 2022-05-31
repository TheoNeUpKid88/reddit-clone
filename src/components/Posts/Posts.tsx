import React, {FC, useEffect, useState} from 'react';
import {Community} from "../../atoms/communitiesAtom";
import {collection, getDocs, orderBy, query, where} from "@firebase/firestore";
import {auth, firestore} from "../../firebase/clientApp";
import usePosts from "../../hooks/usePosts";
import {Post} from "../../atoms/postsAtom";
import PostItem from "./PostItem";
import {useAuthState} from "react-firebase-hooks/auth";
import {Stack} from "@chakra-ui/react";
import PostLoader from "./PostLoader";

type PostsProps = {
    communityData: Community;
}

const Posts: FC<PostsProps> = ({communityData}) => {
    const [user] = useAuthState(auth)
    const [loading, setLoading] = useState(false)
    const {postStateValue, setPostStateValue, onDeletePost, onSelectPost, onVote} = usePosts()
    const getPosts = async () => {
        try{
            setLoading(true)
            const postsQuery = query(collection(firestore, 'posts'),
                where('communityId', '==', communityData.id),
                orderBy('createdAt', 'desc')
            )
            const postDocs = await getDocs(postsQuery)
            const posts = postDocs.docs.map(doc => ({id: doc.id, ...doc.data()}))
            setPostStateValue(prev => ({
                ...prev,
                posts: posts as Post[]
            }))
        }catch(e: any){
            console.log('getPosts error', e.message)
        }
        setLoading(false)
    }

    useEffect(() => {
        getPosts()
    }, [communityData])
    return (
        <>
            {loading ? (<PostLoader/>) : (<Stack>
                {postStateValue.posts.map(item =>
                    <PostItem
                        key={item.id}
                        userVoteValue={postStateValue.postVotes.find(vote => vote.postId === item.id)?.voteValue}
                        post={item}
                        userIsCreator={user?.uid === item.creatorId}
                        onVote={onVote}
                        onDeletePost={onDeletePost}
                        onSelectPost={onSelectPost}
                    />)}
            </Stack>)}
        </>

    )
};

export default Posts;