json.partial! "api/categories/category", category: @category
if @category.events
  json.events do
    json.array! @category.events do |event|
      json.partial! "api/events/event", event: event
    end
  end
end
