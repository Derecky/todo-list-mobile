import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: '#191919'
  },
  container: {
    marginHorizontal: 24,
    marginTop: 32,
    height: 400,
  },
  labelsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20,
    borderBottomColor: '#333333',
    borderBottomWidth: 1
  },
  labelContainer: {
    flexDirection: 'row'
  },
  label: {
    fontWeight: 'bold',
    fontSize: 14,
    marginRight: 8
  },
  quantity: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    backgroundColor: '#333333',
    borderRadius: 999,

    color: '#D9D9D9',
    fontSize: 12,
    fontWeight: 'bold'
  },
  completed: {
    color: '#8284FA',
  },
  created: {
    color: '#4EA8DE',
  }

})