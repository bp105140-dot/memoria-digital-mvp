export type GiftStatus = "draft" | "published";

export type GiftPhoto = {
  id?: string;
  public_url: string;
  storage_path: string | null;
  caption: string | null;
  display_order: number;
  is_cover: boolean;
};

export type TimelineEvent = {
  id?: string;
  event_date: string;
  title: string;
  description: string;
  photo_url: string | null;
  display_order: number;
};

export type GiftRecord = {
  id: string;
  user_id: string;
  title: string;
  giver_name: string;
  recipient_name: string;
  relationship_type: string;
  special_date: string | null;
  slug: string;
  headline: string;
  message: string;
  final_message: string;
  music_url: string | null;
  theme: string;
  status: GiftStatus;
  is_public: boolean;
  created_at: string;
  updated_at: string;
};
