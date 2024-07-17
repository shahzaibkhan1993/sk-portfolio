"use client";

import { Sheet, SheetContent,SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {CiMenuFries} from "react-icons/ci"


const links=[
  {
      name:"home",
      path:"/"
  },
  {
      name:"services",
      path:"/services"
  },
  {
      name:"resume",
      path:"/resume"
  },
  {
      name:"work",
      path:"/work"
  },
  {
      name:"contact",
      path:"/contact"
  },
];

const MobileNav = () => {
const pathname = usePathname(); 
  return (
    <Sheet className="bg-primary">
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col" >
        {/* logo */}
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
          <h1 className="text-4xl font-semibold">SHAHZEB KHAN<span className="text-accent" >.</span></h1>
          </Link>
          
          </div>
        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link,index)=>{
            return <Link href={link.path}key={index} className={`text-xl capitalize  transition-all ${link.path === pathname ? 'text-accent border-b-2 border-accent' : ''} hover:text-accent hover:border-b-2 hover:border-accent`}>{link.name}</Link>
          })}
        </nav>
      </SheetContent>
    </Sheet>
  )}

export default MobileNav