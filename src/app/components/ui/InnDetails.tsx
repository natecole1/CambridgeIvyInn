import React from 'react'

const InnDetails = () => {
  return (
    <div className="w-full flex flex-col sm:flex-row bg-black/[0.4] py-24 xl:py-48">
      <div className="w-full sm:w-[50%]">
        <h1 className="text-white py-6 text-2xl lg:text-5xl">THE INN</h1>
      </div>
      <div className="w-full sm:w-[50%]">
        <p className="text-white px-2 py-32 xl:py-48 xl:text-2xl">
          The Cambridge Ivy Inn is located a five minute walk to Harvard
          University and short train ride to MIT. It is also very close to the
          historic Harvard Square where there are lots shops, restaurants and
          cafes. With easy access to the red line train, you can explore the
          cultural riches of Boston.
        </p>
        <div className="border-white text-white w-[50%] h-11 m-auto border-2 flex items-center justify-center cursor-pointer hover:bg-blue-500 hover:border-none rounded-full my-5 lg:my-24">
          View More
        </div>
      </div>
    </div>
  );
}

export default InnDetails