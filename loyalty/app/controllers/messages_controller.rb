class MessagesController < ApplicationController
  def index
    @messages = Message.all
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
    
  end

  def edit
  end

  def update
  end

private
  def message_params
    params.require(:message).permit(:memo)
  end
end
