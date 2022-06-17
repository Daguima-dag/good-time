import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { useTailwind } from 'tailwind-rn/dist'
import Total from '../atoms/Total'

const Summary = () => {
	const tailwind = useTailwind()
	return (
		<View>
			<Total />
			<Text style={tailwind('text-lg text-gray-800 p-2')}>
				Depois dessas tarefas ainda restam 5hs livres!
			</Text>
		</View>
	)
}

export default Summary
