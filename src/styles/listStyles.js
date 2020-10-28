import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    listContainer: {
        marginVertical: 4,
        justifyContent: 'center'
    },
    card: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        borderRadius: 10
    },

    itemContainer: {
        backgroundColor: 'white',
        padding: 10,
        margin: 15,
        height: 100
    },
    listTitle: {
        color: 'orange',
        fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal: 4,
        alignSelf: 'center'
    },
    emptyListText: {
        color: 'gray',
        alignSelf: 'center',
        flex: 1,
        textAlign: 'center',
        fontSize: 12
    },

    moreDetailContainer: {
        justifyContent: 'space-around',
        padding: 4,
    },
    primaryText: {
        fontWeight: 'bold'
    },
    detailText: {
        color: 'gray'
    }
});
