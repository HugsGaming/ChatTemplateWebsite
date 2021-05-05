import React from 'react'
import {formatRelative} from 'date-fns'

const Message = ({
    createdAt = null,
    text = '',
    displayName = '',
    photoUrl: photoURL = ''
}) => {
    return (
        <div>
            {photoURL ? (
                <img src={photoURL} alt="Avatar" height={45} width={45}  />
            ) : null}
            {displayName ? <p>{displayName}</p> : null}
            {createdAt?.seconds ? (
                <span>
                    {formatRelative(new Date(createdAt.seconds * 1000), new Date()
                    )}
                </span>
            ) : null}
            <p>{text}</p>
        </div>
    )
};

export default Message;
