import Button from "../components/Button"

const Subscribe = () => {
  return (
    <section id="contact-us" className="max-container flex justify-between items-center max-lg: flex-col gap-10">
      <h3 className="text-4xl leading-[68px] l:max-w-md font-palanquin font-bold">
        Sign Up For More
        <span className="text-coral-red"> Updates </span>
        & Newsletter
      </h3>
      <form className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input name="email" type="email" placeholder="subscribe@nike.com" className="input" />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button 
            label="Sign Up"
            fullwidth
          />
        </div>
      </form>
    </section>
  )
}

export default Subscribe