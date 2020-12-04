import * as SecureStore from "expo-secure-store"

const usernameKey = "IMT_Credentials_Username"
const passwordKey = "IMT_Credentials_Password"

export async function areCredentialsAvailable(): Promise<boolean> {
  return SecureStore.isAvailableAsync()
}

export async function getCredentials(): Promise<{ username: string, password: string }> {
  return {
    username: await SecureStore.getItemAsync(usernameKey) || "",
    password: await SecureStore.getItemAsync(passwordKey) || ""
  }
}

export async function setCredentials(username: string, password: string): Promise<void> {
  await SecureStore.setItemAsync(usernameKey, username)
  await SecureStore.setItemAsync(passwordKey, password)
}

export async function deleteCredentials(): Promise<void> {
  await SecureStore.deleteItemAsync(usernameKey)
  await SecureStore.deleteItemAsync(passwordKey)
}
