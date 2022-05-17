import React from "react"
import NavigationMenu from "widgets/sections/NavigationMenu"
import HeaderLayout from "layouts/HeaderLayout"
import ContentLayout from "layouts/ContentLayout"

const PageLayout = ({ children }) => {
  return (
    <div>
      <HeaderLayout>
        <NavigationMenu />
      </HeaderLayout>
      <ContentLayout>{children}</ContentLayout>
    </div>
  )
}

export default PageLayout
