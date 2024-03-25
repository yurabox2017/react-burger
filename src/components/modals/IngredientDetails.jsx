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
      <div className="row row-cols-4 pb-15  justify-content-center ">
        <div className="col-3 text-center ">
          <p className="text text_type_main-small">Калории, ккал</p>
          <p className="text  text_type_digits-small">{item.calories}</p>
        </div>
        <div className="col-3 text-center ">
          <p className="text text_type_main-small">Белки, г</p>
          <p className="text text_type_digits-small">{item.proteins}</p>
        </div>
        <div className="col-3 text-center ">
          <p className="text text_type_main-small">Жиры, г</p>
          <p className="text  text_type_digits-small">{item.fat}</p>
        </div>
        <div className="col-3 text-center ">
          <p className="text text_type_main-small">Углеводы, г</p>
          <p className="text text_type_digits-small">{item.carbohydrates}</p>
        </div>
      </div>
    </>
  );
}
export default IngredientDetails;
