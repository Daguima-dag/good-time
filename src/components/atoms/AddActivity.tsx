import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { useTailwind } from 'tailwind-rn/dist'

const AddActivityButton = () => {
	const tailwind = useTailwind()

	return (
		<Pressable>
			<Text style={tailwind('text-xl text-gray-800')}>+ Novo</Text>
		</Pressable>
	)
}

export default AddActivityButton
