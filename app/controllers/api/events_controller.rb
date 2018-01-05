class Api::EventsController < ApplicationController

  def index
    @events = Event.all
  end

  def show
    @event = Event.find(params[:id])
  end

  def create
    @event = Event.create!(event_params)
    render :show
  end

  private

  def event_params
  params.require(:event).permit(:id, :event_start, :event_end, :title, :description,
    :venue_name, :venue_address, :ticket_price, :tickets_available,
    :organizer_id, :hero_image)
end

end
