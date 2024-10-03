import React from 'react'
import { BookSquare } from 'iconsax-react'

import Typography from './Typography'
const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <BookSquare
        size="40"
        // color={tailwindConfig.theme.extend.colors.primary[500]}
        variant="Bold"
      />
      <Typography tag="h1" type={'@32'} weight={'semibold'}>
        Nuegas
      </Typography>
    </div>
  )
}
export default Logo
