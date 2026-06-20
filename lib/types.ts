export interface ContactFormData {
  name: string
  email: string
  phone?: string
  message: string
  service: "cleaning" | "maintenance" | "construction" | "fish" | "other"
}
