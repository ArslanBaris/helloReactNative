import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
	SafeAreaView,
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	TextInput,
	FlatList,
	ActivityIndicator,
	Keyboard,
} from 'react-native';



function FlatListExample() {

	const [text, setText] = useState()
	const [contacts, setContacts] = useState([])
	const [allContacts, setAllContacts] = useState([])
	const [loading, setLoading] = useState(true)

	const renderContactsItem = ({ item, index }) => {
		return (
			<TouchableOpacity style={[styles.itemContainer, { backgroundColor: index % 2 === 1 ? '#fafafa' : 'white' }]}>
				<Image
					style={styles.avatar}
					source={{ uri: item.picture.thumbnail }} />
				<View style={styles.textContainer}>
					<Text style={styles.name.first}>{item.name.last}</Text>
					<Text>{item.location.state}</Text>
				</View>
			</TouchableOpacity>
		)
	}

	const renderHeader = () => {
		return (
			<View style={styles.searchContainer}>
				<TextInput
					onChangeText={text => {
						setText(text)
						searchFilter(text);
					}}
					value={text}
					placeholder="Search.."
					style={styles.searchInput} />
			</View>
		)
	};

	const renderFooter = () => {
		if (!loading) return null;
		return (
			<View>
				<ActivityIndicator size="large" />
			</View>
		)
	};

	const searchFilter = text => {
		const newData = allContacts.filter(item => {
			const listItem = `${item.name.first.toLowerCase()} ${item.name.last.toLowerCase()} ${item.location.state.toLowerCase()}`;

			return listItem.indexOf(text.toLowerCase()) > -1; 
		});

		setContacts(newData);
	}

	const getContacts = async () => {
		const { data: { results: contacts } } = await axios.get('https://randomuser.me/api/?results=30');
		setContacts(contacts);
		setAllContacts(contacts);
		setLoading(false);
	};

	useEffect(() => {
		getContacts();
	}, []);

	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				ListFooterComponent={renderFooter}
				ListHeaderComponent={renderHeader}
				renderItem={renderContactsItem}
				keyExtractor={item => item.login.uuid}
				data={contacts} />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	itemContainer: {
		flex: 1,
		flexDirection: 'row',
		paddingVertical: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#eee'
	},
	avatar: {
		width: 50,
		height: 50,
		borderRadius: 25,
		marginHorizontal: 10
	},
	textContainer: {
		justifyContent: 'space-around'
	},
	name: {
		fontSize: 16
	},
	searchContainer: {
		padding: 10
	},
	searchInput: {
		fontSize: 16,
		backgroundColor: '#f9f9f9',
		padding: 10
	}
});

export default FlatListExample;

