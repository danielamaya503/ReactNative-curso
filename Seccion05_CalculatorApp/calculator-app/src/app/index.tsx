import CalculatorButton from "@/component/CalculatorButton";
import ThemeText from "@/component/ThemeText";
import { Colors } from "@/constants/theme";
import { useCalculator } from "@/hooks/Calculator";
import { globalStyles } from "@/styles/global-styles";
import { View } from "react-native";

const CalculatorApp = () => {
  //Tomar valores de hook / UseCalculator
  const {
    buildNumber,
    prevNumber,
    formula,
    number,
    clear,
    toggleSing,
    deleteLast,
    dividirOperacion,
    multiplicarOperacion,
    sumarOperacion,
    restarOperacion,
    calcularSubResultado,
    calculeResultado,
  } = useCalculator();

  return (
    <View style={globalStyles.calculatorCotainer}>
      {/*Resultados*/}
      <View
        style={{
          paddingHorizontal: 30,
          paddingBottom: 20,
        }}
      >
        <ThemeText variante={"h1"}>{formula}</ThemeText>

        {formula === prevNumber ? (
          <ThemeText variante={"h2"}> </ThemeText>
        ) : (
          <ThemeText variante={"h2"}>{prevNumber}</ThemeText>
        )}
      </View>

      {/* Filas de botones*/}
      <View style={globalStyles.row}>
        <CalculatorButton
          label={"C"}
          blackText={true}
          color={Colors.lighGray}
          onPress={() => clear()}
        />
        <CalculatorButton
          label={"+/-"}
          blackText={true}
          color={Colors.lighGray}
          onPress={toggleSing}
        />
        <CalculatorButton
          label={"del"}
          blackText={true}
          color={Colors.lighGray}
          onPress={() => deleteLast()}
        />
        <CalculatorButton
          label={"÷"}
          color={Colors.orange}
          onPress={dividirOperacion}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          label={"7"}
          color={Colors.darkGray}
          onPress={() => buildNumber("7")}
        />
        <CalculatorButton
          label={"8"}
          color={Colors.darkGray}
          onPress={() => buildNumber("8")}
        />
        <CalculatorButton
          label={"9"}
          color={Colors.darkGray}
          onPress={() => buildNumber("9")}
        />
        <CalculatorButton
          label={"*"}
          color={Colors.orange}
          onPress={multiplicarOperacion}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          label={"4"}
          color={Colors.darkGray}
          onPress={() => buildNumber("4")}
        />
        <CalculatorButton
          label={"5"}
          color={Colors.darkGray}
          onPress={() => buildNumber("5")}
        />
        <CalculatorButton
          label={"6"}
          color={Colors.darkGray}
          onPress={() => buildNumber("6")}
        />
        <CalculatorButton
          label={"-"}
          color={Colors.orange}
          onPress={restarOperacion}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          label={"1"}
          color={Colors.darkGray}
          onPress={() => buildNumber("1")}
        />
        <CalculatorButton
          label={"2"}
          color={Colors.darkGray}
          onPress={() => {
            buildNumber("2");
          }}
        />
        <CalculatorButton
          label={"3"}
          color={Colors.darkGray}
          onPress={() => buildNumber("3")}
        />
        <CalculatorButton
          label={"+"}
          color={Colors.orange}
          onPress={sumarOperacion}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          label={"0"}
          doubleSize={true}
          color={Colors.darkGray}
          onPress={() => buildNumber("0")}
        />
        <CalculatorButton
          label={"."}
          color={Colors.darkGray}
          onPress={() => buildNumber(".")}
        />
        <CalculatorButton
          label={"="}
          color={Colors.orange}
          onPress={() => calculeResultado()}
        />
      </View>
    </View>
  );
};

export default CalculatorApp;
