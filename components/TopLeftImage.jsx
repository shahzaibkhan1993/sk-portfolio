
import Image from 'next/image';


const TopLeftImage = () => {
  return (
    <div  className='xl:visible  md:invisible absolute  left-0 top-0  z-0 w-[200px]  xl:w-[250px] xl:h-[250px] opacity-20  rotate-[25deg]'>
        
        <Image className='hidden md:block'  src="/assets/topcornersplash.png" priority={true} width={400} height={400} alt='Top Corner Color Splash'/>

               
        
    </div>
    
  )
}

export default TopLeftImage