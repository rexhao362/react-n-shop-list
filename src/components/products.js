
import {Text, Image} from 'react-native'
class Product {
    constructor(name, picture, price, category, store) {
        this.name = name, 
        this.picture = picture, 
        this.price = price,
        this.category = category,
        this.store = store,
        this.quantity = 0
    }

    showProduct() {
        return (
            <View>
                <Image>{this.picture}</Image>
                <Text>{this.name}</Text>
                <Text>{this.price}</Text>
                

            </View>
        )
    }


}