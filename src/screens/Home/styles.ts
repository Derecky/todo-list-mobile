import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: '#191919'
  },
  container: {
    marginHorizontal: 24,
    marginTop: 32,
    flex: 1
  },
  labelsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20,
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
  },
  emptyStateContainer: {
    height: 208,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopColor: '#333333',
    borderTopWidth: 1
  },
  emptyStateTextBold: {
    fontWeight: 'bold',
    marginTop: 16
  },
  emptyStateSubtitle: {
    color: '#808080',
    fontSize: 14
  }

})