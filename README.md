# Next.js
- Server side rendering of react code

## Setup
```
npx create-next-app hello-world
```

## Directory structure
- Public folder
Anything within this folder is accessible to the outside world through the domain

- Pages
	- Where the source code is present

- Styling within a component is limited to within that component

## api folder
Each function must return some value and cannot return a jsx component. This behaves like express in Node

## useRouter

```
import {useRouter} from 'next/router';
const router = useRouter();
```

### Push
This makes the back button go back to the page it came from
```
router.push('/')
```

### replace
The new page replaces the current page, hence the back button will not take you to the previous page
```
router.replace('/')
```

## Catch all routes
```
[...name].jsx
```
- The file with the about name will catch all the routes, except the base route.
- To catch the base route:
```
[[...name]].jsx
```

## Custom 404 Page
Add a **404.tsx** page in the root of pages directory.



<hr/>

## Resources
- https://www.youtube.com/watch?v=tt3PUvhOVzo
- 