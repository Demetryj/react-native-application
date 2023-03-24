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
import { AntDesign } from "@expo/vector-icons";

const initialState = {
  login: "",
  email: "",
  password: "",
};

const initStateFocus = {
  login: false,
  email: false,
  password: false,
};

export const RegistrationScreen = () => {
  const [avatar, setAvatar] = useState(null);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(true);
  const [isFocused, setIsFocused] = useState(initStateFocus);
  const [dataForm, setDataForm] = useState(initialState);
  const { login, email, password } = dataForm;

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
                paddingBottom: isKeyboardOpen ? 32 : 45,
              }}
            >
              <View style={styles.avatar}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.btnAddAvatar}
                >
                  {avatar ? (
                    <AntDesign name="closecircleo" size={25} color="#E8E8E8" />
                  ) : (
                    <AntDesign name="pluscircleo" size={25} color="#FF6C00" />
                  )}
                </TouchableOpacity>
              </View>

              <Text style={styles.title}>Registration</Text>

              <View
                style={{
                  ...styles.inputsWrapper,
                  marginBottom: isKeyboardOpen ? 0 : 43,
                }}
              >
                <TextInput
                  style={{
                    ...styles.input,
                    borderColor: isFocused.login ? "#FF6C00" : "#E8E8E8",
                  }}
                  placeholder="Login"
                  name="login"
                  value={login}
                  onFocus={() => onFocuseInput("login")}
                  onBlur={() => onBlurInput("login")}
                  onChangeText={(value) =>
                    setDataForm((prevState) => ({ ...prevState, login: value }))
                  }
                ></TextInput>

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
                    <Text style={styles.showBtnText}>Show</Text>
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
                    <Text style={styles.btnTitle}>Register</Text>
                  </TouchableOpacity>

                  <TouchableOpacity activeOpacity={0.8}>
                    <Text style={styles.text}>
                      Already have an account? To come in.
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
    position: "relative",
    alignItems: "center",
    paddingTop: 92,
    // paddingBottom: 45,
    backgroundColor: "#ffffff",
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
  },

  avatar: {
    position: "absolute",
    top: -60,
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },

  btnAddAvatar: {
    position: "absolute",
    top: 81,
    right: -12.5,
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

  showBtnText: {
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
