import React, { Component } from 'react';
import {View, Text, FlatList} from 'react-native';

export default class Indo extends Component{
    constructor(){
        super();
        this.state = {
            data: [],
            refreshing:false
        }


    }
    onRefresh= () =>{
    this.getDataGlobal();
}

componentDidMount = () =>{
    this.getDataGlobal();
}

    getDataGlobal = () => {
        fetch('https://indonesia-covid-19.mathdro.id/api/provinsi')
        .then(response => response.json())
        .then(json => this.setState({data: json.data}))
    }


    render(){

        return(
            <View style={{flex: 1}}>
                <FlatList 
                    data={this.state.data}
                    keyExtractor={item => item.fid.toString()}
                    renderItem = {
                        ({item}) => (
                            <View style={{height: 50, flexDirection: 'row', alignItems:'center',justifyContent: 'space-between', borderWidth: 2, borderColor:'black', borderRadius: 10, margin: 5}}>
                                <View style={{marginLeft: 5}}>
                                    <Text>{item.provinsi}</Text>
                                </View>
                                <View style={{flexDirection:'row'}}>
                                    <View style={{height: 25, width: 55, borderRadius: 10, backgroundColor: 'yellow', justifyContent: 'center', alignItems: 'center', margin: 5}}>
                                        <Text>{item.kasusPosi}</Text>
                                    </View>
                                    <View style={{height: 25, width: 55, borderRadius: 10, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center', margin: 5}}>
                                        <Text>{item.kasusSemb}</Text>
                                    </View>
                                    <View style={{height: 20, width: 50, borderRadius: 10, backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center', margin: 5}}>
                                        <Text>{item.kasusMeni}</Text>
                                    </View>
                                </View>
                            </View>
                        )
                    }
                    
                    refreshing= {this.state.refreshing}
                    onRefresh ={this.onRefresh}
                />
            </View>
        )
    }
}