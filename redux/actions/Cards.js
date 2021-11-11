import { useSelector, useDispatch } from 'react-redux'

// types
import { ADD_TO_CARD } from '../action-types/CardActions'

export const Cards = ( food,restaurantName, CheckBoxValue ) => dispatch => {
    console.log(food, CheckBoxValue)
    if (CheckBoxValue){

    } else{
        dispatch({ type: ADD_TO_CARD, payload: {
            items : [food],
            restaurantName: restaurantName,
        } })
    }
}
