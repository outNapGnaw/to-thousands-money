export default function format(num) {
    const str = num + ''
    const strSplit = str.includes('.')?str.match(/(\S*)\.(\S*)$/):[str,str,'']
    const left = strSplit[1].replace(/([-+]?\d)(?=(\d{3})+(?!\d))/g,'$1,')
    const right = strSplit[2]
    return right === '' ? left : `${left}.${right}`
}
