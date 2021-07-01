const baseURL = "public/imgs"

const getImageUrl = name => `${baseURL}/${name}.png`
const getSvgUrl = name =>  `${baseURL}/${name}.svg`

export {
    getImageUrl,
    getSvgUrl
}
