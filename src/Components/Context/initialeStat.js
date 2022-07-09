import { fetchUser } from "../utils/fetchLocalStorageData.js"

const userInfo=fetchUser()
export const initialState={
    user:userInfo,
    foodItems:null,
}