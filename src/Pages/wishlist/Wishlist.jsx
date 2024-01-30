import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/Cart/CartSlice";
import { removeFromWishlist } from "../../redux/features/Wishlist/WishlistSlice";
import toast, { Toaster } from "react-hot-toast";
import StarRating from "../../components/StartRating/StartRating"; // Make sure to import your StarRating component

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);

  const removeItemFromWishlist = (product) => {
    dispatch(removeFromWishlist(product));
    toast.success("Item Removed from the wishlist ");
  };

  function formatPrice(price) {
    return "₹" + price.toLocaleString("en-IN");
  }

  const addItemToCart = (product) => {
    dispatch(addToCart(product));
    dispatch(removeFromWishlist(product));
    toast.success("Moved to the cart ");
  };

  // useEffect(() => {
  //   const storedWishItems = JSON.parse(localStorage.getItem("wishlist")) || [];
  //   dispatch(setWishlistItems(storedWishItems));
  // }, [dispatch]);

  return (
    <div className="container mx-auto p-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold my-4 sm:text-3xl">
        My Wishlist {wishlistItems.length} items
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {wishlistItems.map((product) => (
          <div className="border border-gray-200 rounded-md" key={product.id}>
            <div className="">
              <a href="#" className="object-contain">
                <img
                  src={product.image}
                  alt=""
                  className="object-fill w-[100%] h-52 "
                />
              </a>
            </div>

            <div className="p-3 bg-gray-50">
              <h5 className="text-lg font-bold tracking-tight h-16 line-clamp-2">
                {product.title}
              </h5>
              <div className="mb-2 flex justify-between">
                <h2 className="text-sm overflow-hidden overflow-ellipsis whitespace-nowrap">
                  {product.description}
                </h2>
              </div>

              <div className="mb-2 flex justify-between">
                <StarRating rating={3} />
                <p className="text-md font-semibold text-green-600">
                  <span>{formatPrice(product.price)}</span>
                  <span className="px-2 line-through text-sm text-gray-500">
                    {formatPrice(999)}
                  </span>
                </p>
              </div>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="flex justify-center px-2 py-2 text-blue-600 border border-blue-300 rounded-md hover:bg-blue-700 hover:text-gray-100 dark:hover:bg-gray-800 dark:hover:border-gray-900"
                  onClick={() => addItemToCart(product)}
                >
                  Move to cart
                </a>
                <a
                  href="#"
                  className="flex justify-center px-4 py-2 bg-blue-100 text-blue-600 border border-blue-300 rounded-md hover:bg-blue-700 hover:border-none hover:text-gray-100 dark:hover:bg-red-600"
                  onClick={() => removeItemFromWishlist(product)}
                >
                  Remove
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Toaster position="top-right" containerStyle={{ zIndex: "99999" }} />
    </div>
  );
};

export default Wishlist;
