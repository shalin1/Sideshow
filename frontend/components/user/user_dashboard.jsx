import React from 'react';

class UserDashboard extends React.Component {

  componentWillMount() {
    this.props.fetchEvents();
  }

  render () {
    if (!this.props.user) {
      return ('loading');
    } else {

      return (
        <article className="user-dashboard-container">
          <div className="events-dash">
          </div>
          <section className="home-content">
            <article className="event-index-search-box">
              <h1 className="font-header-search-box">Find your next experience</h1>
            </article>
            <article className="event-index-intro">
              <h3 className="">Events for you in Brooklyn, NY, United States</h3>
            </article>
          </section>
        </article>
      );
    }
  }
}
export default UserDashboard;
