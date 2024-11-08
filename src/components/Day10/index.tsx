import React from 'react'
import Heading from '@components/Heading'
type Props = {}

const Day10 = (props: Props) => {
  return (
    <div>
      <Heading title='D10 - 周三：悉尼大学AI项目体验' />
      <ul>
        <li>
          <strong>上午：</strong>走进澳洲最知名的高等学府——<strong>悉尼大学</strong>，亲身体验一场沉浸式的<strong>AI Workshop</strong>。课堂将围绕前沿人工智能技术展开，学生不仅可以参与到实际项目中，还将与教授和导师探讨留学及海外AI领域的职业规划，帮助未来的学术与职业发展打下基础。
        </li>
        <li>
          <strong>中午：</strong>在悉尼大学食堂与本地学生共进午餐，深入交流，了解他们的学习和生活方式，体验真实的大学生活氛围。
        </li>
        <li>
          <strong>下午：</strong>参观<strong>悉尼大学纳米与量子实验室</strong>，近距离了解与微软合作研发的世界领先量子计算技术。这个全球顶尖的实验室将带你进入计算的未来，感受科技的无限可能。
        </li>
        <p style={{fontStyle: 'italic'}}> 注：参观量子实验室的安排将依科研活动而定，若有调整，可能由其他参观项目取代。</p>
      </ul>
    </div>
  )
}

export default Day10
