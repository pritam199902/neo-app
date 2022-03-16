/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';




const App = () => {

  const [state, setState] = useState({
    rate: "1",
    amount: "0",
    total: 0
  })

  const handleRate = (e) => {
    if (e >= 0 && e < 10000) {
      setState({ ...state, rate: e })
    } else{
      alert("Rate should be within 0 - 9999")
    }
  }

  const handleAmount = (e) => {
    if (e >= 0 && e < 1000000000) {
      setState({ ...state, amount: e })
    } else{
      alert("Amount should be within 0 - 999999999")
    }
  }

  useEffect(() => {

    setState({
      ...state, 
      total: (parseInt(state.amount) + (parseInt(state.amount)*parseInt(state.rate)/100)).toFixed(2)
    })


  }, [state.rate, state.amount])



  return (
    <SafeAreaView >

      <View style={{ backgroundColor: "#04d1a1", paddingHorizontal: 20, paddingVertical: 15, elevation: 5 }} >
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: "#fff" }} >Neo App (P.C Das & Sons)</Text>
      </View>

      <View style={{ paddingHorizontal: 20 }} >
        <View style={{ backgroundColor: '#fff', elevation: 4, marginVertical: 5, marginTop: 10, paddingHorizontal: 15, paddingVertical: 5, borderRadius: 6 }} >
          <View style={{ display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 10 }} >
            <TextInput
              keyboardType='decimal-pad'
              placeholder='Rate'
              style={{
                borderColor: '#eee',
                borderWidth: 1,
                borderRadius: 20,
                width: "38%",
                paddingHorizontal: 10,
                paddingVertical: 5,
                fontSize: 15,
                textAlign: 'center',
                color: '#888',
              }}
              value={state?.rate}
              onChangeText={handleRate}
            />
            <Text style={{ paddingHorizontal: 10, fontSize: 20, fontWeight: 'bold', color: '#888' }} >%</Text>
          </View>
          <View style={{ display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 10 }} >
            <TextInput
              keyboardType='decimal-pad'
              placeholder='Amount'
              style={{
                borderColor: '#eee',
                borderRadius: 20,
                borderWidth: 1,
                width: "50%",
                paddingHorizontal: 10,
                paddingVertical: 5,
                fontSize: 15,
                textAlign: 'center',
                color: '#888',
              }}
              value={state?.amount}
              onChangeText={handleAmount}
            />
          </View>
        </View>
        <View style={{ backgroundColor: '#fff', elevation: 4, marginVertical: 5, paddingHorizontal: 15, paddingVertical: 5, borderRadius: 6 }} >

          <View style={{ display: "flex", flexDirection: "column", alignItems: 'center', justifyContent: 'center', marginVertical: 10 }} >
            {/* <TextInput
              keyboardType='decimal-pad'
              placeholder='Amount'
              style={{
                borderColor: '#eee',
                borderRadius: 10,
                borderWidth: 1,
                width: "50%",
                paddingHorizontal: 10,
                paddingVertical: 5,
                fontSize: 15,
                textAlign: 'center',
                color: '#888',
              }}
            /> */}
            <View style={{ display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", marginBottom: 10, width: "60%" }} >
              <Text style={{ paddingHorizontal: 10, fontSize: 14, color: '#888' }} >
                Rate (%)
              </Text>
              <Text style={{ paddingHorizontal: 10, fontSize: 14, color: '#666', fontWeight: 'bold' }} >
                {state?.rate}
              </Text>
            </View>

            <View style={{ display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", marginBottom: 10, width: "60%" }} >
              <Text style={{ paddingHorizontal: 10, fontSize: 14, color: '#888' }} >
                Amount (Rs)
              </Text>
              <Text style={{ paddingHorizontal: 10, fontSize: 14, color: '#666', fontWeight: 'bold' }} >
                {state?.amount}
              </Text>
            </View>

            <View style={{ display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", width: "60%" }} >
              <Text style={{ paddingHorizontal: 10, fontSize: 14, color: '#888' }} >
                Total (Rs)
              </Text>
              <Text style={{ paddingHorizontal: 10, fontSize: 15, color: '#6f6', fontWeight: 'bold' }} >
                {state?.total}
              </Text>
            </View>


          </View>
        </View>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({


});

export default App;
