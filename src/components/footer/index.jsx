import React, { memo } from 'react'
import './index.css'

export default memo(function footer() {
  const bottomList = ['首页','商场','+','消息','我']
  return (
    <div className='footer'>
      {
        bottomList.map((item) => {
          return (
            <div className={item} key={item}>
              {item}
            </div>
          )
        })
      }
    </div>
  )
})
