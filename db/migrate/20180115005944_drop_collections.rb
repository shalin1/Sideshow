class DropCollections < ActiveRecord::Migration[5.1]
  def change
    drop_table :collections
  end
end
