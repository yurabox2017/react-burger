import { Typography } from '@ya.praktikum/react-developer-burger-ui-components';
function OrderDetails() {
  return (
    <>
      <div className="row pb-8">
        <div className="col-12 text-center ">
          <p className="text text-white text_type_digits-large">034536</p>
        </div>
      </div>
      <div className="row pb-8">
        <div className="col-12 text-center">
          <p className="text text-white text_type_main-medium">
            Идентификатор заказа
          </p>
        </div>
      </div>
      <div className="row pb-15 pt-15">
        <div className="col-12 text-center">
          <p className="text text-white text_type_main-medium">...</p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-center">
          <p className="text text-white text_type_main-default">
            Ваш заказ начали готовить
          </p>
        </div>
      </div>
      <div className="row pt-2 pb-30">
        <div className="col-12 text-center">
          <p className="text-white text text_type_main-default text_color_inactive text-muted">
            Дождитесь готовности на орбитальной станции
          </p>
        </div>
      </div>
    </>
  );
}
export default OrderDetails;
