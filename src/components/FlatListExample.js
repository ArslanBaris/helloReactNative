import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import data from '../../data';



function FlatListExample() {

    const [text,setText] = useState()
    const [contacts,setContacts] = useState(data)
    
  const renderContactsItem = ({item,index}) =>{
    return(
    	<TouchableOpacity style={[styles.itemContainer, { backgroundColor: index % 2 === 1 ? '#fafafa' : 'white' }]}>
				<Image
					style={styles.avatar}
					source={{ uri: item.picture }} />
				<View style={styles.textContainer}>
					<Text style={styles.name}>{item.name}</Text>
					<Text>{item.company}</Text>
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

    const searchFilter = text => {
		const newData = data.filter(item => {
			const listItem = `${item.name.toLowerCase()} ${item.company.toLowerCase()}`;

			return listItem.indexOf(text.toLowerCase()) > -1;
		});

		setContacts(newData);
	};

  return (
    <SafeAreaView style={styles.container}>
    <FlatList
    ListHeaderComponent={renderHeader}
      renderItem={renderContactsItem}
      keyExtractor={item => item._id}
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

