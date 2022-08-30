import { Placeholder } from "@faker-js/faker/modules/image/providers/placeholder";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 24,
    height: 54,
    alignItems: 'center',
    marginTop: -27
  },
  input: {
    backgroundColor: '#262626',
    flex: 1,
    height: 54,
    marginRight: 4,
    borderRadius: 6,
    borderColor:'#0D0D0D',
    borderWidth: 1,

    padding: 16,
    color: '#F2F2F2',
    fontSize: 16,
  },
  button: {
    width: 52,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6
  },
  btnUnpressed: {
    width: 52,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    backgroundColor: '#1E6F9F',
  },
  btnPressed: {
    width: 52,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    backgroundColor: '#4EA8DE',
  }
})