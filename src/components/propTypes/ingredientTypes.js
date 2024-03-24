import PropTypes from 'prop-types';
function IngredientPropTypes() {
    return {
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }
};
export default IngredientPropTypes;