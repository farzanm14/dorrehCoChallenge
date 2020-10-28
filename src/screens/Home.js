import React, { useState, useEffect } from 'react'
import { View, } from 'react-native'
import styles from '../styles/homeScreen'
import Http from '../tools/HttpService'
import AnimatedListComponent from '../components/AnimatedListComponent'

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [list, setList] = useState([]);

    useEffect(() => { //on component did mount
        getUsersList()
    }, [])

    return (
        <View style={styles.mainContainer}>
            <AnimatedListComponent list={list} listName={"U S E R S"} listLoading={loading} />
        </View>
    )

    function getUsersList() {
        setLoading(true)
        Http.httpGet(`users`).then(res => {
            console.log('___ get movies res ___', res)
            setList(res)
            setLoading(false)
        }).catch(err => {
            console.log('___ get movies err ___', err)
            setLoading(false)
        })
    }
}
export default Home;
