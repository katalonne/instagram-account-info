const request = require('then-request')

const isBrowser = typeof window != 'undefined'

/**
 * 
 * @param {String} username
 */
const getInfo = (username) => {
  return new Promise( (resolve, reject) => {
    const accountLink = `https://instagram.com/${username}`
    request('GET', accountLink).done(res => {
      const statusOK = String(res.statusCode)[0] === '2'
      if (statusOK) {
        // Regex Patterns
        const contentRE = /"([^"]*)"/gi
        const descriptionRE = /<meta.*content="(.*)".*name="description".*\/>/gi
        const imageRE = /<meta.*property="og:image".*content="(.*)".*\/>/gi
        const isPrivateRE = /(?:"is_private":?"?)(.*?)[?:,]/gi
        const isVerifiedRE = /(?:"is_verified":?"?)(.*?)[?:,]/gi
        const body = isBrowser ? res.getBody() : res.getBody().toString()

        if (!body.match(descriptionRE)[0]) return reject(`Can't find description metatag`)

        const [metatag] = body.match(descriptionRE)
        const [content] = metatag.match(contentRE)
        const [profileImageTag] = body.match(imageRE)
        
        const splittedContent = content.split(',')
        
        const profileImage = profileImageTag.match(contentRE)[1].slice(1, -1)
        const followers = parseInt(splittedContent[0].split(' ')[0].slice(1))
        const following = parseInt(splittedContent[1].split(' ')[1])
        const posts = parseInt(splittedContent[2].split(' ')[1])
        const isPrivate = body.match(isPrivateRE)[0].split(':')[1].slice(0, -1) === 'true'
        const isVerified = body.match(isVerifiedRE)[0].split(':')[1].slice(0, -1) === 'true'

        const infoObject = {
          followers,
          following,
          posts,
          isPrivate,
          isVerified,
          profileImage
        }
        return resolve(infoObject)
      } else {
        return reject(`Username '${username}' - doesn't exist`)
      }
    })
  })
}

module.exports = getInfo;

// Allow use of default import syntax in TypeScript
module.exports.default = getInfo;