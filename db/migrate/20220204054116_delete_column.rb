class DeleteColumn < ActiveRecord::Migration[6.1]
  def change
    remove_column :games, :is_member_only
  end
end
