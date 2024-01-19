import React from "react";

const ProductCard3 = () => {
  return (
    <li className="product-base">
      <div className="product-thumbShim"></div>
      <div className="product-ratingsContainer">
        <span>4.3</span>
        <span className="myntraweb-sprite product-starIcon index-productRatingsExcellentIcon sprites-productRatingsExcellentIcon"></span>
        <div className="product-ratingsCount">
          <div className="product-separator">|</div>
          <span>4.5k</span>
        </div>
      </div>
      <a
        data-refreshpage="true"
        target="_blank"
        href="sports-shoes/red+tape/red-tape-men-white-mesh-high-top-walking-shoes/20576332/buy"
        style={{ display: "block" }}
      >
        <div className="product-imageSliderContainer">
          <div className="product-sliderContainer" style={{ display: "block" }}>
            <div style={{ background: "rgb(229, 241, 255)" }}>
              <div style={{ height: "280px", width: "100%" }}>
                <picture
                  draggable="false"
                  className="img-responsive"
                  style={{ width: "100%", height: "100%", display: "block" }}
                >
                  <source
                    srcSet="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/20576332/2023/1/25/ba095322-5fea-4639-bcc8-6d3080e0fd261674627359062-Red-Tape-Men-White-Mesh-High-Top-Walking-Shoes-6331674627358-1.jpg"
                    type="image/webp"
                  />
                  <img
                    draggable="false"
                    src="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/20576332/2023/1/25/ba095322-5fea-4639-bcc8-6d3080e0fd261674627359062-Red-Tape-Men-White-Mesh-High-Top-Walking-Shoes-6331674627358-1.jpg"
                    className="img-responsive"
                    alt="Red Tape Men White Mesh High-Top Walking Shoes"
                    title="Red Tape Men White Mesh High-Top Walking Shoes"
                    style={{ width: "100%", display: "block" }}
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
        <div className="product-productMetaInfo">
          <h3 className="product-brand">Red Tape</h3>
          <h4 className="product-product">Men Walking Shoes</h4>
          <h4 className="product-sizes">
            Sizes: <span className="product-sizeInventoryPresent">UK8</span>
          </h4>
          <div className="product-price">
            <span>
              <span className="product-discountedPrice">Rs. 1699</span>
              <span className="product-strike">Rs. 6799</span>
            </span>
            <span className="product-discountPercentage">(75% OFF)</span>
          </div>
        </div>
      </a>
      <div className="image-grid-similarColorsCta product-similarItemCta">
        <span className="myntraweb-sprite image-grid-similarColorsIcon sprites-similarProductsIcon"></span>
        <span className="image-grid-iconText">VIEW SIMILAR</span>
      </div>
      <div className="product-actions ">
        <span
          className="product-wishlistFlex product-actionsButton product-wishlist"
          style={{ width: "100%", textAlign: "center" }}
        >
          <span className="myntraweb-sprite product-notWishlistedIcon sprites-notWishlisted"></span>
          wishlist
        </span>
      </div>
      <div className="product-sizeDisplayDiv">
        <div className="product-sizeDisplayHeader">
          <span>Select a size</span>
          <span className="myntraweb-sprite product-sizeDisplayRemoveMark sprites-remove"></span>
        </div>
        <div className="product-sizeButtonsContaier">
          <button className="product-sizeButton">UK8</button>
        </div>
      </div>
    </li>
  );
};

export default ProductCard3;
