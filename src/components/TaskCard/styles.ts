import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#262626',
    borderColor: '#333333',
    borderWidth: 1,
    padding: 12,
    borderRadius: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8
  },
  cardTitleContainer: {
    flex: 1,
    marginRight: 4,
  },
  notCompletedTitle: {
    fontSize: 14,
    fontWeight: '400',
    color: '#F2F2F2',
  },
  completedTitle: {
    fontSize: 14,
    fontWeight: '400',
    color: '#808080',
  },
  removeBtn: {
  
  }
})