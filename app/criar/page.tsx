import { redirect } from "next/navigation";

import { CreateGiftForm } from "@/components/creator/create-gift-form";
import { createClient } from "@/lib/supabase/server";

export default async function CreatePage() {
  const supabase = await createClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return <CreateGiftForm userId={user.id} />;
}
