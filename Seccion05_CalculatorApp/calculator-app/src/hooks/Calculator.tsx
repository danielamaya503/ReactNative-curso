import { useEffect, useRef, useState } from "react";

enum Operator {
  sumar = "+",
  restar = "-",
  multiplicar = "*",
  dividir = "/",
}

export const useCalculator = () => {
  //ESTADOS: fórmula visible, número actual y número previo

  //Formula visible en la pantalla
  const [formula, setFormula] = useState("0");

  //Numero actual que se está escribiendo
  const [number, setNumber] = useState("0");

  //Numero previo que se usará para la operación
  const [prevNumber, setPrevNumber] = useState("0");

  // - REFERENCIA: guarda el último operador seleccionado
  // es un objeto mutable que persiste durante todo el ciclo de vida del componente
  //lo usaremos para saber qué operación realizar cuando el usuario
  // presione el botón de igual
  const lastOperator = useRef<Operator>(undefined);

  useEffect(() => {
    const subResultado = calcularSubResultado();
    setPrevNumber(`${subResultado}`);
  }, [formula]);

  useEffect(() => {
    if (lastOperator.current) {
      const formulaPart = formula.split(" ").at(0);
      setFormula(`${formulaPart} ${lastOperator.current} ${number}`);
    } else {
      setFormula(number);
    }
  }, [number]);

  const buildNumber = (numberString: string) => {
    //evita agregar más de un punto decimal
    if (number.includes(".") && numberString === ".") return;

    // MANEJO DE CEROS INICIALES: casos como 0, -0, 0.
    if (number.startsWith("0") || number.startsWith("-0")) {
      if (numberString === ".") {
        return setNumber(number + numberString);
      }

      //si entra otro 0 y ya existe decimal, concatena
      if (numberString === "0" && number.includes(".")) {
        return setNumber(number + numberString);
      }

      //si entra un número distinto de 0 y no hay decimal, reemplaza el 0 inicial
      if (numberString !== "0" && !number.includes(".")) {
        return setNumber(numberString);
      }

      //evita 0000 cuando aún no hay decimal

      if (numberString === "0" && !number.includes(".")) {
        return;
      }
    }

    setNumber(number + numberString);
  };

  const clean = () => {
    // REINICIO: limpia todos los valores principales ---
    setFormula("0");
    setNumber("0");
    setPrevNumber("0");
    lastOperator.current = undefined;
  };

  const toggleSing = () => {
    if (number.includes("-")) {
      return setNumber(number.replace("-", ""));
    }

    setNumber("-" + number);
  };

  const deleteLast = () => {
    let currentSing = "";
    let temporalNumber = number;

    if (number.includes("-")) {
      currentSing = "-";
      temporalNumber = number.substring(1);
    }

    if (temporalNumber.length > 1) {
      return setNumber(currentSing + temporalNumber.slice(0, -1));
    }

    setNumber("0");
  };

  const setLastNumber = () => {
    // Calculo previo
    //hace que el número previo sea el actual y
    // reinicia el actual para escribir un nuevo número
    //endsWith: es un método de cadena que verifica si la cadena termina
    // con un valor específico. Devuelve true si es así, de lo contrario, devuelve false.
    calculeResultado();

    if (number.endsWith(".")) {
      setPrevNumber(number.slice(0, -1));
    }

    setPrevNumber(number);

    setNumber("0");
  };

  const dividirOperacion = () => {
    setLastNumber();
    lastOperator.current = Operator.dividir;
  };

  const multiplicarOperacion = () => {
    setLastNumber();
    lastOperator.current = Operator.multiplicar;
  };

  const sumarOperacion = () => {
    setLastNumber();
    lastOperator.current = Operator.sumar;
  };

  const restarOperacion = () => {
    setLastNumber();
    lastOperator.current = Operator.restar;
  };

  const calcularSubResultado = () => {
    const [number1, operator, number2] = formula.split(" ");
    const number1Num = Number(number1);
    const number2Num = Number(number2); //NaN si no hay número2

    if (isNaN(number2Num)) return number1;

    switch (operator) {
      case Operator.sumar:
        return number1Num + number2Num;
      case Operator.restar:
        return number1Num - number2Num;
      case Operator.multiplicar:
        return number1Num * number2Num;
      case Operator.dividir:
        return number1Num / number2Num;
      default:
        throw new Error(`Operador ${operator} no válido`);
    }
  };

  const calculeResultado = () => {
    const resultado = calcularSubResultado();
    setFormula(`${resultado}`);
    lastOperator.current = undefined;
    setPrevNumber("0");
  };

  return {
    //Propiedades
    formula,
    number,
    prevNumber,

    //Metodo
    buildNumber,
    clear: clean,
    toggleSing,
    deleteLast,
    dividirOperacion,
    multiplicarOperacion,
    sumarOperacion,
    restarOperacion,
    calcularSubResultado,
    calculeResultado,
  };
};
