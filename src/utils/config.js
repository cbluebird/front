/** 公共配置 */

// 服务器地址
export const baseApi = "http://47.98.62.67:7070";

/** 图片路径处理 */
export function handleImgUri(imgUrl){
    return this.baseApi + "/" + imgUrl;
}