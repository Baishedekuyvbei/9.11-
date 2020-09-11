/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 白金鑫
 * @Date: 2020-09-11 09:03:34
 * @LastEditors: 白金鑫
 * @LastEditTime: 2020-09-11 09:17:12
 */
import Mock from 'mockjs'

const data = Mock.mock({
    'data|20':[{
        'name':'@cname(2,3)',
        'img':'@image(200x200,@color,@cname)',
        'look|100-200':1
    }]
})

Mock.mock('/api/list',{
    data
})