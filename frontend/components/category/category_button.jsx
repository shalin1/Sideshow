import React from 'react'

class CategoryButton extends React.Component {
  constructor(props) {
    super(props);
    this.toggleCategoryMembership = this.toggleCategoryMembership.bind(this);
  }

  toggleCategoryMembership(currentUser, event, category) {
      if (event.categories.includes(category)) {
        return e => this.props.removeBookmark(eventId)
      } else {
        return e => this.props.addBookmark({ event_id: eventId, user_id: currentUser.id});
      }
    }


  render() {
    const {
      currentUser,
      eventId
    } = this.props;
    if (!currentUser) {
      return (<div></div>)
    }
    else {

      let bookmarkStyle = ""
      if (currentUser.bookmarked_event_ids.includes(eventId)) {
        bookmarkStyle = "fa fa-bookmark fa-2x bluefill"
      } else {
        bookmarkStyle = "fa fa-bookmark-o fa-2x"
      }

    return(
      <button className="event-index-item-bookmark" onClick={this.toggleCategoryMembership(currentUser, eventId)}>
        <i className={bookmarkStyle} aria-hidden="true" />
      </button>
    )
  }
}

}

export default BookmarkButton;
