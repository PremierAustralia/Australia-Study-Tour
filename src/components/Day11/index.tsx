import React from 'react'
import Heading from '@components/Heading'
type Props = {}

const Day11 = (props: Props) => {
  return (
    <div>
      <Heading title='D11 - 周四：AI竞赛与悉尼大学学生交流' />
      <ul>
        <li>
          <strong>上午：</strong>在<strong>悉尼大学</strong>继续进行AI课程学习，并与当地学生展开深度的互动交流。了解他们的学习与生活方式，分享不同文化背景下的成长故事，拓展国际视野并建立珍贵的友谊。
        </li>
        <li>
          <strong>中午：</strong>再次在悉尼大学食堂与本地学生共进午餐，进一步加强文化互动，体验国际化的校园生活。
        </li>
        <li>
          <strong>下午：</strong>学生们享受完下午茶后，将展示他们开发的实时翻译器，通过与老师和同学的互动演示翻译器的实际应用功能，接着在AI作品竞赛中，学生们将通过1对1面试的方式与本地老师交流，讨论对AI技术的理解及翻译器的开发过程，每天的Quiz环节也将测试他们的翻译器在真实环境中的使用效果，最后进行竞赛的评选与颁奖，并总结悉尼活动中的收获与反思。
        </li>
        <li>
          <strong>晚餐：</strong>在<strong>Nandos</strong>享用澳洲特色美食，享受一个充满欢笑与成就感的夜晚。
        </li>
      </ul>
    </div>
  )
}

export default Day11
