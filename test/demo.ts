import { chinessName } from '../src/index'
const result = chinessName('张三')
const resultTwo = chinessName('张三123', function (verifyStatus, label) {
  if (!verifyStatus) {
    console.log('label', label)
  }
})
console.log('chinessName test', result, resultTwo)