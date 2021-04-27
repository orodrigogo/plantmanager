import React from 'react';
import { 
    StyleSheet, 
    Text    
} from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg';
import { SharedElement } from 'react-navigation-shared-element';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface PlantProps extends RectButtonProps {
    data: {
        id: string;
        name: string;
        photo: string;
    }
}

export const PlantCardPrimary = ({ data, ...rest} : PlantProps) => {
    return(
        <RectButton
            style={styles.container}
            {...rest}
        >
            <SharedElement id={`item.${data.id}.image`}>
                <SvgFromUri 
                    uri={data.photo} 
                    width={70} 
                    height={70} 
                />
            </SharedElement>
            
            <Text style={styles.text}>
                { data.name }
            </Text>            
        </RectButton>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxWidth: '45%',
        backgroundColor: colors.shape,
        borderRadius: 20,
        paddingVertical: 10,
        alignItems: 'center',
        margin: 10
    },
    text: {
        color: colors.green_dark,
        fontFamily: fonts.heading,
        marginVertical: 16
    }
})