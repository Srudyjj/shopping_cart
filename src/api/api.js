import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3004/'
});

export default {
  get: (url, props) => instance.get(url, props),
  post: (url, props) => instance.post(url, props),
  put: (url, props) => instance.put(url, props),
  delete: (url, props) => instance.delete(url, props)
};

// fetch("/register", {
// 	method: "POST",
// 	credentials: 'include',
// 	body: JSON.stringify({
//   		email: "olivier@mail.com",
//   		password: "bestPassw0rd"
// 	}),
// 	headers: {
// 		'Content-Type': 'application/json'
// 	}
// }).then(res => res.json()).then(console.log)

// fetch('/orders', {
//   method: 'POST',
//   credentials: 'include',
//   headers: {
//     'Content-Type': 'application/json',
//     Authorization: 'Bearer <token>'
//   },
//   body: JSON.stringify(data)
// })
//   .then(res => res.json())
//   .then(console.log);

// axios.defaults.headers.common['Authorization'] =
//                                 'Bearer ' + localStorage.getItem('jwtToken');

// // Set config defaults when creating the instance
// const instance = axios.create({
//   baseURL: 'https://api.example.com'
// });

// // Alter defaults after instance has been created
// instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
