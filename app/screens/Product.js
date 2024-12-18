import {View, Text, StyleSheet, Button} from 'react-native'

export const Product = ({navigation}) =>{
    return <View style={styles.container}> 
        <Text>Bienvenido a mi tienda soy Pedro Romero</Text>
        <Text>Zapatos</Text>
        <Text>Ropa</Text>
        <Text>Interior</Text>
        <Button
            title='HOME'
            onPress={()=>{
                navigation.navigate('WellcomePedro');
            }}
        />
    </View>

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'green',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });