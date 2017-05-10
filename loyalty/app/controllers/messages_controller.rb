class MessagesController < ApplicationController
  def index
    @messages = Message.ascending
    @message = Message.new
  end

  def new
    @message = Message.new
  end

  def create
    @message = Message.new(message_params)
byebug
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
    params.require(:message).permit(:memo, :user_id)
  end
end
