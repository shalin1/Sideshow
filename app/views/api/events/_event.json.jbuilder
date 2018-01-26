json.extract! event, :id, :event_start, :event_end, :title, :description,
  :venue_name, :venue_address, :ticket_price, :tickets_available,
  :organizer_id
if event.categories
  json.categories do
    json.array! event.categories.map { |category| category.name }
  end
end
json.event_index_image_url asset_path(event.hero_image.url(:small))
json.event_show_image_url asset_path(event.hero_image.url(:medium))
