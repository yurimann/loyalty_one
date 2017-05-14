class MessagesController < ApplicationController
  def index
    messages = Message.primary_message
    @messages = []
    messages.each do |message|
      until message.child_messages.empty?
        message.child_messages.each do |msg|
          @messages << msg
          message = msg
        end

      end
    end

    @message = Message.new
    if current_user
      @user_messages = current_user.messages
    end

    respond_to do |format|
      format.html
      format.json { render json: @user_messages }
    end
  end

  def new
    @message = Message.new
  end

  def create
    @message = Message.new(message_params)

    respond_to do |format|
      format.html
      format.json { render json: @message }
    end

    if @message.invalid?
      flash.now[:alert] = @message.errors.full_messages
    else
      @message.save
    end
  end

  def edit
  end

  def update
  end

private
  def message_params
    params.require(:message).permit(:memo, :user_id, :parent_message_id)
  end
end
