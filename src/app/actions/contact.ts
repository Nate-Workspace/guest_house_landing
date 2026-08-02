"use server";

export type ContactFormState = {
  success: boolean;
  message: string;
};

export async function submitContactForm(
  _prevState: ContactFormState,
  _formData: FormData,
): Promise<ContactFormState> {
  return {
    success: false,
    message: "Contact form not yet implemented.",
  };
}
