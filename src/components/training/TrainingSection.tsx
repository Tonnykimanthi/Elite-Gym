import FreeTrial from "./FreeTrial"

const TrainingSection = () => {
  return (
    <section className="p-8 pt-10 grid grid-cols-3 grid-rows-2 gap-5 border">
        <div>
            <h2 className="uppecase text-5xl font-bold">Personal Training</h2>
        </div>
        <FreeTrial />
        <div className="row-span-2 border">
            <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1546749876-2088f8b19e09?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3ltJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D" alt="A lady training in the gym" />
        </div>
    </section>
  )
}

export default TrainingSection