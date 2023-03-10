import { View, Text, SafeAreaView, Image, TextInput } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { styled } from 'nativewind';
import { useNavigation } from '@react-navigation/native';
import { ChevronDownIcon, UserIcon, AdjustmentsVerticalIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';

// const StyledText = styled(Text, 'font-bold');

export default function HomeScreen() {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions(
            {
                headerShown: false
            }
        )
    }, []);
    return (
        <SafeAreaView className='bg-white'>
            <View className='flex-row pb-3 items-center mx-4 space-x-2'>
                <Image source={{
                    uri: 'https://links.papareact.com/wru'
                }}
                    className='h-7 w-7 bg-gray-300 p-4 rounded-full' />
                <View className='flex-1'>
                    <Text className='font-bold text-grey-400 text-xs'>Deliver Now!</Text>
                    <Text className='font-bold text-xl'>Current Location
                        <ChevronDownIcon size={20} color='#00CCBB' />
                    </Text>
                </View>
                <UserIcon size={35} color='#00CCBB' />
            </View>
            <View className='flex-row items-center pb-2 mx-4'>
                <View className='flex-row flex-1 bg-gray-200 p-2 space-x-2'>
                    <MagnifyingGlassIcon color='gray' />
                    <TextInput placeholder='Restaurants and cuisines' keyboardType='default' />
                </View>
                <AdjustmentsVerticalIcon color='#00CCBB' />
            </View>
        </SafeAreaView>
    )
}