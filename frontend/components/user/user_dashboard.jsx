import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import DashboardEventShow from './user_event_item';
import DashboardTicketShow from './user_ticket_item';
import EventIndexItem from '../event/event_index_item';

class UserDashboard extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.pageIsLoading();
		this.props
			.fetchEvents()
			.then(() =>
				this.props.fetchTickets().then(() => this.props.pageFinishedLoading())
			);
	}

	render() {
		if (this.props.loading) {
			return <div className="loading-container" />;
		} else {
			let dashboardContent;
			let contentContainerClass;
			switch (this.props.pageType) {
				case 'userEvents':
					contentContainerClass = 'user-dashboard-content-container';
					if (Object.keys(this.props.content).length === 0) {
						dashboardContent = (
							<div className="user-dashboard-render-error">
								<h2>You haven't made any events!</h2>
								<p>
									Maybe you'd like to <Link to="/create"> make one now?</Link>
								</p>
							</div>
						);
					} else {
						dashboardContent = this.props.content.map(event => (
							<DashboardEventShow
								event={event}
								key={event.id}
								deleteEvent={this.props.deleteEvent}
							/>
						));
					}
					break;
				case 'userTickets':
					contentContainerClass = 'user-dashboard-content-container';

					if (Object.keys(this.props.content).length === 0) {
						dashboardContent = (
							<div className="user-dashboard-render-error">
								<h2>You haven't bought any tickets!</h2>
								<p>
									Maybe you'd like to <Link to="/">buy some now?</Link>
								</p>
							</div>
						);
					} else {
						dashboardContent = this.props.content.map(registration => (
							<DashboardTicketShow
								ticket={registration.ticket}
								key={registration.ticket.id}
								event={registration.event}
								deleteTicket={this.props.deleteTicket}
								fetchTickets={this.props.fetchTickets}
							/>
						));
					}
					break;
				case 'userBookmarks':
					contentContainerClass = 'user-dashboard-bookmarks-container';

					if (Object.keys(this.props.content).length === 0) {
						dashboardContent = (
							<div className="user-dashboard-render-error">
								<h2>You haven't bought any tickets!</h2>
								<p>
									Maybe you'd like to <Link to="/">buy some now?</Link>
								</p>
							</div>
						);
					} else {
						dashboardContent = this.props.content.map(event => (
							<EventIndexItem
								event={event}
								key={event.id}
								currentUser={this.props.currentUser}
								removeBookmark={this.props.removeBookmark}
								addBookmark={this.props.addBookmark}
							/>
						));
					}
					break;
				default:
					dashboardContent = 'SOMETHING IS WRONG';
			}

			return (
				<div className="user-dashboard-container">
					<div className="user-dashboard-header flex-center">
						{this.props.currentUser.first_name}'s profile
					</div>
					<section className="user-dashboard-content">
						<nav className="user-dashboard-links">
							<section className="user-dashboard-links-container">
								<NavLink
									activeClassName="user-dashboard-link-selected"
									to="/my_tickets">
									<div className="flex-center user-dashboard-link">
										Upcoming Events
									</div>
								</NavLink>
								<NavLink
									activeClassName="user-dashboard-link-selected"
									to="/my_events">
									<div className="flex-center user-dashboard-link">
										Organized Events
									</div>
								</NavLink>
								<NavLink
									activeClassName="user-dashboard-link-selected"
									to="/my_bookmarks">
									<div className="flex-center user-dashboard-link">
										Saved Events
									</div>
								</NavLink>
							</section>
						</nav>
						<article className={contentContainerClass}>
							{dashboardContent}
						</article>
					</section>
				</div>
			);
		}
	}
}
export default UserDashboard;
