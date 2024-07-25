import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { MenuStack } from './MenuStack.navigation';
import { MenuTabs } from './MenuBottomTab.navigation';

export function NavigationStack(){
    return(
        <NavigationContainer>
            <MenuStack />
        </NavigationContainer>
    );
}

export function NavigationTab(){
    return(
        <NavigationContainer>
            <MenuTabs />
        </NavigationContainer>
    );
}