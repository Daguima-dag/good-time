import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { useTailwind } from 'tailwind-rn/dist'

const Total = () => {
	const tailwind = useTailwind()

	return (
		<Pressable style={tailwind('items-end p-4')}>
			<Text style={tailwind('text-xl text-gray-800 font-bold')}>Total 3hs</Text>
		</Pressable>
	)
}

export default Total
