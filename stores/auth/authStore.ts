import { IAuth } from "@/interfaces/IAuth";
import { create, StateCreator } from "zustand";
import { persist, PersistOptions } from 'zustand/middleware'
import AsyncStorage from "@react-native-async-storage/async-storage";

interface AuthState {
    authUser: IAuth | null;
    setAuthUser: (user: IAuth) => void;
}

// Define the persist options with the correct type
type AuthPersist = (
    config: StateCreator<AuthState>,
    options: PersistOptions<AuthState>
) => StateCreator<AuthState>;

export const useAuthStore = create<AuthState>(
    (persist as AuthPersist)(
        (set) => ({
            authUser: null,
            setAuthUser: (user) => set({ authUser: user }),
        }),
        {
            name: 'auth-storage',
            storage: {
                getItem: async (name: string) => {
                    const item = await AsyncStorage.getItem(name);
                    return item ? JSON.parse(item) : null;
                },
                setItem: async (name: string, value: any) => {
                    await AsyncStorage.setItem(name, JSON.stringify(value));
                },
                removeItem: async (name: string) => {
                    await AsyncStorage.removeItem(name);
                },
            }
        }
    )
);
