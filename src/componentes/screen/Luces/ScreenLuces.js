import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';
import { LineChart } from 'react-native-chart-kit';

const ScreenLuces = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Gráficas de seguimiento</Text>

      <View style={styles.chartContainer}>
        <Text>Planta 1</Text>
        <LineChart
          data={{
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100
                ]
              }
            ]
          }}
          width={Dimensions.get("window").width - 64} // from react-native
          height={220}
          yAxisLabel="$"
          yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#729D39",
            backgroundGradientFrom: "#36622B",
            backgroundGradientTo: "#C6E377",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#FBFAD3"
            }
          }}
          bezier
          style={styles.chart}
        />
      </View>

      <View style={styles.chartContainer}>
        <Text>Planta 2</Text>
        <LineChart
          data={{
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100
                ]
              }
            ]
          }}
          width={Dimensions.get("window").width - 64} // from react-native
          height={220}
          yAxisLabel="$"
          yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#729D39",
            backgroundGradientFrom: "#36622B",
            backgroundGradientTo: "#C6E377",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#FBFAD3"
            }
          }}
          bezier
          style={styles.chart}
        />
      </View>
    </View>
  );
}

export default ScreenLuces;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    paddingHorizontal: 16,
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  chartContainer: {
    marginBottom: 16, 
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  }
});
