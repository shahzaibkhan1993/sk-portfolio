import Image from "next/image"

const Bulb = () => {
  return (
    <div className="xl:visible  md:invisible absolute -left-36 -bottom-0 rotate-12 mix-blend-color-dodge animate-pulse duration-50 z-10 w-[200px] xl:w-[260px]">
        <Image  alt="bulb" src={'/assets/bulb.png'} width={260} height={200} className="w-full h-full hidden md:block"/>
    </div>
  )
}

export default Bulb