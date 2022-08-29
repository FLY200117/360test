import React, { memo, useEffect, useRef, useState } from 'react'
import './index.css'
import BScroll from '@better-scroll/core'
import Pullup from '@better-scroll/pull-up'
import ObserveDOM from '@better-scroll/observe-dom'
import ObserveImage from '@better-scroll/observe-image'
BScroll.use(Pullup)
BScroll.use(ObserveDOM)
BScroll.use(ObserveImage)

export default memo(function content() {
  const [LImgList,setLImgList] = useState([
    'https://via.placeholder.com/172x230/0000ff.png/fff',
    'https://via.placeholder.com/172x170/ff0000.png/fff',
    'https://via.placeholder.com/172x200/ffff00.png/fff'
  ])

  const [RImgList,setRImgList] = useState([
    'https://via.placeholder.com/172x200/ffff00.png/fff',
    'https://via.placeholder.com/172x150/0000ff.png/fff',
    'https://via.placeholder.com/172x230/ff0000.png/fff',
  ])

  const topList = ['推荐','视频','直播','职场','穿搭']

  useEffect(() => {
    let wrapper = document.querySelector('.wrapper')
    let scroll = new BScroll(wrapper,{
        click: true,
        pullUpLoad: true,
        observeDOM: true,
        observeImage: true
    })
    scroll.on('pullingUp',async () => {
      await loadingMore()
      scroll.finishPullUp()
      scroll.refresh()
    })
  },[LImgList,RImgList])

  const loadingMore = async() => {
    await ajaxGet()
    let larr = ImgAndText(3)
    let rarr = ImgAndText(3)
    setLImgList([...LImgList,...larr])
    setRImgList([...RImgList,...rarr])
  }

  const ajaxGet  = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve()
      }, 1000)
    })
  }

  const ImgAndText = (n) => {
    const BaseURL = 'https://via.placeholder.com/172x'
    const Imgbgc = ['0000ff','ff0000','ffff00','fff000']
    const arr = []
    for(let i=0;i<n;i++) {
      let rand = RandowNum(0,2)
      let width = RandowNum(170,230)
      let str = BaseURL + width + '/' + Imgbgc[rand] + '.png/fff'
      arr.push(str)
    }
    return arr
  }

  const RandowNum = (startNum,endNum) => {
    let choice = endNum - startNum + 1;
    return Math.floor(Math.random() * choice + startNum)
  }

  return (
    <div>
      <div className='contenttopwrapper'>
        <div className='contenttop'>
          { 
            topList.map((item) => {
              return (
                <div key={item}>{item}</div>
              )
            })
          }
        </div>
      </div>
      <div className='wrapper'>
        <div className='maincontent content'>
            <div className='leftcontent'>
              {
                LImgList.map((item,index) => {
                  return (
                    <div key={index}>
                      <img src={item} alt="" />
                      <div className='notecontent'>内容标题</div>
                      <div className='noteinfo'>内容信息</div>
                    </div>
                  )
                })
              }
            </div>
            <div className='rightcontent'>
              {
                RImgList.map((item,index) => {
                  return (
                    <div key={index}>
                      <img src={item} alt="" />
                      <div className='notecontent'>内容标题</div>
                      <div className='noteinfo'>内容信息</div>
                    </div>
                  )
                })
              }
            </div>
        </div>
      </div>
    </div>
  )
})
