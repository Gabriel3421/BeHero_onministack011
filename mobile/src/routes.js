import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const AppStack = createStackNavigator();

import incidents from "./pages/incidents";
import detalhes from "./pages/detalhes";

export default function Routes(){
    return (
        <NavigationContainer >
            <AppStack.Navigator screenOptions={{headerShown: false}}>
                <AppStack.Screen name="incident" component={incidents} />
                <AppStack.Screen name="detalhes" component={detalhes} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}