import { notFound, redirect } from "next/navigation";

import { CreateGiftForm } from "@/components/creator/create-gift-form";
import { createClient } from "@/lib/supabase/server";

export default async function EditGiftPage({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: gift } = await supabase
    .from("gifts")
    .select("*")
    .eq("id", id)
    .eq("user_id", user.id)
    .single();

  if (!gift) {
    notFound();
  }

  const { data: photos } = await supabase
    .from("gift_photos")
    .select("*")
    .eq("gift_id", id)
    .order("display_order", { ascending: true });

  const { data: timeline } = await supabase
    .from("timeline_events")
    .select("*")
    .eq("gift_id", id)
    .order("display_order", { ascending: true });

  return (
    <CreateGiftForm
      userId={user.id}
      initialGift={gift}
      initialPhotos={photos ?? []}
      initialTimeline={timeline ?? []}
    />
  );
}
