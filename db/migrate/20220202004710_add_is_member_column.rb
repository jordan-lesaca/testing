class AddIsMemberColumn < ActiveRecord::Migration[6.1]
  def change
    add_column :games, :is_member_only, :boolean, null: false, default: false
  end
end
