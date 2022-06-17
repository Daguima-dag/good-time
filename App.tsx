/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { TailwindProvider } from 'tailwind-rn'
import utilities from './tailwind.json'
import { useColorScheme } from 'react-native'

import MainScreen from './src/screens/MainScreen'
import Header from './src/components/organisms/Header'
import Logo from './src/components/atoms/Logo'
import AddActivityButton from './src/components/atoms/AddActivity'

const Stack = createNativeStackNavigator()

const App = () => {
	const isDarkMode = useColorScheme() === 'dark'

	return (
		<TailwindProvider utilities={utilities}>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						name="Main"
						component={MainScreen}
						options={{
							headerTitle: () => <Logo />,
							headerRight: () => <AddActivityButton />,
						}}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</TailwindProvider>
	)
}

export default App
