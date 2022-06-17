import React from 'react'
import { Pressable, Text, View } from 'react-native'
import ConfirmButton from '../atoms/ConfirmButton'
import DurationInput from '../atoms/DurationInput'
import ColorSelection from '../molecules/ColorSelection'
import IntroForm from '../organisms/IntroForm'
import Layout from './Layout'

const ActivityTemplate = () => {
	return (
		<Layout>
			<Text>Activity name</Text>
			<DurationInput />
			<ColorSelection />
			<ConfirmButton />
		</Layout>
	)
}

export default ActivityTemplate
