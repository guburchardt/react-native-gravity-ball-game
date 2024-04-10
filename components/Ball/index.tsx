import {View, Text} from 'react-native';
import { styles } from './styles';
import React from 'react';

type Props = {
    posY: number;
}


export const Ball = ({posY}: Props) => {
    return (
        <View style={[styles.container, {bottom: posY}]}>
            
        </View>
    );
}