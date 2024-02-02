import React, { useState } from "react";

const ProductDescription = () => {
  const [showDescription, setShowDescription] = useState(true);
  const [showSpecialization, setShowSpecialization] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
    setShowSpecialization(false); // Close specialization if open
  };

  const toggleSpecialization = () => {
    setShowSpecialization(!showSpecialization);
    setShowDescription(false); // Close description if open
  };

  return (
    <div className="w-[90%] m-auto p-3">
      <div className="flex justify-center gap-4 text-lg mb-6 border-b-2 pb-3  ">
        <div className="cursor-pointer" onClick={toggleDescription}>
          <h2 className="font-bold text-lg">Description</h2>
        </div>
        <div className="cursor-pointer" onClick={toggleSpecialization}>
          <h3 className="font-bold text-lg">Specialization</h3>
        </div>
      </div>

      <div className={showDescription ? "block" : "hidden"}>
        <h2 className="text-gray-500 font-bold text-lg mb-3">Description</h2>
        <p className="text-gray-500 text-md">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          loret fugit, sed quia consequuntur magni dolores eos qui ratione
          voluptatem sequi nesciunt loret. Neque porro lorem quisquam est, qui
          dolorem ipsum quia dolor si. Nemo enim ipsam voluptatem quia voluptas
          sit aspernatur aut odit aut loret fugit, sed quia ipsu consequuntur
          magni dolores eos qui ratione voluptatem sequi nesciunt. Nulla
          consequat massa quis enim. Lorem ipsum dolor sit amet, consectetuer
          adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
          sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
          pretium quis, sem.
        </p>
      </div>
      <div className={showSpecialization ? "block" : "hidden"}>
        <h1 className="text-gray-500  font-bold text-lg mb-3">
          Specialization
        </h1>
        <p className="text-gray-500 text-md">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          loret fugit, sed quia consequuntur magni dolores eos qui ratione
          voluptatem sequi nesciunt loret. Neque porro lorem quisquam est, qui
          dolorem ipsum quia dolor si. Nemo enim ipsam voluptatem quia voluptas
          sit aspernatur aut odit aut loret fugit, sed quia ipsu consequuntur
          magni dolores eos qui ratione voluptatem sequi nesciunt. Nulla
          consequat massa quis enim. Lorem ipsum dolor sit amet, consectetuer
          adipiscing elit.
        </p>
      </div>
    </div>
  );
};

export default ProductDescription;
