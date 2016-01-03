class Api::UsersController < ApplicationController
  def index
    @users = User.all
    # render 'index'
    render component: 'Greeting', props: { users: @users.to_json }, tag: 'span', class: 'todo'
  end

  def show
    @user = User.find(params[:id])
    render 'show'
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:password, :username)
  end
end
