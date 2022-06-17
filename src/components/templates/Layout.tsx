import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { useTailwind } from 'tailwind-rn/dist'
import Header from '../organisms/Header'

const Layout = ({ children }) => {
	const tailwind = useTailwind()
	return (
		<View style={tailwind('flex-grow')}>
			<View style={tailwind('flex-grow')}>{children}</View>
		</View>
	)
}

export default Layout
