import React, { useState } from 'react';
import Bucket from './bucket';
import BucketForm from './bucketForm';

export default function BucketList() {

    return (
        <div>
            <BucketForm />
            <Bucket />
        </div>
    )
}