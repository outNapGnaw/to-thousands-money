export default function format(num) {
    const str = num + ''
    return str.replace(/([-+]?[^\.]\d)(?=(\d{3})+(?!\d))/g,'$1,')
}
