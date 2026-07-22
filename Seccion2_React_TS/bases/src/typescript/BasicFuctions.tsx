const addTwoNumbers = (a: number, b?: number): number => {
    return a + (b ? b : 0)
}

export const BasicFuctions = () => {
    

  return (
    <>
      <h1 className="text-3xl font-bold underline">Basic Functions</h1>
      <p>This is a simple functional component.</p>

      <span> Resultado de fuction 5 + 3 = {addTwoNumbers(5, 3)} </span>
    </>
  )
}
