// action types:
import { ADD_TO_CARD } from '../action-types/CardActions'

const initialState = {
    items: [],
    restaurantName: '',
}

const CardReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_TO_CARD: {
            let newState = { ...state }

            if (payload.CheckBoxValue) {
                console.log('ADD TO CART')

                newState = {
                    items: [...newState.items, payload],
                    restaurantName: payload.restaurantName,
                }
            } else {
                console.log('REMOVE FROM CART')
                newState = {
                    items: [
                        ...newState.items.filter(
                            item => item.title !== payload.title
                        ),
                    ],
                    restaurantName: payload.restaurantName,
                }
            }
            console.log('New state 👉', newState)
            return newState
        }

        default:
            return state
    }
}

export default CardReducer
