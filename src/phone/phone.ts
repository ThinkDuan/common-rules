export function phone (value: string, callback?: (verifyStatus: boolean, verifyLable?: string) => void): object {
  const verifyResult = {
    verifyStatus: true,
    verifyLabel: ''
  };

  if (!callback) {
    callback = () => {}
  }
  const PHONE_REG = /^(([0\+]\d{2,3}-)?(0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$/;
  const CELL_PHONE_REG = /^[1][3456789][0-9]{9}$/;
  if(!PHONE_REG.test(value) && !CELL_PHONE_REG.test(value)){
    verifyResult.verifyStatus = false;
    verifyResult.verifyLabel = '电话或手机号码格式错误';
    callback(false,'电话或手机号码格式错误')
  } else {
    verifyResult.verifyStatus = true;
    callback(true);
  }
  return verifyResult;
};
export function cellPhone (value: string, callback?: (verifyStatus: boolean, verifyLable?: string) => void): object {
  const verifyResult = {
    verifyStatus: true,
    verifyLabel: ''
  };
  if (!callback) {
    callback = () => {}
  }
  const CELL_PHONE_REG = /^[1][3456789][0-9]{9}$/;
  if(!CELL_PHONE_REG.test(value)){
    verifyResult.verifyStatus = false;
    verifyResult.verifyLabel = '手机号码格式错误';
    callback(false,'手机号码格式错误')
  } else {
    verifyResult.verifyStatus = true;
     callback(true);
  }
  return verifyResult;
};
export function telephone (value: string, callback?: (verifyStatus: boolean, verifyLable?: string) => void): object {
  const verifyResult = {
    verifyStatus: true,
    verifyLabel: ''
  };
  if (!callback) {
    callback = () => {}
  }
  const PHONE_REG = /^(([0\+]\d{2,3}-)?(0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$/;
  if(!PHONE_REG.test(value)){
    verifyResult.verifyStatus = false;
    verifyResult.verifyLabel = '电话式错误';
    callback(false,'电话式错误')
  } else {
    verifyResult.verifyStatus = true;
    callback(true);
  }
  return verifyResult;
};