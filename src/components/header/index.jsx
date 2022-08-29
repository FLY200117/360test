import React, { memo, useState } from 'react'
import './index.css'

export default memo(function Header() {
    const titles = ['关注','发现','深圳']
    const [currentTitle, setCurrentTitle] = useState('关注')

  return (
    <div className='header-content'>
        <div className='top'>
            <div className='logo'></div>
            {
                titles.map((item,index) => {
                    return (
                        <div className="title" key={item} >
                            {item}
                        </div>
                    )
                })
            }
        </div>
        <div className='bottom'>
            <input type="text" placeholder='大家都在搜"妆容画廊"'/>
        </div>
    </div>
  )
})
