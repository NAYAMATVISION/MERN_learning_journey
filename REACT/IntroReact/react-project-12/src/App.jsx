import './App.css'
import { useForm } from "react-hook-form";

function App() {
  
  const {
    register, 
    handleSubmit,
    watch,
    formState: { errors , isSubmitting},
  } = useForm();

  return (
   <form onSubmit={handleSubmit(async (data) => {
     await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call
     console.log(data);
   })}>
    <div>
      <label>First Name</label>
      <input className={errors.firstName ? 'input-error' : '' }
      {...register("firstName", { required: true, minLength: 5 })} />
      {errors.firstName && <p className="error-message">First name is required and should be at least 5 characters</p>}
    </div>
    <div>
       <label>Middle Name</label>
      <input {...register("middleName")} />
    </div>
    <div>
      <label>Last Name</label>
      <input {...register("lastName")} />
    </div>
    <input type="submit" disabled={isSubmitting} value={isSubmitting ? "Submitting..." : "Submit"} />
   </form>
    )
}

export default App
