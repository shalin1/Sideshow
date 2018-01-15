class CreateCategories < ActiveRecord::Migration[5.1]
  def change
    create_table :categories do |t|
      t.attachment :category_image
      t.string :name

      t.timestamps
    end
  end
end
