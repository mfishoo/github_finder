import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class UserItem extends Component {
  render() {
    const { login, avatar_url } = this.props.user;
    return (
      <div className='card text-center'>
        <img
          src={avatar_url}
          alt=''
          className='round-img'
          style={{
            width: '60px',
          }}
        />
        <h3>{login}</h3>
        <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>
          More
        </Link>
      </div>
    );
  }
}

export default UserItem;
