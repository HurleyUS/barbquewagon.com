import { create } from "zustand";

type FormName = "catering" | "contact";

type FormStatusState = {
  pending: Partial<Record<FormName, boolean>>;
  setPending: (form: FormName, pending: boolean) => void;
};

/** Tracks cross-form submit status without coupling each form to local flags. */
export const useFormStatusStore = create<FormStatusState>((set) => ({
  pending: {},
  setPending: (form, pending) =>
    set((state) => ({
      pending: { ...state.pending, [form]: pending },
    })),
}));
