import crypto from 'crypto'
function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

export function formatTime (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}
/*
*签名认证 约定参数1B
*appId 用户身份标识
*timer 13位的时间戳
*
* */
export function EncryptedSignature(appId,timer){
  const md5 = crypto.createHash('md5'); 
  const str =`${appId}${timer}1B`
  return md5.update(str).digest('hex').toLowerCase();
}

export default {
  formatNumber,
  formatTime,
  EncryptedSignature
}
