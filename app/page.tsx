import { redirect } from "next/navigation"

export default function Home() {
  // Redirect to the admin dashboard
  redirect("/admin/add-internship")
}
