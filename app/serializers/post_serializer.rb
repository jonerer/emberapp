# == Schema Information
#
# Table name: posts
#
#  id         :integer          not null, primary key
#  title      :string
#  text       :text
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class PostSerializer < ApplicationSerializer
  embed :ids, :include => true

  attributes :id, :title, :text, :user_id, :user
end
