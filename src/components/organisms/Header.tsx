import React from 'react'
import { View } from 'react-native'
import AddActivityButton from '../atoms/AddActivity'
import Logo from '../atoms/Logo'

const Header = () => {
	return (
		<View>
			<Logo />
			<AddActivityButton />
		</View>
	)
}

export default Header
