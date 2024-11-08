import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex items-center justify-center px-[171px] ">
        <div className=" w-1/2 ">
          <h2 className='font-[Cambria] text-[40px] font-bold w-[496px] h-[189px]'>
            IMPECCABLE CRAFTSMANSHIP AND FINESSE
          </h2>
          <div className="w-[902px] h-[189px]">
            <p className="text-[#787054] text-[30px] font-[Cambria]  font-medium ">
              An example of intricate workmanship and detail, elegant<br/> necklaces
              and long and short chains form a part of our<br/> desirable collection.
            </p>
          </div>
          <button className="flex justify-center items-center bg-[#A29875] rounded-[10px] w-[248px] h-[53px]">
            <p className="w-[177px] h-[38px] text-white font-medium font-serif text-[30px] ">
              Explore Now
            </p>
          </button>
        </div>
        <div className=" w-1/2 px-[171px] py-[64px] ">
          <Image
            src="/poster.svg"
            width={490}
            height={667}
            alt="woman wearing necklace"
          />
        </div>
      </div>
    </div>
  );
}
