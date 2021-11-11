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

                newState = {
                    items: [...newState.items, payload],
                    restaurantName: payload.restaurantName,
                }
            } else {
                newState = {
                    items: [
                        ...newState.items.filter(
                            item => item.title !== payload.title
                        ),
                    ],
                    restaurantName: payload.restaurantName,
                }
            }
            return newState
        }

        default:
            return state
    }
}

export default CardReducer
