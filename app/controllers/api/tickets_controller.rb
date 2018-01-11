class Api::TicketsController < ApplicationController

  def create
    @ticket = Ticket.new(ticket_params)

    if @ticket.save
      render :show
    end
  end

  private

  def ticket_params
    params.require(:ticket).permit(:event_id, :ticket_holder_id)
  end
end
