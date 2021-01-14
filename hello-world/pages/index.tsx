import {useState} from 'react'
import jwt from 'jsonwebtoken';

// Styled-JSX
export default function Home() {

	const [username, setUsername] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const [message, setMessage] = useState<string>('You are not logged in');

	const submitForm = async () => {
		const res = await fetch('/api/login', {
			method: 'POST',
			headers : {
				'content-type' : 'application/json'
			},
			body: JSON.stringify({username,password})
		}).then((t) => t.json())

		const token = res.token;
		console.log(token)

		if(token) {
			const json = jwt.decode(token) as {[key: string]: string};
			setMessage('Welcome ' + json.username + ` and you are ${json.admin ? 'an admin' : 'not an admin' }`)
		} else{
			setMessage('Something went wrong!');
		}

	}

	return (
		<div>
			<h1>{message}</h1>
			<form>
				<input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
				<br/>
				<input type="password"name="password"  value={password} onChange={(e) => setPassword(e.target.value)}/>
				<br/>
				<input type="button" value="Login" onClick={submitForm}/>
			</form>
		</div>
	)
}
