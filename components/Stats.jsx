"use client";
import { Item } from "@radix-ui/react-select";
import CountUp from "react-countup";

const stats=[
    {
        num:5,
        plus:'+',
        text:"Years of experience"
    },
    {
        num:12,
        plus:'+',
        text:"Projects completed"
    },
    {
        num:8,
        plus:'+',
        text:"Technologies mastered"
    },
    {
        num:100,
        plus:'+',
        text:"Satisfied Client"
    },
    
]

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
        <div className="container mx-auto">
            <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                {stats.map((item,index)=>{
                    return <div className="flex-1 flex gap-4 items-center xl:justify-start"
                     key={index}>
                        <CountUp 
                        end={item.num}                        
                        duration={5}
                        delay={2} 
                        suffix="+"
                        className="text-4xl xl:text-6xl font-extrabold text-accent"
                        />
                        
                        <p
                        className={'${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]" } leading-snug text-white/80 text-left capitalize font-semibold text-[18px] '} 
                        >
                            {item.text}
                        </p>

                    </div>

                })}
            </div>

        </div>
    </section>
  )
}

export default Stats