import React from 'react'
import { Pressable, Text, View } from 'react-native'
import ScheduleInput from '../atoms/ScheduleInput'

const IntroForm = () => {
	return (
		<View>
			<Text>Quantas horas livres você tem por dia?</Text>
			<ScheduleInput />
			<ScheduleInput />
			<ScheduleInput />
		</View>
	)
}

export default IntroForm
