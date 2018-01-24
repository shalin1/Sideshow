json.extract! user, :id, :email, :first_name, :event_ids, :tickets

json.bookmarked_event_ids user.bookmarks.pluck(:event_id)
