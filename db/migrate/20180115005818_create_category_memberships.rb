class CreateCategoryMemberships < ActiveRecord::Migration[5.1]
  def change
    create_table :category_memberships do |t|
      t.integer :event_id
      t.integer :category_id

      t.timestamps
    end
  end
end
