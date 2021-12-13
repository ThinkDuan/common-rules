export function number (value: string, callback?:(verifyStatus: boolean, verifyLable?: string) => void): object {
  let verifyResult = {
    verifyStatus: true,
    verifyLabel: ''
  };

  if (!callback) {
    callback = () => {}
  }
  const NUMBER_REG = /^[0-9]*$/;
  if(!NUMBER_REG.test(value)){
    verifyResult.verifyStatus = false;
    verifyResult.verifyLabel = '请输入数字类型';
    callback(false, '请输入数字类型');
  } else {
    callback(true);
  }
  return verifyResult
};
export function numberDecimal (value: string, callback?:(verifyStatus: boolean, verifyLable?: string) => void): object {
  const verifyResult = {
    verifyStatus: true,
    verifyLabel: ''
  };

  if (!callback) {
    callback = () => {}
  }
  const NUMBER_DECIMAL_REG = /^[0-9\.]*$/;
  let stringValue = ''
  if(typeof value === 'number'){
    stringValue = value + ''
  }
  if(!NUMBER_DECIMAL_REG.test(stringValue)){
    verifyResult.verifyStatus = false;
    verifyResult.verifyLabel = '请输入正确的小数类型';
    callback(false,'请输入正确的小数类型');
  } else if(value.indexOf('.') === 0){
    verifyResult.verifyStatus = false;
    verifyResult.verifyLabel = '请输入正确的小数类型';
    callback(false,'请输入正确的小数类型');
  } else if(value.split('.').length > 2){
    verifyResult.verifyStatus = false;
    verifyResult.verifyLabel = '请输入正确的小数类型';
    callback(false,'请输入正确的小数类型');
  } else {
    callback(true);
  }
  return verifyResult
};