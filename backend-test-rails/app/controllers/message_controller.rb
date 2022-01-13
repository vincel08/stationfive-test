class MessageController < ApplicationController
  def create
    if params[:conversation_id]
      render json: {
        response_id: params[:conversation_id],
        response:MessageResponse.call(params[:message])
      }
    else
      render json: { error: 'invalid params' }, status: 400
    end
  end
end
