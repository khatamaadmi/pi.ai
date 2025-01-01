import React from 'react';

export function ErrorMessage({ message }) {
    return (
        <div className="text-red-500 text-center p-2">
            {message}
        </div>
    );
}