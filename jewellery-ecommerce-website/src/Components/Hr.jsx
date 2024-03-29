import React from 'react'

const Hr = ({thickness,length}) => {
    
    const cn = thickness +" " + length+" bg-[#832729] mx-auto"
  return (<div className={cn}></div>)
}

export default Hr