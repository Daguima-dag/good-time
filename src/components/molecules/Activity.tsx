import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { useTailwind } from 'tailwind-rn/dist'
import ProgressIndicator from '../atoms/ProgressIndicator'
import Chronometer from './Chronometer'

const Activity = () => {
	const tailwind = useTailwind()
	const colors = [
		'bg-violet-500',
		'bg-fuchsia-500',
		'bg-emerald-500',
		'bg-rose-500',
		'bg-orange-500',
	]
	const randomColor = colors[Math.floor(Math.random() * colors.length)]
	const randomProgress = Math.floor(Math.random() * 100)

	return (
		<Pressable style={tailwind(`w-full flex flex-row items-center flex-grow`)}>
			<ProgressIndicator
				progressPercentage={randomProgress}
				tailwindStyle={`absolute top-0 right-0 left-0 bottom-0`}
				color={randomColor}
			/>
			<Text
				style={tailwind(
					'text-yellow-400 mr-4 text-3xl font-bold uppercase flex-grow',
				)}>
				Casa
			</Text>
			<Chronometer />
		</Pressable>
	)
}

export default Activity
