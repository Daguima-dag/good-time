import React from 'react'
import { Pressable, Text, View } from 'react-native'
import ColorButton from '../atoms/ColorButton'

const ColorSelection = () => {
	const colors = [1, 2, 3, 4, 5, 6]
	return (
		<View>
			{colors.map(item => (
				<ColorButton key={item} />
			))}
		</View>
	)
}

export default ColorSelection
