const cloud = require('wx-server-sdk')
cloud.init()
exports.main = async (event, context) => {
  try {
    const result = await cloud.openapi.wxacode.getUnlimited({
        scene: 'a=1',
        auto_color: true,
        is_hyaline: true
      })
    return result
  } catch (err) {
    return err
  }
}