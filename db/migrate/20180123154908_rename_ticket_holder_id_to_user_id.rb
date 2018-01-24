class RenameTicketHolderIdToUserId < ActiveRecord::Migration[5.1]
  def change
    rename_column :bookmarks, :ticket_holder_id, :user_id
  end
end
