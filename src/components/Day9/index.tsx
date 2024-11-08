import React from 'react'
import Heading from '@components/Heading'
type Props = {}

const Day9 = (props: Props) => {
  return (
    <div>
      <Heading title='D9 - 周二：悉尼科技与名校探访' />
      <ul>
        <li>
          <strong>上午：</strong>回到<strong>Sydney Polytechnic College</strong>，沉浸在智能机器人工作坊中，学习如何设计和操控机器人，探索未来科技的无限可能，提升你的科技动手能力。
        </li>
        <li>
          <strong>中午：</strong>前往悉尼美丽的<strong>Centennial Park</strong>，体验一次别具一格的澳洲野餐文化，享受自然中的悠闲时光。
        </li>
        <li>
          <strong>下午：</strong>在阳光下漫步于世界著名的<strong>Bondi海滩</strong>，沿着充满艺术气息的海滩艺术路线拍照打卡。随后参观<strong>新南威尔士大学（UNSW）</strong>，了解这座名校的独特魅力。
        </li>
      </ul>
    </div>
  )
}

export default Day9
