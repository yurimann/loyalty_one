class MessagesController < ApplicationController
  def index
    # primary_message method gets all messages with no parent
    messages = Message.primary_message
    @messages = Message.group(messages)
    @message = Message.new
    @user = current_user
    if @user
      @user_messages = current_user.messages
    end
    # gives the user's messages in JSON format
    respond_to do |format|
      format.html
      format.json { render json: @user_messages }
    end
  end

  def new
    @message = Message.new
  end

  def create
    @user = current_user
    @message = Message.new(message_params)
    if @user != nil
      @message.user_id = @user.id
    end
    # Allows JSON to be received from an AJAX call
    respond_to do |format|
      format.html
      format.json { render json: @message }
    end
    if @message.invalid?
      flash.now[:alert] = @message.errors.full_messages
    else
      @message.save
      flash[:alert] = "Message successfully posted"
    end

  end

  def edit
  end

  def update
  end

private
  def message_params
    params.require(:message).permit(:memo, :user_id, :parent_message_id, :city, :lat, :lng, :weather)
  end
end
