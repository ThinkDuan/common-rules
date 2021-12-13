export function chinessName (value: string, callback?: (verifyStatus: boolean, verifyLable?: string) => void): object {
  const CHINESS_NAME_REG = /^[\u4e00-\u9fa5\·]+$/;
  const verifyResult = {
    verifyStatus: true,
    verifyLabel: ''
  };
  
  if (!callback) {
    callback = () => {}
  }
  if(!CHINESS_NAME_REG.test(value)){
    verifyResult.verifyStatus = false;
    verifyResult.verifyLabel = '请输入正确的姓名';
    callback(false,'请输入正确的姓名')
  }else if(value.substring(0,1) === '·' || value.substring(value.length - 1) === '·'){
    verifyResult.verifyStatus = false;
    verifyResult.verifyLabel = '请输入正确的姓名';
    callback(false,'请输入正确的姓名')
  } else if(value.length > 20){
    verifyResult.verifyStatus = false;
    verifyResult.verifyLabel = '姓名长度不能大于20个字符';
    callback(false,'姓名长度不能大于20个字符')
  } else {
    verifyResult.verifyStatus = true;
    callback(true);
  }
  return verifyResult;
};