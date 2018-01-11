class Api::TicketsController < ApplicationController

  def create
    @ticket = current_user.tickets.new(ticket_params)
    if @ticket.save
      render :show
    else
      render json: @ticket.errors.messages, status: 422
    end
  end

  def show
    @ticket = Ticket.find_by(id: params[:id])
    if @ticket
      render :show
    else
      render json: ['Could not find ticket'], status: 404
    end
  end

  def destroy
    @user = current_user
    @ticket = current_user.tickets.find(params[:id])
    @ticket.destroy
  end

  private

  def ticket_params
    params.require(:ticket).permit(:event_id, :ticket_holder_id)
  end
end
