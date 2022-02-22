import React, { useState } from 'react';

export default function BucketForm() {

    return (
        <div>
            <form>
                <input type="text" placeholder="Your bucket here..." />
                <button>Add bucket!</button>
            </form>
        </div>
    )
}