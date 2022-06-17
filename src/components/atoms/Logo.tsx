import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { useTailwind } from 'tailwind-rn'

const Logo = () => {
	const tailwind = useTailwind()
	return (
		<Pressable>
			<Text style={tailwind('text-2xl text-gray-800 font-black')}>
				GOODTIME
			</Text>
		</Pressable>
	)
}

export default Logo
