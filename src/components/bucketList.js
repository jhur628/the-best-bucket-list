import React, { useState } from 'react';
import Bucket from './bucket';
import BucketForm from './bucketForm';

export default function BucketList() {
    // Create bucket state and function to set bucket state
    const [bucket, setBucket] = useState([]);

    const addBucket = (item) => {
        console.log(`Added a bucket: `, item)

        // If there is no text return the function
        if (!item.text) {
            return;
        };

        // Add the new item into the bucket array of objects
        const newBucket = [item, ...bucket];
        console.log(newBucket);

        // set bucket using newBucket
        setBucket(newBucket);
    }

    return (
        <div>
            <BucketForm onSubmit={addBucket} />
            <Bucket />
        </div>
    )
}