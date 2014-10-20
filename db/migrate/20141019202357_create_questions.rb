class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.belongs_to :@quiz, index: true
      t.text :description

      t.timestamps
    end
  end
end
