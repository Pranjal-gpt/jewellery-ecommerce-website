import React from 'react'

const Hr = ({thickness,length,color="bg-[#832729]"}) => {
    
    const cn = thickness +" " + length+" "+ color + " mx-auto"
  return (<div className={cn}></div>)
}

export default Hr