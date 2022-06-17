import React from 'react'
import { Pressable, Text, View } from 'react-native'
import ActivityList from '../organisms/ActivityList'
import IntroForm from '../organisms/IntroForm'
import Summary from '../organisms/Summary'
import Layout from './Layout'

const MainTemplate = () => {
	return (
		<Layout>
			<ActivityList />
			<Summary />
		</Layout>
	)
}

export default MainTemplate
