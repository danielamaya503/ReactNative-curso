import { useCounter } from "../hooks/useCounter";

export const Counter = () => {

    //destructurar
    const {count, incrementar, decrementar} = useCounter();

  return (
    <>
    <h3 className="text-3xl">
        Contador: <small className="font-bold">{count}</small>
    </h3>

    <div>
        <button 
          className="p-2 bg-blue-500 rounded-xl w-10 mx-2 text-white hover:bg-blue-700"
          onClick={() => incrementar(+1)}
        >
            +1
        </button>

        <button 
          className="p-2 bg-blue-500 rounded-xl w-10 mx-2 text-white hover:bg-blue-700"
          onClick={() => decrementar(-1)}
        >
            -1
        </button>
    </div>

    </>
  )
}
