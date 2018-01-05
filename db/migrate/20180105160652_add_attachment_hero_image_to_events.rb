class AddAttachmentHeroImageToEvents < ActiveRecord::Migration[5.1]
  def change
    change_table :events do |t|
      t.attachment :hero_image
    end
  end
end
