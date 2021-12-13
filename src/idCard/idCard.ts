export function idCard (value: string, callback?: (verifyStatus: boolean, verifyLable?: string) => void): object {
  const idCardLength = value.length;
  const verifyResult = {
    verifyStatus: true,
    verifyLabel: ''
  };
  
  if (!callback) {
    callback = () => {}
  }
  if (idCardLength === 15) {
    if (!firstIdCard(value)) {
      verifyResult.verifyStatus = false;
      verifyResult.verifyLabel = '身份证校验错误';
      callback(false, "身份证校验错误");
    } else {
      verifyResult.verifyStatus = true;
      callback(true);
    }
  } else if (idCardLength === 18) {
    if (!secondIdCard(value)) {
      verifyResult.verifyStatus = false;
      verifyResult.verifyLabel = '身份证校验错误';
      callback(false, "身份证校验错误");
    } else {
      verifyResult.verifyStatus = true;
      callback(true);
    }
  } else {
    verifyResult.verifyStatus = false;
    verifyResult.verifyLabel = '身份证位数错误';
    callback(false, "身份证位数错误");
  }

  function firstIdCard(idCard: string): boolean {
    const ID_CARD15_REG = /^[1-9]\d{7}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}$/;
    if(ID_CARD15_REG.test(idCard)){
      return true;
    }
    return false;
  };
  function secondIdCard(idCard: string): boolean {
    const ID_CARD18_REG = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9X]$/;
    const CITY_CODE_LIST = ["11", "12", "13", "14", "15", "21", "22","23", "31", "32", "33", "34", "35", "36", "37", "41", "42", "43","44", "45", "46", "50", "51", "52", "53", "54", "61", "62", "63","64", "65", "71", "81", "82", "91" ];
    const cityCode = idCard.substring(0,2);
    const birthDate = idCard.substring(6,14);
    if(!ID_CARD18_REG.test(value)){
      return false;
    }
    if(!(CITY_CODE_LIST.indexOf(cityCode) >= 0)){
      return false;
    }
    if(!checkDate(birthDate)){
      return false;
    }
    if(!checkCode(idCard)){
      return false;
    }
    return true;
  };
  function checkDate(value: string){
    let reg = /^(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)$/;
    if(reg.test(value)){
      let year = value.substring(0, 4);
      let month = value.substring(4, 6);
      let date = value.substring(6, 8);
      let date2 = new Date(year+"-" + month+"-" + date);
      if(date2 && date2.getMonth() == (parseInt(month) - 1)) {
          return true;
      }
    }
    return false;
  };
  function checkCode(idCard: string){
    const factor = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ];
    const parity = [ 1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2 ];
    const code = idCard.substring(17);
    let sum = 0;
    for (let i=0; i<17; i++) {
      sum += parseInt(idCard[i]) * factor[i];
    }
    if(parity[sum % 11] == code.toUpperCase()) {
      return true;
    }
    return false;
  }
  return verifyResult;
};