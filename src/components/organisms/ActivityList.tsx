import React from 'react'
import { Pressable, ScrollView, Text, View } from 'react-native'
import { useTailwind } from 'tailwind-rn/dist'
import AddFirstActivity from '../atoms/AddFirstActivity'
import Activity from '../molecules/Activity'

const ActivityList = () => {
	const tailwind = useTailwind()

	const activities = [1, 2, 3, 4, 5]

	return (
		<View style={tailwind('w-full flex flex-grow items-stretch')}>
			{activities ? (
				activities.map(activity => <Activity key={activity} />)
			) : (
				<AddFirstActivity />
			)}
		</View>
	)
}

export default ActivityList
