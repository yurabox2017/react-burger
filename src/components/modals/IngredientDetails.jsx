function IngredientDetails({ item }) {
  return (
    <>
      <div className="row pb-8">
        <div className="col-12 text-center ">
          <p className="text text-white text_type_digits-large">
            <img src={item.image_large} />
          </p>
        </div>
      </div>
      <div className="row pt-4 pb-8">
        <div className="col-12 text-center ">
          <p className="text text-white text_type_digits-default">
            {item.name}
          </p>
        </div>
      </div>
      <div className="row row-cols-4 pb-15 text-white justify-content-center ">
        <div className="col-2 text-center ">
          <label>Калории, ккал</label>
          <p className="text  text_type_digits-small">{item.calories}</p>
        </div>
        <div className="col-2 text-center ">
          <label>Белки, г</label>
          <p className="text text_type_digits-small">{item.proteins}</p>
        </div>
        <div className="col-2 text-center ">
          <label>Жиры, г</label>
          <p className="text  text_type_digits-small">{item.fat}</p>
        </div>
        <div className="col-2 text-center ">
          <label>Углеводы, г</label>
          <p className="text text_type_digits-small">{item.carbohydrates}</p>
        </div>
      </div>
    </>
  );
}
export default IngredientDetails;
