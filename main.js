// 处理两位数
function dealTime(num){
	return num>9? num+'':'0'+num
}

function getTime () {
	let now=new Date()
	let h=now.getHours(),m=now.getMinutes(),s=now.getSeconds()
	let text=h>12? 'pm':'am'
	// 替换内容 两位数处理
	h=dealTime(h)
	m=dealTime(m)
	s=dealTime(s)
	
	let result=h+':'+m+':'+s+' '+text
	document.getElementById('getTime').innerText=result
	// 1s返回
	setTimeout(getTime,1000)
}
window.addEventListener('load',getTime)
// 监听事件

