import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { useTailwind } from 'tailwind-rn/dist'

type ProgressIndicatorProps = {
	progressPercentage: number
	tailwindStyle: string
	color: string
}

const ProgressIndicator = ({
	progressPercentage = 0,
	tailwindStyle,
	color,
}: ProgressIndicatorProps) => {
	const tailwind = useTailwind()

	return (
		<View
			style={tailwind(`text-xl flex flex-row items-stretch ${tailwindStyle}`)}>
			<View
				style={{
					width: `${progressPercentage}%`,
					...tailwind(`h-full ${color}`),
				}}
			/>
		</View>
	)
}

export default ProgressIndicator
