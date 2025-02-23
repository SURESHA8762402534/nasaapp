/** @format */

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		width: '100%',
		flex: 1,
		backgroundColor: "#f6f1eb",
		padding: 10,
		justifyContent: "center",
		alignItems: "center",
	},
	inputcontainer: {
		width: '90%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		paddingTop: 10,
		paddingBottom: 10,
		borderRadius: 10,

		// borderWidth: 1,
		borderStyle: 'solid',
		borderColor: 'black'
	},
	input: {
		width: "80%",
		padding: 10,
		borderColor: "blue",
		borderWidth: 1,
		borderRadius: 10,
		marginBottom: 10,
		backgroundColor: 'white'
	},
	buttonsRow: {
		marginTop: 30,

	},
	btn: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'relative',
		bottom: 5,
		marginLeft: 5,
		borderRadius: 10,
		borderWidth: 1,
		backgroundColor: 'orange',
	},
	head: {
		color: "blue",
		fontSize: 20,
		display: "flex",
		justifyContent: "center",
		alignItems: "flex-start",
		height: "20%"

	},
	load: {
		marginTop: 20
	},
	card: {

		width: '80%',
		padding: 15,

		borderWidth: 1,
		borderStyle: 'solid',
		borderColor: 'orange',
		borderRadius: 10,

	},
	txt: {
		color: '#18315f',
		fontSize: 18,

	}
});
