class AddWeatherToMessage < ActiveRecord::Migration[5.0]
  def change
    add_column :messages, :weather, :int
  end
end
