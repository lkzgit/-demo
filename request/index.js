
//表示把这个函数导出去

export const request=(params)=>{
  return new Promise((resolve,reject)=>{
    wx.request({
     ...params,
     success:(result)=>{
        resolve(result);
     },
     fail:(err)=>{
       reject(err);
     }
    })
  })
}