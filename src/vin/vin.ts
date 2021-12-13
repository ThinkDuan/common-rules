export function vin(value: string, callback?: (verifyStatus: boolean, verifyLable?: string) => void): object {
  const verifyResult = {
    verifyStatus: true,
    verifyLabel: ''
  };

  if (!callback) {
    callback = () => {}
  }
  if(value.length !== 17){
    verifyResult.verifyStatus = false;
    verifyResult.verifyLabel = '车架号位数错误';
    callback(false, "车架号位数错误")
  } else if(value.indexOf('I') > -1 || value.indexOf('O') > -1 || value.indexOf('Q') > -1){
    verifyResult.verifyStatus = false;
    verifyResult.verifyLabel = '车架号校验错误';
    callback(false,"车架号校验错误")
  } else if(!checkCode(value)){
    verifyResult.verifyStatus = false;
    verifyResult.verifyLabel = '车架号校验错误';
    callback(false,"车架号校验错误")
  } else {
    verifyResult.verifyStatus = true;
    callback(true)
  }
  function checkCode(value: string){
    const factor = [8,7,6,5,4,3,2,10,0,9,8,7,6,5,4,3,2];
    const vinMap = {
      '0': 0,
      '1': 1,
      '2': 2,
      '3': 3,
      '4': 4,
      '5': 5,
      '6': 6,
      '7': 7,
      '8': 8,
      '9': 9,
      'A': 1,
      'B': 2,
      'C': 3,
      'D': 4,
      'E': 5,
      'F': 6,
      'G': 7,
      'H': 8,
      'J': 1,
      'K': 2,
      'L': 3,
      'M': 4,
      'N': 5,
      'P': 7,
      'R': 9,
      'S': 2,
      'T': 3,
      'U': 4,
      'V': 5,
      'W': 6,
      'X': 7,
      'Y': 8,
      'Z': 9
    };
    let valueList:Array<string> = [];
    let totalNumber = 0;
    let checkCode: string = '';
    let result: number;
    if(value){
      valueList = value.split('');
    }
    valueList.forEach((item,index) => {
      totalNumber += vinMap[item] * factor[index]
    });
    result = totalNumber%11;
    if(result === 10){
      checkCode = 'X'
    }
    if(checkCode === valueList[8]){
      return true;
    } else {
      return false;
    }
  }
  return verifyResult
};