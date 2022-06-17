import React from 'react'
import { Pressable, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useTailwind } from 'tailwind-rn/dist'

type PlayButtonProps = {
	isRunning: boolean
	onChange: () => void
}

const PlayButton = ({ isRunning, onChange }: PlayButtonProps) => {
	const tailwind = useTailwind()
	return (
		<Pressable onPress={() => onChange()}>
			{isRunning ? (
				<Icon style={tailwind('text-4xl')} name="stop" />
			) : (
				<Icon style={tailwind('text-4xl')} name="play-arrow" />
			)}
		</Pressable>
	)
}

export default PlayButton
