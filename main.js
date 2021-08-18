const url = 'http://127.0.0.1:8000/api/productos/'
// const url = 'http://127.0.0.1:8000/api/auth/productos/'

fetch(url)
// .then(response => response()
.then(res => 
console.log(res)
	// let element = document.getElementById('elem')
	// element.innerHTML = `
	// 	<p>${data}</p>
	// `
)
.then(data=>console.log(data))
.catch(err=>console.log(err))
