import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { COURSE } from "../../../constants";
const courses = [...COURSE];

const SearchPage = (props) => {
  const { key } = useParams();
  const result = [
    ...courses.filter((value) =>
      value.name.toLowerCase().includes(key.toLowerCase())
    ),
  ];
  const navigate = useNavigate();
  return (
    <div className="search-temp p-2">
      <h1 className="fs-1 text-white">Result for "{key}"</h1>
      <h4 className="fs-4 text-white">Total: {result.length}</h4>
      <div className="mt-3">
        {result.map((item, index) => (
          <div
            key={index}
            className="col-12 p-2 bg-white rounded mb-2 d-flex search-card gap-3 align-items-center flex-md-row flex-column"
          >
            <div className="image-banner">
              <img src={item.thumbnail} alt="" />
            </div>
            <div className="description">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <button
                className="btn btn-success"
                onClick={() => {
                  navigate(item.link);
                }}
              >
                Start Study
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
