import React, {FC, useState} from 'react';
import {Alert, AlertIcon, AlertTitle, Flex, Text} from "@chakra-ui/react";
import {IoDocumentText, IoImageOutline} from "react-icons/io5";
import {BsLink45Deg, BsMic} from "react-icons/bs";
import {BiPoll} from "react-icons/bi";
import {Icon} from "@chakra-ui/icons";
import TabItem from '../../components/Posts/TabItem'
import TextInputs from "./PostForm/TextInputs";
import ImageUpload from "./PostForm/ImageUpload";
import {Post} from "../../atoms/postsAtom";
import {User} from "@firebase/auth";
import {useRouter} from "next/router";
import {addDoc, collection, serverTimestamp, Timestamp, updateDoc} from "@firebase/firestore";
import {firestore, storage} from "../../firebase/clientApp";
import {getDownloadURL, ref, uploadString} from "@firebase/storage";
import useSelectFile from "../../hooks/useSelectFile";

type NewPostFormProps = {
    user: User,
    communityImageURL?: string;
}

const formTabs: TabItem[] = [
    {
        title: 'Post',
        icon: IoDocumentText
    },
    {
        title: 'Images & Video',
        icon: IoImageOutline
    },{
        title: 'Link',
        icon: BsLink45Deg
    },{
        title: 'Poll',
        icon: BiPoll
    },{
        title: 'Talk',
        icon: BsMic
    },
]

export type TabItem = {
    title: string;
    icon: typeof Icon.arguments;
}

const NewPostForm: FC<NewPostFormProps> = ({user, communityImageURL}) => {
    const router = useRouter()
    const [selectedTab, setSelectedTab] = useState(formTabs[0].title)
    const [textInputs, setTextInputs] = useState({
        title: '',
        body: ''
    })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const {setSelectedFile, selectedFile, onSelectFile} = useSelectFile()

    const handleCreatePost = async () => {
        const {communityId} = router.query

        const newPost: Post = {
            communityId: communityId as string,
            communityImageURL: communityImageURL || '',
            creatorId: user?.uid,
            creatorDisplayName: user.email!.split('@')[0],
            title: textInputs.title,
            body: textInputs.body,
            numberOfComments: 0,
            voteStatus: 0,
            createdAt: serverTimestamp() as Timestamp
        };

        setLoading(true)
        try{
            const postDocRef = await addDoc(collection(firestore, 'posts'), newPost)
            if(selectedFile){
                const imageRef = ref(storage, `posts/${postDocRef.id}/image`)
                await uploadString(imageRef, selectedFile, 'data_url')
                const downloadURL = await getDownloadURL(imageRef)

                await updateDoc(postDocRef, {
                    imageURL: downloadURL
                })

            }
            router.back()
        }catch(e: any){
            setError(true)
            console.log('handleCreatePost error', e)
        }
        setLoading(false)
    }

    const onTextChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {target: {name, value}} = event;
        setTextInputs(prev => ({
            ...prev,
            [name]: value
        }))
    }
    return (
        <Flex
            direction={'column'}
            bg={'white'}
            borderRadius={4}
            mt={2}
        >
            <Flex width={'100%'}>
                {formTabs.map(item => (
                    <TabItem setSelected={setSelectedTab} item={item} key={item.title} selected={item.title === selectedTab}/>
                ))}
            </Flex>
            <Flex p={4}>
                {selectedTab === 'Post' && <TextInputs
                    textInputs={textInputs}
                    handleCreate={handleCreatePost}
                    onChange={onTextChange}
                    loading={loading}
                />}
                {selectedTab === 'Images & Video' &&
                    <ImageUpload
                        selectedFile={selectedFile}
                        onSelectImage={onSelectFile}
                        setSelectedTab={setSelectedTab}
                        setSelectedFile={setSelectedFile}
                />}
            </Flex>
            {error && (
                <Alert status='error'>
                    <AlertIcon />
                    <Text>Error creating post</Text>
                </Alert>
            )}
        </Flex>
    )
};

export default NewPostForm;