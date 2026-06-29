import { redirect } from "next/navigation";

export default function NotFound() {
  redirect("/products"); // apna products listing page ka URL daal do
}