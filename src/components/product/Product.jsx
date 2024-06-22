import { useState, useEffect } from "react";
import "./Product.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addtocurt } from "../../redux/cartRudecer";
export default function Product() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const dispatch = useDispatch();
  return (
    <section>
      <h1 className="fulls">project all</h1>
      <p className="cd">
        Lorem ipsum dolor sit amet consectetur adipisicing elit Praesentium
        labore doloribus nam!
      </p>
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className="card mb-5"
              style={{ width: "18rem" }}
              data-bs-theme="dark"
            >
              <img
                src={item.image}
                className="card-img-top border-bottom"
                alt="card-2"
                height={350}
              />
              <div className="card-body">
                <h5 className="card-title">{item.category}</h5>
                <div className=" sestem d-flex align-items-center justify-content-between  mt-5">
                  <span>{item.price} $</span>
                  <a
                    href="#"
                    className="btn btn-outline-light"
                    onClick={() =>
                      dispatch(
                        addtocurt({
                          id: item.id,
                          image: item.image,
                          category: item.category,
                          price: item.price,
                        })
                      )
                    }
                  >
                    Add TO CURT
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
