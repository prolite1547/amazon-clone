import React from "react";
import "./styles/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../config/StateProvider";
import { getBasketSubTotal } from "../config/reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  const history = useHistory();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketSubTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button onClick={() => history.push("/payment")}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
