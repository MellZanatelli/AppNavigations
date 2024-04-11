import { StackNavigationProp, createStackNavigator } from "@react-navigation/stack";
import { Tela1, Tela2 } from '../screens';

type MenuStackParam = {
    pag1: undefined
    pag2: undefined
}

type MenuScreenNavigation = StackNavigationProp<MenuStackParam, "pag1">

export type MenuStackTypes = {
    navigation: MenuScreenNavigation
}

export function MenuStack(){
    const Stack = createStackNavigator<MenuStackParam>();
    return (
        <Stack.Navigator screenOptions={{
            animationEnabled: true,
            gestureEnabled: true
        }}>
            <Stack.Screen name = 'pag1' component = {Tela1} />
            <Stack.Screen name = 'pag2' component = {Tela2} />
        </Stack.Navigator>
    )
}