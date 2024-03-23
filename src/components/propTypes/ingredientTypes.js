import PropTypes from 'prop-types';
function IngredientPropTypes() {
    return {
        _id: PropTypes.string,
        name: PropTypes.string,
        price: PropTypes.number,
    }
};
export default IngredientPropTypes;