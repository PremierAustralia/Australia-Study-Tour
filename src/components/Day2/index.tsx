import React from 'react'
import Heading from '@components/Heading'
type Props = {}

const Day2 = (props: Props) => {
  return (
    <div>
      <Heading title='D2 - 周二：黄金海岸自然探秘' />
      <ul>
        <li>
          <strong>上午：</strong>前往Currumbin动物园，亲密接触澳洲特有的野生动物，喂袋鼠、抱考拉，还可以与五彩斑斓的鹦鹉互动，乘坐游园小火车穿越园区。
        </li>
        <li>
          <strong>下午：</strong>游览冲浪者天堂（Surfers Paradise），享受海滩的阳光和海浪，体验世界著名的冲浪圣地。
        </li>
        <li>
          <strong>住宿：</strong>寄宿家庭或酒店
        </li>
      </ul>
    </div>
  )
}

export default Day2