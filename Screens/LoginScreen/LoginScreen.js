import { useState } from "react";
import {
  TouchableWithoutFeedback,
  Keyboard,
  View,
  ImageBackground,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import bgImage from "../../assets/images/backgroundImage.jpg";

const initialState = {
  email: "",
  password: "",
};

const initStateFocus = {
  email: false,
  password: false,
};

export const LoginScreen = () => {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(true);
  const [isFocused, setIsFocused] = useState(initStateFocus);
  const [dataForm, setDataForm] = useState(initialState);
  const { email, password } = dataForm;

  const onFocuseInput = (name) => {
    setIsKeyboardOpen(true);
    setIsFocused((prevState) => ({ ...prevState, [name]: true }));
  };

  const onBlurInput = (name) => {
    setIsFocused((prevState) => ({ ...prevState, [name]: false }));
  };

  const keyboardHide = () => {
    setIsKeyboardOpen(false);
    Keyboard.dismiss();
  };

  const submitForm = () => {
    setIsKeyboardOpen(false);
    Keyboard.dismiss();

    console.log(dataForm);

    setDataForm(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground source={bgImage} style={styles.backgroundImg}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : ""}
            keyboardVerticalOffset={0}
          >
            <View
              style={{
                ...styles.form,
                paddingBottom: isKeyboardOpen ? 32 : 111,
              }}
            >
              <Text style={styles.title}>Log in</Text>

              <View
                style={{
                  ...styles.inputsWrapper,
                  marginBottom: isKeyboardOpen ? 0 : 43,
                }}
              >
                <TextInput
                  style={{
                    ...styles.input,
                    borderColor: isFocused.email ? "#FF6C00" : "#E8E8E8",
                  }}
                  placeholder="Email"
                  value={email}
                  onFocus={() => onFocuseInput("email")}
                  onBlur={() => onBlurInput("email")}
                  onChangeText={(value) =>
                    setDataForm((prevState) => ({ ...prevState, email: value }))
                  }
                ></TextInput>

                <View style={{ position: "relative" }}>
                  <TextInput
                    style={{
                      ...styles.input,
                      borderColor: isFocused.password ? "#FF6C00" : "#E8E8E8",
                    }}
                    maxLength={10}
                    secureTextEntry={isShowPassword}
                    placeholder="Password"
                    value={password}
                    onFocus={() => onFocuseInput("password")}
                    onBlur={() => onBlurInput("password")}
                    onChangeText={(value) =>
                      setDataForm((prevState) => ({
                        ...prevState,
                        password: value,
                      }))
                    }
                  ></TextInput>

                  <TouchableOpacity
                    style={styles.showBtn}
                    onPress={() => setIsShowPassword((prevState) => !prevState)}
                  >
                    <Text style={styles.showText}>Show</Text>
                  </TouchableOpacity>
                </View>
              </View>

              {!isKeyboardOpen && (
                <View style={styles.wrapperBtn}>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.btn}
                    onPress={submitForm}
                  >
                    <Text style={styles.btnTitle}>Log in</Text>
                  </TouchableOpacity>

                  <TouchableOpacity activeOpacity={0.8}>
                    <Text style={styles.text}>
                      Don't have an account? Register.
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  backgroundImg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },

  form: {
    alignItems: "center",
    paddingTop: 32,
    backgroundColor: "#ffffff",
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
  },

  title: {
    marginBottom: 32,
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    color: "#212121",
  },

  inputsWrapper: {
    gap: 16,
    width: "100%",
  },

  input: {
    marginHorizontal: 16,
    padding: 16,
    height: 50,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#212121",
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
  },

  showBtn: {
    position: "absolute",
    right: 16,
    paddingHorizontal: 16,
    paddingVertical: 13,
  },
  showText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#1B4371",
  },

  wrapperBtn: {
    display: "flex",
    width: "100%",
  },

  btn: {
    alignItems: "center",
    marginHorizontal: 16,
    marginBottom: 16,
    paddingBottom: 16,
    paddingTop: 16,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },

  btnTitle: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#FFFFFF",
  },

  text: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    textAlign: "center",
    color: "#1B4371",
  },
});
