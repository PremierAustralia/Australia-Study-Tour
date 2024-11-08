import React from 'react'
import Heading from '@components/Heading'

type Props = {}

const Day5 = (props: Props) => {
  return (
    <div>
      <Heading title='D5 - 周五：布里斯班的自然与文化探索' />
      <ul>
        <li>
          <strong>上午：</strong>昆士兰大学宣讲会，深入了解世界顶尖大学的申请流程、学术资源和校园生活。
        </li>
        <li>
          <strong>下午：</strong>登上布里斯班的最高点Mount Coot-tha，俯瞰全城。随后前往袋鼠角(Kangaroo Point)和Story Bridge，感受布里斯班的城市美景与自然风光。
        </li>
        <li>
          <strong>住宿：</strong>寄宿家庭或酒店
        </li>
      </ul>
    </div>
  )
}

export default Day5
