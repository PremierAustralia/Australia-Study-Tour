import React from 'react'
import brisbaneCityCenter from '@assets/Day1/brisbane-city-center.jpg'
import brisbaneCityMuseum from '@assets/Day1/brisbane-city-museum.jpg'
import Heading from '@components/Heading'
type Props = {}

function Day1({}: Props) {
  return (
    
      <div className='m-8 p-4 flex'>
        <Heading title='D1 - 周一：布里斯班探索之旅' />
        <ul>
          <li>
            <strong>上午</strong>：抵达布里斯班，开启探索澳洲的第一站。参观布里斯班博物馆，了解澳洲的历史和文化背景。随后，漫步Southbank（南岸公园），体验布里斯班的自然与都市风光。
          </li>
          <li>
            <strong>下午</strong>：布里斯班市区游览，感受这座城市的现代与自然结合，领略澳洲独特的城市氛围。
          </li>
          <li>
            <strong>住宿</strong>：寄宿家庭或酒店（全程精心挑选，让你感受澳洲家庭的温暖与文化）
          </li>
        </ul>
        <div>
          <img src={brisbaneCityCenter} alt="布里斯班市中心" />
          <img src={brisbaneCityMuseum} alt="布里斯班城市博物馆" />
        </div>

    </div>
  )
}

export default Day1