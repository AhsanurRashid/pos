import { User } from '@/lib/types'
import { create } from "zustand"

interface UserStoreType {
    user: User | null
}

interface UserStoreAction {
    setUser: (user: User) => void
    deleteUser: () => void
}

export const useUserStore = create<UserStoreType & UserStoreAction>((set) => ({
    user: null,
    setUser: (user: User) => set({ user }),
    deleteUser: () => set(
        { user: null }
    )
}))