let businessLicence = (value,callback) => {
  let reg = /[IOZSV]/;
  if(typeof value === 'number'){
    value += '';
  }
  if(value.length !== 15 && value.length !== 18){
    callback(false, '营业执照号码位数错误')
  } else if(reg.test(value)){
    callback(false, '营业执照号码错误')
  } else {
    if(value.length === 15){
      let regNum = /^[0-9A-Z]{15}$/;
      if(!regNum.test(value)){
        callback(false, '营业执照号码错误')
      } else if(!check15(value)){
        callback(false, '营业执照号码错误')
      } else {
         callback(true);
      }
    } else if(value.length === 18){
      let regNum = /^[0-9A-Z]{18}$/;
      if(!regNum.test(value)){
        callback(false, '营业执照号码错误')
      } else if(!check18(value)){
        callback(false, '营业执照号码错误')
      } else {
         callback(true);
      }
    }
  }
  function check15(value){
   let valList = value.substring(0,14).split('');
   let result = 10;
   let tmp = void 0;
   valList.forEach((item,index) => {

     item = parseInt(item);
     tmp = (item + result)%10
     if(tmp === 0){
       tmp = 10
     }
     result = (tmp*2)%11;
   })
   if(!((result + parseInt(value.substring(14)))%10 === 1)){
     return false;
   } else {
     return true;
   }
  };
  function check18(value){
    let parity = [1,3,9,27,19,26,16,17,20,29,25,13,8,24,10,30,28];
    let resultList = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','J','K','L','M','N','P','Q','R','T','U','W','X','Y'];
    var keyMap = {
      A: 10,
      B: 11,
      C: 12,
      D: 13,
      E: 14,
      F: 15,
      G: 16,
      H: 17,
      J: 18,
      K: 19,
      L: 20,
      M: 21,
      N: 22,
      P: 23,
      Q: 24,
      R: 25,
      T: 26,
      U: 27,
      W: 28,
      X: 29,
      Y: 30
    }
    if(typeof value === 'string'){
      let valList = value.substring(0,17).split('');
      let total = 0;
      let result = 0;
      valList.forEach((item,index) => {
        if (!/[A-Z]/.test(item)) {
          total += item*parity[index];
        } else {
          total += keyMap[item]*parity[index];
        }
      });
      result = 31 - total % 31;
      if (result === 31) result = 0
      /*eslint-disable*/
      if (value.substring(17) == resultList[result]) {
        return true;
      } else {
        return false;
      }
    } else {
      return false
    }
  };
};

export default businessLicence