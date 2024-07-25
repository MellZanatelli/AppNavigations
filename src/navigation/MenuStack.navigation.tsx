import { StackNavigationProp, createStackNavigator } from "@react-navigation/stack";
import { Login, Cadastrar } from '../screens';

type MenuStackParam = {
    Login: undefined
    Cadastrar: undefined
}

type MenuScreenNavigation = StackNavigationProp<MenuStackParam, "pag1">

export type MenuStackTypes = {
    navigation: MenuScreenNavigation
}

export function MenuStack(){
    const Stack = createStackNavigator<MenuStackParam>();
    return (
        <Stack.Navigator id='Login' screenOptions={{
            animationEnabled: true,
            gestureEnabled: true,
            headerShown: false
        }}>
            <Stack.Screen name = 'Login' component = {Login} />
            <Stack.Screen name = 'Cadastrar' component = {Cadastrar} />
        </Stack.Navigator>
    )
}