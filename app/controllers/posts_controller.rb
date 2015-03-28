class PostsController < ApplicationController
  def index
    render json: Post.all
  end

  def show
    render json: Post.find(params[:id])
  end

  def create
    Post.create!(post_params)
  end

  private
    def post_params
      params.require(:post).permit(:title, :text, :user_id)
    end
end
