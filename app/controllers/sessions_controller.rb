class SessionsController < ApplicationController
  def create
    user = User.find_by(name: params[:email])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      render json: { status: "winz" }
    else
      render json: { status: "faaail" }
    end
  end
end
