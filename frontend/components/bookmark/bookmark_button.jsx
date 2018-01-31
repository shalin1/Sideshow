import React from 'react'
import lodash from 'lodash';

class BookmarkButton extends React.Component {
  constructor(props) {
    super(props);
    this.changeBookmark = this.changeBookmark.bind(this);
  }

  changeBookmark(currentUser, eventId) {
      if (currentUser.bookmarked_event_ids.includes(eventId)) {
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
      <button className="event-index-item-bookmark" onClick={this.changeBookmark(currentUser, eventId)}>
        <i className={bookmarkStyle} aria-hidden="true" />
      </button>
    )
  }
}

}

export default BookmarkButton;
