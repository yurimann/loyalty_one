class UsersController < ApplicationController
  def index
    @user = current_user
    # JSON request would only return the ID and location
    respond_to do |format|
      format.html
      format.json { render json: @user, only: [:id, :location] }
    end
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)

    respond_to do |format|
      format.html
      format.json { render json: @user }
    end

    if @user.save
      session[:user_id] = @user.id
      redirect_to root_url
    else
      flash.now[:alert] = @user.errors.full_messages
      render :new
    end
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    if @user.update_attributes(user_params)
      redirect_to root_path
    else
      render :edit
    end
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
    redirect_to root_url
  end

  private
  def user_params
    params.require(:user).permit(:name, :username, :email, :password, :password_confirmation, :location)
  end
end
