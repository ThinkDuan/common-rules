export function email (value: string, callback?: (verifyStatus: boolean, verifyLable?: string) => void): object {
  const EMAIL_REG = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+(\.([a-zA-Z]{2,6}))+$/;
  const verifyResult = {
    verifyStatus: true,
    verifyLabel: ''
  };
  
  if (!callback) {
    callback = () => {}
  }
  if(!EMAIL_REG.test(value)){
    verifyResult.verifyStatus = false;
    verifyResult.verifyLabel = '邮箱格式错误';
    callback(false, '邮箱格式错误')
  } else {
    verifyResult.verifyStatus = true;
    callback(true)
  }
  return verifyResult;
};