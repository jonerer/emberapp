class UsersController < ApplicationController
  def index
    render json: User.all
  end

  def show
    render json: User.find(params[:id])
  end

  def me
    cu = current_user
    print "Session ID: #{request.session_options[:id]}"
    p session.keys
    render json: cu
  end
end
