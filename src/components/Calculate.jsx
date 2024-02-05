import Step2 from "./Step2";


export default function Calculate() {

  return (
    <div>
      <Step2 />
      <div className="my-10 p-10 bg-white border border-gray-400 w-2/6 m-auto rounded-md">
        <form action="">
          Population Size :
          <input className="my-3 ml-5" type="number" name="POPULATION_SIZE" />
          <br />
          Max Generation :
          <input className="my-3 ml-5" type="number" name="MAX_GENERATIONS" />
          <br />
          Mutation Rate :
          <input className="my-3 ml-7" type="number" name="MUTATION_RATE" />
          <br />
          <input
            type="submit"
            value="เริ่มการคำนวณ 🔣"
            className="text-white bg-green-600 rounded-md p-3 ml-3 mr-20 mt-8"
          />
        </form>
      </div>
    </div>
  );
}
