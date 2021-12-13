export function version (value: string, callback?: (verifyStatus: boolean, verifyLable?: string) => void): object {
  const VERSION_REG = /^\d{1,3}(\.\d{1,3}){2,3}$/;
  const verifyResult = {
    verifyStatus: true,
    verifyLabel: ''
  };
  
  if (!callback) {
    callback = () => {}
  }
  if(!VERSION_REG.test(value)){
    verifyResult.verifyStatus = false;
    verifyResult.verifyLabel = '版本格式错误';
    callback(false, '版本格式错误')
  } else {
    verifyResult.verifyStatus = true;
    callback(true)
  }
  return verifyResult;
};