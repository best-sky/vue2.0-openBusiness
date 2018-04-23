//存取localStorage中的数据
export function save(key,value){
	localStorage.setItem(key,JSON.stringify(value));
}
export function fetch(key){
	return JSON.parse(localStorage.getItem(key))||"";
}