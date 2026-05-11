create extension if not exists "pgcrypto";

create table if not exists public.gifts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  title text not null,
  giver_name text not null,
  recipient_name text not null,
  relationship_type text not null,
  special_date date,
  slug text not null unique,
  headline text not null default '',
  message text not null default '',
  final_message text not null default '',
  music_url text,
  theme text not null default 'romantico',
  status text not null default 'draft' check (status in ('draft', 'published')),
  is_public boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.gift_photos (
  id uuid primary key default gen_random_uuid(),
  gift_id uuid not null references public.gifts(id) on delete cascade,
  public_url text not null,
  storage_path text,
  caption text,
  display_order integer not null default 0,
  is_cover boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.timeline_events (
  id uuid primary key default gen_random_uuid(),
  gift_id uuid not null references public.gifts(id) on delete cascade,
  event_date date not null,
  title text not null,
  description text not null default '',
  photo_url text,
  display_order integer not null default 0,
  created_at timestamptz not null default now()
);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists gifts_set_updated_at on public.gifts;
create trigger gifts_set_updated_at
before update on public.gifts
for each row
execute function public.set_updated_at();

alter table public.gifts enable row level security;
alter table public.gift_photos enable row level security;
alter table public.timeline_events enable row level security;

create policy "Users can read own gifts"
on public.gifts
for select
to authenticated
using (auth.uid() = user_id);

create policy "Users can insert own gifts"
on public.gifts
for insert
to authenticated
with check (auth.uid() = user_id);

create policy "Users can update own gifts"
on public.gifts
for update
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

create policy "Users can delete own gifts"
on public.gifts
for delete
to authenticated
using (auth.uid() = user_id);

create policy "Public can read published gifts"
on public.gifts
for select
to anon
using (is_public = true and status = 'published');

create policy "Users can manage own photos"
on public.gift_photos
for all
to authenticated
using (
  exists (
    select 1 from public.gifts
    where gifts.id = gift_photos.gift_id
      and gifts.user_id = auth.uid()
  )
)
with check (
  exists (
    select 1 from public.gifts
    where gifts.id = gift_photos.gift_id
      and gifts.user_id = auth.uid()
  )
);

create policy "Public can read photos from published gifts"
on public.gift_photos
for select
to anon
using (
  exists (
    select 1 from public.gifts
    where gifts.id = gift_photos.gift_id
      and gifts.is_public = true
      and gifts.status = 'published'
  )
);

create policy "Users can manage own timeline"
on public.timeline_events
for all
to authenticated
using (
  exists (
    select 1 from public.gifts
    where gifts.id = timeline_events.gift_id
      and gifts.user_id = auth.uid()
  )
)
with check (
  exists (
    select 1 from public.gifts
    where gifts.id = timeline_events.gift_id
      and gifts.user_id = auth.uid()
  )
);

create policy "Public can read timeline from published gifts"
on public.timeline_events
for select
to anon
using (
  exists (
    select 1 from public.gifts
    where gifts.id = timeline_events.gift_id
      and gifts.is_public = true
      and gifts.status = 'published'
  )
);

insert into storage.buckets (id, name, public)
values ('gift-assets', 'gift-assets', true)
on conflict (id) do nothing;

create policy "Authenticated users can upload gift assets"
on storage.objects
for insert
to authenticated
with check (
  bucket_id = 'gift-assets'
  and auth.uid()::text = split_part(name, '/', 1)
);

create policy "Authenticated users can update own gift assets"
on storage.objects
for update
to authenticated
using (
  bucket_id = 'gift-assets'
  and auth.uid()::text = split_part(name, '/', 1)
)
with check (
  bucket_id = 'gift-assets'
  and auth.uid()::text = split_part(name, '/', 1)
);

create policy "Authenticated users can delete own gift assets"
on storage.objects
for delete
to authenticated
using (
  bucket_id = 'gift-assets'
  and auth.uid()::text = split_part(name, '/', 1)
);

create policy "Public can read gift assets"
on storage.objects
for select
to public
using (bucket_id = 'gift-assets');
