import React from "react";

export default function ProductItem(props) {
  const item = props.item;

  return (
    <>
      <div className="col-lg-3 col-md-6">
        <div className="team-item" key={item.key}>
          <div className="team-img">
            <img src={item.image} alt="Team Image" />
          </div>
          <div className="team-text">
            <h2>{item.title}</h2>
            <p>{item.caption}</p>
            <div className="team-social">
              <a href="">
                <i className="fas fa-eye"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
