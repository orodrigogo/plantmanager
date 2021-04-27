import React from 'react';
import  { createStackNavigator } from '@react-navigation/stack';

import { enableScreens } from 'react-native-screens';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

import { Welcome } from '../pages/Welcome';
import { UserIdentification } from '../pages/UserIdentification';
import { Confirmation } from '../pages/Confirmation';
import { PlantSave } from '../pages/PlantSave';
import { MyPlants } from '../pages/MyPlants';

import colors from '../styles/colors';
import AuthRoutes from './tab.routes';

enableScreens();

const stackRoutes = createSharedElementStackNavigator();
// const stackRoutes = createStackNavigator();


const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator
        headerMode="none"
        screenOptions={{
            cardStyle: {
                backgroundColor: colors.white
            },
        }}
    >
        <stackRoutes.Screen 
            name="Welcome"
            component={Welcome}
        />

        <stackRoutes.Screen 
            name="UserIdentification"
            component={UserIdentification}
        />

        <stackRoutes.Screen 
            name="Confirmation"
            component={Confirmation}
        />

        <stackRoutes.Screen 
            name="PlantSelect"
            component={AuthRoutes}
        />

        <stackRoutes.Screen 
            name="PlantSave"
            component={PlantSave}
            sharedElementsConfig = {(route) => {
                const { plant } = route.params
                return [
                    {
                        id: `item.${plant.id}.image`,
                        animation: 'move',
                        resize: 'clip',
                        align: 'center-top'
                    },
                ]
            }}
        />

        <stackRoutes.Screen 
            name="MyPlants"
            component={AuthRoutes}
        />

    </stackRoutes.Navigator>
)


export default AppRoutes;