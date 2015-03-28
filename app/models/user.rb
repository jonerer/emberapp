# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  name            :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  password_digest :string
#

class User < ActiveRecord::Base
  attr_accessor :password, :password_confirmation
  # has_secure_password
  # validates_presence_of :password, :on => :create

  has_many :posts
  has_many :sessions

  validates_presence_of :name
end
