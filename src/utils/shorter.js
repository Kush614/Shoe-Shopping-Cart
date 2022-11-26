export const descriptionShort = (str) => {
    return str.split(' ').splice(0, 5).join(' ')+"..."
}