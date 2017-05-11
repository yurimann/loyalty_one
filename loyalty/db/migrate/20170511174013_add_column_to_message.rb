class AddColumnToMessage < ActiveRecord::Migration[5.0]
  def change
    add_column :messages, :parent_message_id, :integer
  end
end
