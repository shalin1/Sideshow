class Api::EventsController < ApplicationController

  def index
    @events = Event.all
  end

  def show
    @event = Event.find_by(id: params[:id])
    if @event
      render :show
    else
      render json: ['Could not find event'], status: 404
    end
  end

  def create
    @event = current_user.events.create!(event_params)
    render :show
  end

  def update
    @event = current_user.events.find(params[:id])
        if @event.update_attributes(event_params)
           @user = current_user
           render :show
        else
          render json:  @event.errors.full_messages, status: 422
        end
    end
  private

  def event_params
  params.require(:event).permit(:id, :event_start, :event_end, :title, :description,
    :venue_name, :venue_address, :ticket_price, :tickets_available,
    :organizer_id, :hero_image)
end

end
