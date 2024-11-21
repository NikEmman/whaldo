class CreateLeaderboards < ActiveRecord::Migration[8.0]
  def change
    create_table :leaderboards do |t|
      t.string :name
      t.string :difficulty
      t.integer :time

      t.timestamps
    end
  end
end
