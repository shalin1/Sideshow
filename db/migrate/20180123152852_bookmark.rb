class Bookmark < ActiveRecord::Migration[5.1]
  def change
    create_table :bookmarks do |t|
      t.integer :event_id, index: true, foreign_key: true, null: false
      t.integer :ticket_holder_id, index: true, foreign_key: true, null: false

      t.timestamps null: false
    end
  end
end
