'use client';

import React from 'react';

export const ClientComponent: React.FC<{ date: Date }> = ({ date }) => <p>{date.toString()}</p>;
