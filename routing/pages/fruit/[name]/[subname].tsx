import {useRouter} from 'next/router';

export default function(){

	const router = useRouter();

	const takeMeHome = () => {
		router.replace('/')
	}

	return(
		<>
			<h1>Dynamic routing Sub routing</h1>
			<button onClick={takeMeHome}>Home</button>
		</>
	)
}