import React, { useState } from 'react'
import { Pressable, Text, View } from 'react-native'
import { useTailwind } from 'tailwind-rn/dist'
import PlayButton from '../atoms/PlayButton'

const Chronometer = () => {
	const tailwind = useTailwind()
	const [isRunning, setRunning] = useState(false)
	return (
		<Pressable style={tailwind('flex flex-row items-center')}>
			<Text style={tailwind('text-3xl font-bold')}>00:00:12</Text>
			<PlayButton
				isRunning={isRunning}
				onChange={() => setRunning(!isRunning)}
			/>
		</Pressable>
	)
}

export default Chronometer
