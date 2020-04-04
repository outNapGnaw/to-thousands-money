export default function format(num) {
    const str = num + ''
    const reg = /([-+]?\d)(?=(\d{3})+(?!\d))/g
    return str.replace(/^([-+]?\d+)((\.\d+)?)$/g, function(s,s1,s2){
      return s1.replace(reg,'$1,') + s2
    })
}
