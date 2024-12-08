import Image from 'next/image';
import React from 'react';

const Clients = () => {
  return (
    <div className="bg-black/100 relative">
      {/* Background Section */}
      <div className="relative h-[468px] w-full">
        {/* Background Image */}
        <Image
          src="/pictures/clients.png"
          alt="Clients"
          width={1923}
          height={468}
          className="object-cover w-full h-full opacity-50"
        />
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/100 opacity-50"></div>
      </div>

      {/* Foreground Section */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
        {/* Images in Center */}
        <div className="flex justify-center gap-8">
          <Image
            src="/pictures/Chef.png"
            alt="Chef"
            width={218}
            height={247}
          />
          <Image
            src="/pictures/Iteam of food.png"
            alt="Item of Food"
            width={162}
            height={247}
          />
          <Image
            src="/pictures/Years of Experienced.png"
            alt="Years of Experienced"
            width={248}
            height={247}
          />
          <Image
            src="/pictures/Happy customers.png"
            alt="Happy Customers"
            width={206}
            height={247}
          />
        </div>
      </div>
    </div>
  );
};

export default Clients;
