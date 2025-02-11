import React from "react"

const Layout = ({children,ClassName}:{children?:React.ReactNode,ClassName?:string}) => {
  return (
    <div className={ClassName}>{children}</div>
  )
}

export default Layout