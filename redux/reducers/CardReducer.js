// action types:
import { ADD_TO_CARD } from '../action-types/CardActions'

const initialState = {
    items: [],
    restaurnantName: '',
}

const CardReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_TO_CARD:
            console.log(payload)
            return {
                items: [ payload.items ],
                restaurnantName: payload.restaurnantName,
            }

        default:
            return state
    }
}

export default CardReducer
