class Api::EventsController < ApplicationController

  def index
    events = Event.all
    
    if params[:categories]
      events = events.where(categories: params[:categories])
    end
    @events = events.includes(:categories)
  end

  def currentUserEvents
    @user = current_user
    @events = Event.where(id: @user.event_ids)
    render :index
  end

  def show
    @event = Event.find(params[:id])
    if @event
      render :show
    else
      render json: ['Could not find event'], status: 404
    end
  end

  def create
    @event = current_user.events.new(event_params)
    if @event.save
      render :show
    else
      render json: @event.errors.messages, status: 422
    end
  end

  def update
    @event = current_user.events.find(params[:id])
    if @event.update_attributes(event_params)
       @user = current_user
       render :show
    else
      render json:  @event.errors.messages, status: 422
    end
  end

  def destroy
    @user = current_user
    @event = current_user.events.find(params[:id])
    @event.destroy
    render :show
  end


  private

  def event_params
  params.require(:event).permit(:id, :event_start, :event_end, :title, :description,
    :venue_name, :venue_address, :ticket_price, :tickets_available,
    :organizer_id, :hero_image)
  end
end
