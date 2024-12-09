import Image from 'next/image';
import React from 'react';

const Clients = () => {
  return (
    <div className="bg-black/100 relative">
      {/* Background Section */}
      <div className="relative h-[300px] md:h-[468px] w-full">
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
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 px-4">
          <Image
            src="/pictures/Chef.png"
            alt="Chef"
            width={150}
            height={170}
            className="md:w-[218px] md:h-[247px]"
          />
          <Image
            src="/pictures/Iteam of food.png"
            alt="Item of Food"
            width={120}
            height={180}
            className="md:w-[162px] md:h-[247px]"
          />
          <Image
            src="/pictures/Years of Experienced.png"
            alt="Years of Experienced"
            width={180}
            height={200}
            className="md:w-[248px] md:h-[247px]"
          />
          <Image
            src="/pictures/Happy customers.png"
            alt="Happy Customers"
            width={150}
            height={180}
            className="md:w-[206px] md:h-[247px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Clients;
