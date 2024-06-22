import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deletetocurt, alldeletetocurt } from "../../redux/cartRudecer";

export default function Cart() {
  const [value, setValue] = useState(0);
  const data = useSelector((state) => state.cart.data);
  const dispatch = useDispatch();
  return (
    <div data-bs-theme="dark">
      <a
        className=" position-relative"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasWithBothOptions"
        aria-controls="offcanvasWithBothOptions"
      >
        <i className="bi bi-bag-check text-light"></i>
        <span
          id="liun"
          className=" position-absolute   text-light bg-danger rounded-circle"
        >
          {data.length}
        </span>
      </a>
      <div
        className="offcanvas offcanvas-end"
        style={{ width: "500px", background: "rgb(24,29,37)" }}
        data-bs-scroll="true"
        tabIndex="10"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
            <img src="/public/logo-white.svg" loading="lazy" alt="brand-1" />
          </h5>
          <button
            type="button"
            className="btn-close shadow-none"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        {data.map((item) => (
          <div className="offcanvas-body">
            <div
              key={item.id}
              className=" d-flex align-items-center  gap-4 border-bottom pb-1 "
            >
              <img
                src={item.image}
                loading="lazy"
                width={60}
                height={60}
                alt="basket"
              />
              <div className=" text-capitalize">
                <h5>{item.category}</h5>
                <span className=" border-bottom">${item.price}</span>
              </div>
              <div className="input-group ms-4">
                <button
                  onClick={() => {
                    setValue(value - 1);
                  }}
                  style={{ fontSize: "12px" }}
                  className="btn btn-outline-secondary"
                >
                  -
                </button>
                <button
                  style={{ fontSize: "12px" }}
                  className="btn btn-outline-secondary"
                >
                  {value}
                </button>
                <button
                  style={{ fontSize: "12px" }}
                  onClick={() => {
                    setValue(value + 1);
                  }}
                  className="btn btn-outline-secondary"
                >
                  +
                </button>
              </div>
              <button
                className="btn border-0  d-flex gap-1 "
                onClick={() => dispatch(deletetocurt({ id: item.id }))}
              >
                <i className="bi bi-trash text-danger"></i> Remove
              </button>
            </div>
          </div>
        ))}
        <button
          className="btn btn-outline-danger mt-3  w-75 ms-4"
          onClick={() => dispatch(alldeletetocurt())}
        >
          Clear All
        </button>
        <div className="offcanvas-header flex-column align-items-start">
          <div className="d-flex align-items-center justify-content-between w-100 mb-3 mb-md-4">
            <span className="text-light-emphasis">Subtotal:</span>
            <span className="h6 mb-0">$197.00</span>
          </div>
          <div className="d-flex w-100 gap-3">
            <a className="btn btn-lg btn-secondary w-100" href="#!">
              View cart
            </a>
            <a className="btn btn-lg btn-dark w-100" href="#!">
              Checkout
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
