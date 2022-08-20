//import liraries

import AsyncStorage from "@react-native-async-storage/async-storage";


// create a component
class UserPreference {
    userCollectionKey = "@Wall_USER_COLLECTION_KEY"

    constructor() {

    }
    async setCollection(params) {
        try {
            await AsyncStorage.setItem(this.userCollectionKey, params)
        } catch (error) {
            console.log("error")
        }


    }

    async getCollection() {
        await AsyncStorage.getItem(this.userCollectionKey);

    }



}


export default UserPreference;