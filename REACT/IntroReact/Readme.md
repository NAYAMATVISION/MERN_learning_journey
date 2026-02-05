npm create vite@latest
cd react_project
npm install
npm run dev

jsx(javascript xml) = html inside java script

One way data binding = data is transfered only from parent to child

State management = usestate = state allows updates without refreshing the page

Components are reusable, independent code blocks (A function or a class) that define the structure and behavior of the UI. 
They accept inputs (props or properties) and return elements that describe what should appear on the screen.

State refers to an object that holds information about a component's current situation.
 This information can change over time, typically as a result of user actions or data fetching,
 and when state changes, React re-renders the component to reflect the updated UI.

Props
Props (short for "properties") are used to pass information from one component to another. 
The main purpose of props is to allow a parent component to send data to its child components.

Rendering a component 
 It refers to displaying it on the browser.
 Ensure the component is imported before rendering.



Hooks are functions that let you use state and other React features in functional components which were previously
 only available in class components.
Hooks help to use the utilitites provided by react itself
Hooks start with the prefix 'use' 
const [count, setCount] = useState(0);
count is variable
setCount is function 

section 4 = Passing Props as children and function

Section 5 = State lifting = accessing parent properties from children and vice versa

Even though it feels like data is moving upward, it’s still one-way:
 1. The state lives in the parent.
 2. The child doesn’t actually modify it — it just calls the parent’s function.
 3. The parent updates the state → React re-renders → new data flows down again.
So, React never breaks one-way data flow; it just uses callbacks to let children “communicate” upward.

Section 6 = Conditional Rendering

Section 8 = Event handler

Section 8 = Use Effect

useEffect( ()=>{
    first       // side effect logic

    return ()=>{
        second  // cleanup function
    }, [third]  // comma separated dependancy list
})
variation 1  runs on every render
useEffect(()=>{

})

variation 2 runs on only 1st render
useEffect(()=>{

},[])

variation 3 runs everytime when count is updated

useEffect(()=>{

},[count])

variation 4 use effect will run everytime when count or total is updated

useEffect(()=>{

},[count, total])

Variation 5 cleanup function is added

useEffect(()=>{
    alert("count is updated")

    return ()=>{
        alert("count is unmounted from UI")
    }
}, [count])

Section 9 useContext 
Without useContext, we have to pass props down many levels, even through components that don’t use it —
this is called prop drilling

Section 10 About Routing hooks

**********npm install react-router-dom*********

react-router-dom is a library used for routing in React applications — it allows you to create multi-page behavior 
in a single-page application (SPA).

It looks at the current URL path and decides which component to show on the screen.

Link = It changes the URL and renders the new component without refreshing the page.

Navlink = <NavLink> is just like <Link>, but with extra features for styling active links.
    <NavLink 
        to="/about" 
        className={({ isActive }) => (isActive ? "active-link" : "")}
    >
        About
    </NavLink>

useParams = to route with id
useNavigation = to dynamically link two components
Nested Routing = use [createBrowserRouting] in parent component use <Outlet/> to render child components without refereshing the page

Section 11 React Hook Form

useForm() creates a form context.

register("fieldName") tells RHF to track this input’s value and validation state.

handleSubmit(onSubmit) automatically prevents default submit and passes validated data to your callback.

errors object stores all failed validations (e.g., { username: { type: "required" } }).

import React from "react";
import { useForm } from "react-hook-form";

function SignupForm() {
  // useForm gives you helper functions and objects
  const {
    register,        // Connects input fields to the form
    handleSubmit,    // Handles form submission
    formState: { errors,isSubmitting  }  // Contains validation errors , //Prevents multiple submissions & Shows loading state
  } = useForm();

  // When form is submitted
  const onSubmit = (data) => {
    console.log(data); // All field values
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Register input fields */}
      <input 
      {...register
      ("username", 
      { required: true ,
        minlength:{value:3, message:"min length should be 3"}
      }
      )
      } placeholder="Username" />
      {errors.username && <p>errors.username.message</p>}

      <input {...register("email", { required: true, pattern: /^\S+@\S+$/i })} placeholder="Email" />
      {errors.email && <p>Enter a valid email</p>}

      <input type="password" {...register("password", { minLength: 6 })} placeholder="Password" />
      {errors.password && <p>Password must be at least 6 characters</p>}

    <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit"}
    </button>

    </form>
  );
}

export default SignupForm;

Section 12 useRef
helps to persist or save the value despite re rendering
B usecase
so that we can change any element of DOM directly from there
e.g we have a button we want that we can change color of it by any other button then we will use useref hook 
instead of 
slecting that button using query selector , DOM

Section 13 useMemo
The useMemo Hook is a built-in React Hook that helps optimize performance by memoizing the result of a computation
and reusing it unless its dependencies change. This prevents expensive computations from being re-executed 
unnecessarily during component re-renders.

Syntax
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

The first argument is a function that returns the computed value.
The second argument is an array of dependencies. When any of these dependencies change, the function gets
re-evaluated.

Section 14 useCallback
helps in un-necessary function recreation or rerendering with different reference


