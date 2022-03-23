import "../services/firebase";
import { View, Text, StyleSheet, Platform, Alert } from "react-native";
import { TextInput, Button } from "react-native-paper";
import React from "react";
import { TextInputMask } from "react-native-masked-text";
import { getAuth } from "firebase/auth";
import { getApp } from "firebase/app";
import {
  FirebaseRecaptchaVerifierModal,
  FirebaseRecaptchaBanner,
} from "expo-firebase-recaptcha";
import {
  PhoneAuthProvider,
  signInWithCredential,
} from "firebase/auth/react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import LoginSvg from "../assets/icons/LoginSvg";

const auth = getAuth();
const app = getApp();

if (!app?.options || Platform.OS === "web") {
  throw new Error(
    "This example only works on Android or iOS, and requires a valid Firebase config."
  );
}

export default function SignUpScreen() {
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const recaptchaVerifier = React.useRef(null);
  const [page, setPage] = React.useState("signup");
  const [verificationId, setVerificationId] = React.useState();
  const [verificationCode, setVerificationCode] = React.useState();

  // const firebaseConfig = app ? app.options : undefined;
  const [message, showMessage] = React.useState();
  const attemptInvisibleVerification = false;

  const handleLogin = async () => {
    let correctPhone = phoneNumber.replaceAll(/\D/g, "");

    if (correctPhone.length !== 12) {
      return;
    }

    const phoneProvider = new PhoneAuthProvider(auth);
    const verificationId = await phoneProvider.verifyPhoneNumber(
      "+" + correctPhone,
      recaptchaVerifier.current
    );

    let codePrompt = Alert.prompt(
      "Codeni kiriting",
      "Sizga yuborilgan kodni kiriting",
      async (text) => {
        const credential = PhoneAuthProvider.credential(verificationId, text);
        setVerificationId(text);

        let result = await signInWithCredential(auth, credential).catch((e) => {
          console.log(e + "");
        });
        console.log(result);
      }
    );
  };
  if (page === "signup") {
    return (
      <View style={styles.container}>
        <FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifier}
          firebaseConfig={app.options}
          // attemptInvisibleVerification
        />
        <LoginSvg />
        <Text style={styles.title}>Ro'yhatdan o'ting</Text>
        <View style={styles.inputs}>
          <TextInput
            placeholder="Telefon raqamingiz"
            style={styles.input}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            render={(props) => {
              return (
                <TextInputMask
                  type={"custom"}
                  autoFocus
                  keyboardType="phone-pad"
                  options={{
                    mask: "+998 (99) 999-99-99",
                  }}
                  placeholder="Telefon raqam"
                  {...props}
                />
              );
            }}
          />
          <Button onPress={handleLogin} style={styles.button} mode="contained">
            <Text>Login</Text>
          </Button>
        </View>
        <View style={styles.bottomText}>
          <Text>Akkountingiz bormi?</Text>
          <Pressable onPress={() => setPage("login")}>
            <Text>Login</Text>
          </Pressable>
        </View>
      </View>
    );
  }

  if (page === "login") {
    return (
      <View style={styles.container}>
        <FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifier}
          firebaseConfig={app.options}
          // attemptInvisibleVerification
        />
        <LoginSvg />
        <Text style={styles.title}>Akkountga kirish</Text>
        <View style={styles.inputs}>
          <TextInput
            placeholder="Elektron Poshtangizni kiriting"
            style={styles.input}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />

          <TextInput
            placeholder="Parolingizni kiriting"
            style={styles.input}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />

          <Button onPress={handleLogin} style={styles.button} mode="contained">
            <Text>Login</Text>
          </Button>
        </View>
        <View style={styles.bottomText}>
          <Text>Akkountingiz yo'qmi?</Text>
          <Pressable onPress={() => setPage("signup")}>
            <Text>Ro'yxatdan o'tish</Text>
          </Pressable>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: 16,
  },
  title: {
    marginTop: 16,
    fontSize: 20,
    fontWeight: "700",
  },
  inputs: {
    width: "100%",
    flexDirection: "column",
    marginTop: 20,
  },
  input: {
    width: "100%",
  },
  button: {
    marginTop: 20,
    padding: 10,
  },
  bottomText: {
    marginTop: 20,
    alignItems: "center",
  },
});
